import type {
  CheckoutVerificationInput,
  CreateOrderInput,
} from '__generated__/__types__';
import type { OrderQueryOptions, QueryOptions } from '@/types';
import {
  QueryOrderStatusesOrderByColumn,
  SortOrder,
} from '__generated__/__types__';

import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useModalAction } from '@/components/ui/modal/modal.context';
import {
  useCreateOrderMutation,
  useOrderQuery,
  useOrdersQuery,
  useOrderStatusesQuery,
  useVerifyCheckoutMutation,
} from './gql/orders.graphql';
import { NetworkStatus } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  useCreateRefundMutation,
  useRefundsQuery,
} from './gql/refunds.graphql';
import {
  useDownloadableProductsQuery,
  useGenerateDownloadableUrlMutation,
} from './gql/products.graphql';
import { useAtom } from 'jotai';
import { verifiedResponseAtom } from '@/store/checkout';
import { ROUTES } from '@/lib/routes';
import { useState } from 'react';
import { useToken } from '@/lib/hooks/use-token';

export function useOrders(options?: Partial<OrderQueryOptions>) {
  const { getToken } = useToken()
  var genToken = getToken();
  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
  } = useOrdersQuery({
    variables: {
      first: 10,
      customer_id: getToken(),
    },
    notifyOnNetworkStatusChange: true,
  });

  function handleLoadMore() {
    if (data?.orders?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.orders?.paginatorInfo?.currentPage + 1,
        },
      });
    }
  }
  return {
    orders: data?.orders?.data ?? [],
    paginatorInfo: data?.orders?.paginatorInfo,
    isLoading,
    error,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.orders?.paginatorInfo?.hasMorePages),
  };
}

export function useOrder({ tracking_number }: { tracking_number: string }) {
  const {
    data,
    loading: isLoading,
    error,
  } = useOrderQuery({
    variables: {
      tracking_number,
    },
  });

  return {
    order: data?.order,
    isLoading,
    error,
  };
}

export function useOrderStatuses(options: Pick<QueryOptions, 'limit'>) {
  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
  } = useOrderStatusesQuery({
    variables: {
      first: 100,
      page: 1,
      orderBy: [
        {
          column: QueryOrderStatusesOrderByColumn.Serial,
          order: SortOrder.Asc,
        },
      ],
    },
    notifyOnNetworkStatusChange: true,
  });

  function handleLoadMore() {
    if (data?.orderStatuses?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.orderStatuses?.paginatorInfo?.currentPage + 1,
        },
      });
    }
  }

  return {
    orderStatuses: data?.orderStatuses?.data ?? [],
    paginatorInfo: data?.orderStatuses?.paginatorInfo,
    isLoading,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    error,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.orderStatuses?.paginatorInfo?.hasMorePages),
  };
}

export function useRefunds(options: Pick<QueryOptions, 'limit'>) {
  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
  } = useRefundsQuery({
    variables: {
      orderBy: 'created_at',
      sortedBy: 'desc',
    },
    notifyOnNetworkStatusChange: true,
  });

  function handleLoadMore() {
    if (data?.refunds?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.refunds?.paginatorInfo?.currentPage + 1,
        },
      });
    }
  }
  return {
    refunds: data?.refunds?.data ?? [],
    paginatorInfo: data?.refunds?.paginatorInfo,
    isLoading,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    error,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.refunds?.paginatorInfo?.hasMorePages),
  };
}

export const useDownloadableProducts = (
  options: Pick<QueryOptions, 'limit'>
) => {
  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
  } = useDownloadableProductsQuery({
    variables: {
      first: options.limit,
    },
    notifyOnNetworkStatusChange: true,
  });
  function handleLoadMore() {
    if (data?.downloads?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.downloads?.paginatorInfo?.currentPage + 1,
          first: 5,
        },
      });
    }
  }
  return {
    downloads: data?.downloads?.data ?? [],
    paginatorInfo: data?.downloads?.paginatorInfo,
    isLoading,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    error,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.downloads?.paginatorInfo?.hasMorePages),
  };
};

export function useCreateRefund() {
  const { t } = useTranslation();
  const { closeModal } = useModalAction();
  const [refundRequest, { loading: isLoading }] = useCreateRefundMutation({
    refetchQueries: ['Orders'],
    onCompleted: () => {
      toast.success(t('text-refund-request-submitted'));
      closeModal();
    },
  });

  function createRefundRequest(input: any) {
    refundRequest({
      variables: {
        input,
      },
    });
  }

  return {
    createRefundRequest,
    isLoading,
  };
}
export function useCreateOrder() {
  const router = useRouter();
  // const [orderID,setOrderID] = useState("");
  var ORDER_ID = "";
  const [createOrder, { loading: isLoading }] = useCreateOrderMutation({
    onCompleted: (data) => {
      loadRazorpay()
      ORDER_ID = data.createOrder.tracking_number;
      
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  function create(input: CreateOrderInput) {
    createOrder({
      variables: {
        input,
      },
    });
  }


  const displayRazorpay = () => {
    var options = {
      "key": "rzp_test_6KeEX1ZjMEQqzq", // Enter the Key ID generated from the Dashboard
      "name": "PICKURNEEDS",
      "description": "Test Transaction",
      "image": "http://38.242.199.115:3000/img/pickneeds.png",
      "order_id": ORDER_ID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }){
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          router.push(`${ROUTES.ORDERS}/${ORDER_ID}`);
      },
      
      "theme": {
          "color": "#3399cc"
      }
    };
    const _window = window as any
    var paymenytObject = new _window.Razorpay(options);
    paymenytObject.open();
    
  }

  const loadRazorpay  = () =>  {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    document.body.appendChild(script)
    script.onload = displayRazorpay
  }


  return {
    createOrder: create,
    isLoading,
  };
}

export function useGenerateDownloadableUrl() {
  const [getDownloadableUrl] = useGenerateDownloadableUrlMutation({
    onCompleted: (data) => {
      function download(fileUrl: string, fileName: string) {
        var a = document.createElement('a');
        a.href = fileUrl;
        a.setAttribute('download', fileName);
        a.click();
      }
      download(data?.generateDownloadableUrl!, 'record.name');
    },
  });
  function generateDownloadableUrl(digital_file_id: string) {
    getDownloadableUrl({
      variables: {
        input: {
          digital_file_id,
        },
      },
    });
  }

  return {
    generateDownloadableUrl,
  };
}
export function useVerifyOrder() {
  const [_, setVerifiedResponse] = useAtom(verifiedResponseAtom);

  const [mutate, { loading: isLoading, error }] = useVerifyCheckoutMutation({
    onCompleted: (data) => {
      if (data?.verifyCheckout) {
        //@ts-ignore
        setVerifiedResponse(data.verifyCheckout);
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  function verifyOrder(values: CheckoutVerificationInput) {
    mutate({
      variables: {
        input: values,
      },
    });
  }
  return {
    mutate: verifyOrder,
    isLoading,
    error,
  };
}
