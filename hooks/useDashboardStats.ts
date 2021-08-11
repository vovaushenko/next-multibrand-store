import { useEffect } from 'react';
import { Purchase } from '../types';
import {
  calculateTotalRevenue,
  countDeliveredOrders,
  getMostPopularProductStats,
} from '../utils/dashboardHelpers';
import { useActions } from './useActions';
import { useTypedSelector } from './useTypedSelector';

interface DashboardStats {
  totalRevenue: number;
  newOrdersAmount: number;
  deliveredOrdersAmount: number;
  maxPurchaseFrequency: number;
  mostTrendingItem: Purchase;
  userQuantity: number;
  activeUsers: number;
  newUsers: number;
  customerReviews: number;
  newsletterSignupsAmount: number;
}
/**
 * Custom hook that returns processed dashboard statistics in admin screen
 *@function useDashboardStats
 *@returns {number} totalRevenue - total revenue of all orders
 *@returns {number} newOrdersAmount - number of new orders
 *@returns {number} deliveredOrdersAmount - number of delivered orders
 *@returns {Purchase} mostTrendingItem - item that is currently the most popular and most purchased
 *@returns {number} maxPurchaseFrequency - number of orders of most popular item
 */
export function useDashboardStats(): DashboardStats {
  const {
    loadAllCustomerOrders,
    getAllClientsDetails,
    loadAllReviews,
    loadAllNewsletterSignups,
  } = useActions();

  const { allReviews } = useTypedSelector((state) => state.reviews);
  const { orders: allOrders } = useTypedSelector((state) => state.orders);
  const { clients, newsletterSignups } = useTypedSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (!allReviews.length) loadAllReviews();
    if (!allOrders.length) loadAllCustomerOrders();
    if (!newsletterSignups.length) loadAllNewsletterSignups();
    if (!clients.length) getAllClientsDetails();
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

  /**
   * Newsletter Signup Stats
   **/
  const newsletterSignupsAmount = newsletterSignups?.length;

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
    newsletterSignupsAmount,
  };
}
