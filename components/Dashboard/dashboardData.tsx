import React, { ReactNode } from 'react';
import { BiDollar } from 'react-icons/bi';
import {
  MdLibraryBooks,
  MdPeople,
  MdRateReview,
  MdShoppingCart,
  MdShopTwo,
} from 'react-icons/md';

interface DashboardStat {
  header: string;
  stat: string;
  icon: ReactNode;
}

export const topRow: DashboardStat[] = [
  { header: 'Revenue', stat: `$${3500}k`, icon: <BiDollar className="icon" /> },
  {
    header: 'New Orders',
    stat: `${125}`,
    icon: <MdShoppingCart className="icon" />,
  },
  {
    header: 'Delivered Orders',
    stat: `${12}`,
    icon: <MdShopTwo className="icon" />,
  },
  {
    header: 'Active Users',
    stat: `${428}`,
    icon: <MdPeople className="icon" />,
  },
];

export const midRow = [
  {
    header: 'Newsletter SignUps',
    stat: '29',
    icon: <MdLibraryBooks className="icon" />,
  },
  {
    header: 'Customer Reviews',
    stat: '61',
    icon: <MdRateReview className="icon" />,
  },
];
