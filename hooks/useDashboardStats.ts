import { useEffect } from 'react';
import { Purchase } from '../types';
import {
  calculateTotalRevenue,
  countDeliveredOrders,
  getMostPopularProductStats,
} from '../utils/dashboardHelpers';
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
  userQuantity: number;
  activeUsers: number;
  newUsers: number;
  customerReviews: number;
} {
  const { loadAllCustomerOrders, getAllClientsDetails, loadAllReviews } =
    useActions();
  const { orders: allOrders } = useTypedSelector((state) => state.orders);
  const { clients } = useTypedSelector((state) => state.admin);
  const { allReviews } = useTypedSelector((state) => state.reviews);

  useEffect(() => {
    loadAllCustomerOrders();
    getAllClientsDetails();
    loadAllReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Order Stats
   **/
  const totalRevenue = calculateTotalRevenue(allOrders);
  const deliveredOrdersAmount = countDeliveredOrders(allOrders);
  const newOrdersAmount = allOrders.length;
  const { maxPurchaseFrequency, mostTrendingItem } =
    getMostPopularProductStats(allOrders);

  /**
   * User Stats
   **/
  // TODO:Implement active and new users based on their log-ins and registration info
  const userQuantity = clients.length;
  const activeUsers = Math.floor(clients.length * 0.6);
  const newUsers = 3;

  /**
   * Review Stats
   **/
  const customerReviews = allReviews.length;

  return {
    totalRevenue,
    newOrdersAmount,
    deliveredOrdersAmount,
    maxPurchaseFrequency,
    mostTrendingItem,
    userQuantity,
    activeUsers,
    newUsers,
    customerReviews,
  };
}
