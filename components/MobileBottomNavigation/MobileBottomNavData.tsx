import React from 'react';
import { MdAccountCircle, MdHome, MdShopTwo, MdSms } from 'react-icons/md';

export const mobileBottomNavData = [
  { id: 1, href: '/', icon: <MdHome className="icon" />, text: 'Home' },
  {
    id: 2,
    href: '/products/all',
    icon: <MdShopTwo className="icon" />,
    text: 'Products',
  },
  {
    id: 3,
    href: '/account',
    icon: <MdAccountCircle className="icon" />,
    text: 'Account',
  },
  {
    id: 4,
    href: '/contact',
    icon: <MdSms className="icon" />,
    text: 'contact',
  },
];
