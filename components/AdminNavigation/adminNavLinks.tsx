import React from 'react';
import {
  MdAddShoppingCart,
  MdDashboard,
  MdEuroSymbol,
  MdSend,
  MdSentimentSatisfied,
  MdShoppingCart,
} from 'react-icons/md';
import { RouterLinkType } from '../../types/index';

export const adminNavLinks: RouterLinkType<string>[] = [
  { text: 'Dashboard', href: '/admin', icon: <MdDashboard className="icon" /> },
  {
    text: 'Products',
    href: '/admin/products',
    icon: <MdShoppingCart className="icon" />,
  },
  {
    text: 'Add Product',
    href: '/admin/add',
    icon: <MdAddShoppingCart className="icon" />,
  },
  {
    text: 'Orders',
    href: '/admin/orders',
    icon: <MdEuroSymbol className="icon" />,
  },
  {
    text: 'Delivery',
    href: '/admin/delivery',
    icon: <MdSend className="icon" />,
  },
  {
    text: 'Reviews',
    href: '/admin/reviews',
    icon: <MdSentimentSatisfied className="icon" />,
  },
];
