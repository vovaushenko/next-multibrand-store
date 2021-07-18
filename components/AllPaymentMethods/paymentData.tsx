import { PaymentMethod } from '../../types';

export const allPaymentMethods: PaymentMethod[] = [
  { iconSrc: '/images/payment-icons/paypal.svg', methodName: 'pay-pal' },
  { iconSrc: '/images/payment-icons/amex.svg', methodName: 'amex' },
  {
    iconSrc: '/images/payment-icons/apple-pay.svg',
    methodName: 'apple-pay',
  },
  {
    iconSrc: '/images/payment-icons/google-pay.svg',
    methodName: 'google-pay',
  },
  { iconSrc: '/images/payment-icons/jcb.svg', methodName: 'jcb' },
  { iconSrc: '/images/payment-icons/maste.svg', methodName: 'master' },
  { iconSrc: '/images/payment-icons/p-2.svg', methodName: 'method' },
  { iconSrc: '/images/payment-icons/p-i.svg', methodName: 'method' },
  { iconSrc: '/images/payment-icons/pay.svg', methodName: 'method' },
  { iconSrc: '/images/payment-icons/visa.svg', methodName: 'visa' },
];
