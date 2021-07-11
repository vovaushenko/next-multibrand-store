import { RouterLinkType } from './../../types/index';

export const adminNavLinks: RouterLinkType<string>[] = [
  { text: 'Dashboard', href: '/admin' },
  { text: 'Products', href: '/admin/products' },
  { text: 'Add Product', href: '/admin/add' },
  { text: 'Update Product', href: '/admin/update' },
  { text: 'Orders', href: '/admin/orders' },
  { text: 'Delivery', href: '/admin/delivery' },
  { text: 'Reviews', href: '/admin/reviews' },
];
