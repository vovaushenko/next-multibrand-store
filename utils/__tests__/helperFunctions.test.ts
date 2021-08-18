import { Review } from '../../types';
import { getAverageRating, getDropdownItems } from '../helperFunctions';
import { mockProduct } from '../../test/mockReduxStore';

describe('getAverageRating', () => {
  const mockReview: Review = {
    clientEmail: 'test@mail.com',
    clientName: 'john doe',
    createdAt: '12/4/2021',
    isReviewed: false,
    productID: 'id12z2',
    rating: 4,
    reviewContent: 'some review',
    title: 'title',
  };

  test('returns correct rating for 0 reviews', () => {
    const avgRating = getAverageRating([] as Review[]);
    expect(avgRating).toBe(0);
  });

  test('returns correct rating for 1 review', () => {
    const avgRating = getAverageRating([mockReview]);
    expect(avgRating).toBe(mockReview.rating);
  });

  test('returns correct rating for 1 review', () => {
    const review2 = { ...mockReview, rating: 5 };
    const review3 = { ...mockReview, rating: 3 };
    const avgDummyRating = Math.round(
      (mockReview.rating + review2.rating + review3.rating) / 3
    );

    const calculatedAvgRating = getAverageRating([
      mockReview,
      review2,
      review3,
    ]);

    expect(calculatedAvgRating).toBe(avgDummyRating);
  });
});

describe('getDropdownItems', () => {
  const mockProducts = [mockProduct];

  test('returns empty array for no-match', () => {
    const foundProducts = getDropdownItems('random', mockProducts);
    expect(foundProducts.length).toBe(0);
  });

  test('find product by correct search term', () => {
    const foundProducts = getDropdownItems('jordan', mockProducts);
    expect(foundProducts).toEqual([mockProduct]);
  });
});
