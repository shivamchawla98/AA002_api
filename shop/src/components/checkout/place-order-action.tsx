import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import { useCreateOrder, useOrderStatuses } from '@/framework/order';
import ValidationError from '@/components/ui/validation-error';
import Button from '@/components/ui/button';
import { formatOrderedProduct } from '@/lib/format-ordered-product';
import { useCart } from '@/store/quick-cart/cart.context';
import { checkoutAtom, discountAtom, walletAtom } from '@/store/checkout';
import {
  calculatePaidTotal,
  calculateTotal,
} from '@/store/quick-cart/cart.utils';
import { useBuyNow } from '@/store/quick-buynow/buynow.context';
// const Razorpay = require('razorpay'); 

export const PlaceOrderAction: React.FC<{ className?: string, checkoutType: string }> = (props) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { createOrder, isLoading } = useCreateOrder();
  console.log("#################3");
  console.log();

  const { orderStatuses } = useOrderStatuses({
    limit: 1,
  });

  const { items } = (props.checkoutType == 'cart') ? useCart() : useBuyNow();
  const [
    {
      billing_address,
      shipping_address,
      delivery_time,
      coupon,
      verified_response,
      customer_contact,
      payment_gateway,
      token,
    },
  ] = useAtom(checkoutAtom);
  const [discount] = useAtom(discountAtom);
  const [use_wallet_points] = useAtom(walletAtom);

  useEffect(() => {
    setErrorMessage(null);
  }, [payment_gateway]);

  const available_items = items?.filter(
    (item) => !verified_response?.unavailable_products?.includes(item.id)
  );

  const subtotal = calculateTotal(available_items);
  const total = calculatePaidTotal(
    {
      totalAmount: subtotal,
      tax: verified_response?.total_tax!,
      shipping_charge: verified_response?.shipping_charge!,
    },
    Number(discount)
  );
  const handlePlaceOrder = () => {
    if (!customer_contact) {
      setErrorMessage('Contact Number Is Required');
      return;
    }
    if (!use_wallet_points && !payment_gateway) {
      setErrorMessage('Gateway Is Required');
      return;
    }
    // if (!use_wallet_points && payment_gateway === 'STRIPE' && !token) {
    //   setErrorMessage('Please Pay First');
    //   return;
    // }
    let input = {
      //@ts-ignore
      products: available_items?.map((item) => formatOrderedProduct(item)),
      status: orderStatuses[0]?.id ?? '1',
      amount: subtotal,
      coupon_id: Number(coupon?.id),
      discount: discount ?? 0,
      paid_total: total,
      sales_tax: verified_response?.total_tax,
      delivery_fee: verified_response?.shipping_charge,
      total,
      delivery_time: delivery_time?.title,
      customer_contact,
      payment_gateway,
      use_wallet_points,
      billing_address: {
        ...(billing_address?.address && billing_address.address),
      },
      shipping_address: {
        ...(shipping_address?.address && shipping_address.address),
      },
    };
    if (payment_gateway === 'STRIPE') {
      //@ts-ignore
      input.token = token;
    }

    delete input.billing_address.__typename;
    delete input.shipping_address.__typename;
    //@ts-ignore
    createOrder(input);
  };
  const isDigitalCheckout = available_items.find((item) =>
    Boolean(item.is_digital)
  );

  const formatRequiredFields = isDigitalCheckout
    ? [customer_contact, payment_gateway, available_items]
    : [
        customer_contact,
        payment_gateway,
        billing_address,
        shipping_address,
        // delivery_time,
        available_items,
      ];
  const isAllRequiredFieldSelected = formatRequiredFields.every(
    (item) => !isEmpty(item)
  );


  // const createRazorPayOrder = () => {
  //   var instance = new Razorpay({ key_id: 'rzp_test_6KeEX1ZjMEQqzq', key_secret: 'M9B8Cad10RpKr5D3O2PuQKlY' })
  //   instance.orders.create({
  //     amount: subtotal,
  //     currency: "INR"
  //     },function(err: any, order: { id: any; }){
  //     console.log(")))))********ORDER RAZORPAY(((((");
  //     console.log(order.id);
  //     console.log(order);
  //     displayRazorpay(order.id)
  //   })
  // }

  // const displayRazorpay = (orderID: any) => {
  //   var options = {
  //     "key": "rzp_test_6KeEX1ZjMEQqzq", // Enter the Key ID generated from the Dashboard
  //     "name": "Acme Corp",
  //     "description": "Test Transaction",
  //     "image": "https://example.com/your_logo",
  //     "order_id": "order_Jl2XY3rZSNtP9q", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //     "handler": function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }){
  //         alert(response.razorpay_payment_id);
  //         alert(response.razorpay_order_id);
  //         alert(response.razorpay_signature)
  //         handlePlaceOrder()
  //     },
      
  //     "theme": {
  //         "color": "#3399cc"
  //     }
  //   };
  //   const _window = window as any
  //   var paymenytObject = new _window.Razorpay(options);
  //   paymenytObject.open();
    
  // }

  // const loadRazorpay  = () =>  {
  //   const script = document.createElement('script')
  //   script.src = 'https://checkout.razorpay.com/v1/checkout.js'
  //   document.body.appendChild(script)
  //   script.onload = displayRazorpay
  // }

  return (
    <>
      <Button
        id="rzp-button1"
        loading={isLoading}
        className={classNames('mt-5 w-full', props.className)}
        onClick={handlePlaceOrder}
        disabled={!isAllRequiredFieldSelected}
        {...props}
      />
      {errorMessage && (
        <div className="mt-3">
          <ValidationError message={errorMessage} />
        </div>
      )}
    </>
  );
};
