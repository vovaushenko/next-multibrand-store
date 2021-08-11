import { Order, Purchase } from '../types';

/**
 * @EXPORTS
 */
export {
  calculateTotalRevenue,
  countDeliveredOrders,
  getMostPopularProductStats,
};

/**
 * @method calculateTotalRevenue
 * @param  {Order[]} orders - array of orders
 * @returns {number} - calculated total of orders
 */
const calculateTotalRevenue = (orders: Order[]): number =>
  orders.reduce((total, order) => total + order.orderTotal, 0);

/**
 * @method countDeliveredOrders
 * @param  {Order[]} orders - array of orders
 * @returns {number} - counts orders with delivery status - 'delivered'
 */
const countDeliveredOrders = (orders: Order[]): number =>
  orders.filter((order) => order.deliveryStatus === 'delivered').length;

/**
 * @method getMostPopularProductStats
 * @param  {Order[]} orders - array of orders
 * @returns {number} maxPurchaseFrequency - how many times the product was purchased
 * @returns {Purchase} - mostTrendingItem - most trending product
 */
const getMostPopularProductStats = (
  orders: Order[]
): { maxPurchaseFrequency: number; mostTrendingItem: Purchase } => {
  if (orders.length === 0) {
    return { maxPurchaseFrequency: 0, mostTrendingItem: {} as Purchase };
  }

  const flattenedProducts: Purchase[] = orders.reduce(
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
    mostTrendingItem,
    maxPurchaseFrequency,
  };
};
