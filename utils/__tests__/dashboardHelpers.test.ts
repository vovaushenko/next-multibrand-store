import { mockOrder } from '../../store/reducers/__tests__/ordersReducer.test';
import { Order } from '../../types';
import {
  calculateTotalRevenue,
  countDeliveredOrders,
  getMostPopularProductStats,
} from '../dashboardHelpers';

const mockOrder1: Order = { ...mockOrder };

describe('countDeliveredOrders helper', () => {
  test('returns correct total revenue for 1 order', () => {
    const totalRevenue = calculateTotalRevenue([mockOrder1]);

    expect(totalRevenue).toBe(1 * mockOrder1.orderTotal);
  });

  test('returns correct total revenue for 3 orders', () => {
    const totalRevenue = calculateTotalRevenue([
      mockOrder1,
      mockOrder1,
      mockOrder1,
    ]);

    expect(totalRevenue).toBe(3 * mockOrder1.orderTotal);
  });

  test('returns correct total revenue for random number of  orders', () => {
    const randomNumber = Math.floor(Math.random() * 25 + 1);

    const totalRevenue = calculateTotalRevenue(
      Array.from({ length: randomNumber }, () => mockOrder1)
    );

    expect(totalRevenue).toBe(randomNumber * mockOrder1.orderTotal);
  });
});

describe('countDeliveredOrders helper', () => {
  test('returns zero for zero delivered', () => {
    const deliveredOrders = countDeliveredOrders([
      { ...mockOrder1 },
      { ...mockOrder1 },
      { ...mockOrder1 },
    ]);

    expect(deliveredOrders).toBe(0);
  });

  test('returns correct count of delivered orders', () => {
    const deliveredOrders = countDeliveredOrders([
      { ...mockOrder1 },
      { ...mockOrder1, deliveryStatus: 'delivered' },
    ]);

    expect(deliveredOrders).toBe(1);
  });
  test('returns correct count of two delivered orders', () => {
    const deliveredOrders = countDeliveredOrders([
      { ...mockOrder1 },
      { ...mockOrder1, deliveryStatus: 'delivered' },
      { ...mockOrder1, deliveryStatus: 'delivered' },
    ]);

    expect(deliveredOrders).toBe(2);
  });
});

describe('getMostPopularProductStats helper', () => {
  test('returns zero for zero delivered', () => {
    const deliveredOrders = countDeliveredOrders([
      { ...mockOrder1 },
      { ...mockOrder1 },
      { ...mockOrder1 },
    ]);

    expect(deliveredOrders).toBe(0);
  });
});

describe('getMostPopularProductStats helper', () => {
  test('returns correct stats for zero orders', () => {
    const { maxPurchaseFrequency, mostTrendingItem } =
      getMostPopularProductStats([]);

    expect(maxPurchaseFrequency).toBe(0);
    expect(mostTrendingItem).toEqual({});
  });

  test('returns correct stats for three orders', () => {
    const { maxPurchaseFrequency, mostTrendingItem } =
      getMostPopularProductStats([mockOrder1, mockOrder1, mockOrder1]);

    expect(maxPurchaseFrequency).toBe(3);
    expect(mostTrendingItem).toEqual({
      brand: 'adidas',
      img: 'test',
      model: 'test',
      price: 124,
      productID: 'test1',
      size: '11',
    });
  });

  test('returns correct stats for five orders', () => {
    const { maxPurchaseFrequency, mostTrendingItem } =
      getMostPopularProductStats([
        mockOrder1,
        mockOrder1,
        mockOrder1,
        {
          ...mockOrder,

          purchase: [
            {
              brand: 'nike',
              img: 'test',
              model: 'zzz',
              price: 124,
              productID: 'zzz',
              size: '11',
            },
          ],
        },
        {
          ...mockOrder,

          purchase: [
            {
              brand: 'asics',
              img: 'test',
              model: 'qqq',
              price: 124,
              productID: 'zzz',
              size: '11',
            },
          ],
        },
      ]);

    expect(maxPurchaseFrequency).toBe(3);
    expect(mostTrendingItem).toEqual({
      brand: 'adidas',
      img: 'test',
      model: 'test',
      price: 124,
      productID: 'test1',
      size: '11',
    });
  });
});
