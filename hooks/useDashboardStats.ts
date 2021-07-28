import { useEffect } from 'react';
import { Purchase } from '../types';
import { useActions } from './useActions';
import { useTypedSelector } from './useTypedSelector';

/**
 * Custom hook that returns processed dashboard statistics in admin screen
 *@function useDashboardStats
 *@returns {number} totalRevenue - total revenue of all orders
 *@returns {number} newOrdersAmount - number of new orders
 *@returns {number} deliveredOrdersAmount - number of delivered orders
 *@returns {Purchase} mostTrendingItem - item that is currently the most popular and most purchased
 *@returns {number} maxPurchaseFrequency - number of orders of most popular item
 */
export function useDashboardStats(): {
  totalRevenue: number;
  newOrdersAmount: number;
  deliveredOrdersAmount: number;
  maxPurchaseFrequency: number;
  mostTrendingItem: Purchase;
} {
  const { loadAllCustomerOrders } = useActions();
  const { orders: allOrders } = useTypedSelector((state) => state.orders);

  useEffect(() => {
    loadAllCustomerOrders();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalRevenue = allOrders.reduce(
    (total, order) => total + order.orderTotal,
    0
  );

  const newOrdersAmount = allOrders.length;

  const deliveredOrdersAmount = allOrders.filter(
    (order) => order.deliveryStatus === 'delivered'
  ).length;

  const flattenedProducts: Purchase[] = allOrders.reduce(
    (allItems, order) => allItems.concat(order.purchase),
    [] as Purchase[]
  );

  const purchaseFrequencyMap = flattenedProducts.reduce(
    (map, item) => (
      map[item.productID] ? map[item.productID]++ : (map[item.productID] = 1),
      map
    ),
    {} as Record<string, number>
  );

  const maxPurchaseFrequency = Math.max(...Object.values(purchaseFrequencyMap));

  let mostBoughtID = '';
  for (const key in purchaseFrequencyMap) {
    if (purchaseFrequencyMap[key] === maxPurchaseFrequency) mostBoughtID = key;
  }

  const mostTrendingItem = flattenedProducts.find(
    (product) => product.productID === mostBoughtID
  ) as Purchase;

  return {
    totalRevenue,
    newOrdersAmount,
    deliveredOrdersAmount,
    maxPurchaseFrequency,
    mostTrendingItem,
  };
}
