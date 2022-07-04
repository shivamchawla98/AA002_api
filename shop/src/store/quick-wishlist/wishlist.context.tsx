import React, { useCallback } from 'react';
import { wishlistReducer, State, initialState } from './wishlist.reducer';
import { Item, getItem, inStock } from './wishlist.utils';
import { useLocalStorage } from '@/lib/use-local-storage';
import { CART_KEY, WISHLIST_KEY } from '@/lib/constants';
import { useAtom } from 'jotai';
import { verifiedResponseAtom } from '@/store/checkout';
interface WishlistProviderState extends State {
  addItemToWishlist: (item: Item) => void;
  removeItemFromWishlist: (id: Item['id']) => void;
  clearItemFromWishlist: (id: Item['id']) => void;
  getItemFromWishlist: (id: Item['id']) => any | undefined;
  isInWishlist: (id: Item['id']) => boolean;
  isInStock: (id: Item['id']) => boolean;
  resetWishlist: () => void;
}
export const wishlistContext = React.createContext<WishlistProviderState | undefined>(
  undefined
);

wishlistContext.displayName = 'WishlistContext';

export const useWishlist = () => {
  const context = React.useContext(wishlistContext);
  console.log("context");
  console.log(context);
  if (context === undefined) {
    throw new Error(`useWishlist must be used within a WishlistProvider`);
  }
  return React.useMemo(() => context, [context]);
};

export const WishlistProvider: React.FC = (props) => {
  const [savedWishlist, saveWishlist] = useLocalStorage(
    WISHLIST_KEY,
    JSON.stringify(initialState)
  );
  const [state, dispatch] = React.useReducer(
    wishlistReducer,
    savedWishlist ? JSON.parse(savedWishlist) : initialState
  );
  const [, emptyVerifiedResponse] = useAtom(verifiedResponseAtom);
  React.useEffect(() => {
    emptyVerifiedResponse(null);
  }, [emptyVerifiedResponse, state]);

  React.useEffect(() => {
    saveWishlist(JSON.stringify(state));
  }, [state, saveWishlist]);

  const addItemToWishlist = (item: Item) =>
    dispatch({ type: 'ADD_ITEM_WISHLIST', item});
  const removeItemFromWishlist = (id: Item['id']) =>
    dispatch({ type: 'REMOVE_ITEM_OR_QUANTITY', id });
  const clearItemFromWishlist = (id: Item['id']) =>
    dispatch({ type: 'REMOVE_ITEM', id });
  const isInWishlist = useCallback(
    (id: Item['id']) => !!getItem(state.items, id),
    [state.items]
  );
  const getItemFromWishlist = useCallback(
    (id: Item['id']) => getItem(state.items, id),
    [state.items]
  );
  const isInStock = useCallback(
    (id: Item['id']) => inStock(state.items, id),
    [state.items]
  );
  const resetWishlist = () => dispatch({ type: 'RESET_CART' });
  const value = React.useMemo(
    () => ({
      ...state,
      addItemToWishlist,
      removeItemFromWishlist,
      clearItemFromWishlist,
      getItemFromWishlist,
      isInWishlist,
      isInStock,
      resetWishlist,
    }),
    [getItemFromWishlist, isInWishlist, isInStock, state]
  );
  return <wishlistContext.Provider value={value} {...props} />;
};
