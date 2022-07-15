import React, { useCallback } from 'react';
import { buynowReducer, State, initialState } from './buynow.reducer';
import { Item, getItem, inStock } from './buynow.utils';
import { useLocalStorage } from '@/lib/use-local-storage';
import { CART_KEY } from '@/lib/constants';
import { useAtom } from 'jotai';
import { verifiedResponseAtom } from '@/store/checkout';
import { BUYNOW_KEY } from '../../lib/constants/index';
interface BuyNowProviderState extends State {
  addItemToBuyNow: (item: Item, quantity: number) => void;
  removeItemFromBuyNow: (id: Item['id']) => void;
  clearItemFromBuyNow: (id: Item['id']) => void;
  getItemFromBuyNow: (id: Item['id']) => any | undefined;
  isInBuyNow: (id: Item['id']) => boolean;
  isInStock: (id: Item['id']) => boolean;
  resetBuyNow: () => void;
}
export const buynowContext = React.createContext<BuyNowProviderState | undefined>(
  undefined
);

buynowContext.displayName = 'BuyNowContext';

export const useBuyNow = () => {
  const context = React.useContext(buynowContext);
  if (context === undefined) {
    throw new Error(`useBuyNow must be used within a BuyNowProvider`);
  }
  return React.useMemo(() => context, [context]);
};

export const BuyNowProvider: React.FC = (props) => {
  const [savedBuyNow, saveBuyNow] = useLocalStorage(
    BUYNOW_KEY,
    JSON.stringify(initialState)
  );
  const [state, dispatch] = React.useReducer(
    buynowReducer,
    savedBuyNow ? JSON.parse(savedBuyNow) : initialState
  );
  const [, emptyVerifiedResponse] = useAtom(verifiedResponseAtom);
  React.useEffect(() => {
    emptyVerifiedResponse(null);
  }, [emptyVerifiedResponse, state]);

  React.useEffect(() => {
    saveBuyNow(JSON.stringify(state));
  }, [state, saveBuyNow]);

  const addItemToBuyNow = (item: Item, quantity: number) =>
    dispatch({ type: 'BUYNOW_WITH_QUANTITY', item, quantity });
  const addItemToWishlist = (item: Item) =>
    dispatch({ type: 'ADD_ITEM_WISHLIST', item });
  const removeItemFromBuyNow = (id: Item['id']) =>
    dispatch({ type: 'REMOVE_ITEM_OR_QUANTITY', id });
  const clearItemFromBuyNow = (id: Item['id']) =>
    dispatch({ type: 'REMOVE_ITEM', id });
  const isInBuyNow = useCallback(
    (id: Item['id']) => !!getItem(state.items, id),
    [state.items]
  );
  const isInWishlist = useCallback(
    (id: Item['id']) => !!getItem(state.items, id),
    [state.items]
  );
  const getItemFromBuyNow = useCallback(
    (id: Item['id']) => getItem(state.items, id),
    [state.items]
  );
  const isInStock = useCallback(
    (id: Item['id']) => inStock(state.items, id),
    [state.items]
  );
  const resetBuyNow = () => dispatch({ type: 'RESET_CART' });
  const value = React.useMemo(
    () => ({
      ...state,
      addItemToBuyNow,
      addItemToWishlist,
      removeItemFromBuyNow,
      clearItemFromBuyNow,
      getItemFromBuyNow,
      isInBuyNow,
      isInWishlist,
      isInStock,
      resetBuyNow,
    }),
    [getItemFromBuyNow, isInBuyNow, isInWishlist, isInStock, state]
  );
  return <buynowContext.Provider value={value} {...props} />;
};
