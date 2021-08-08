import { Review } from '../../types';
import { getAverageRating } from '../helperFunctions';

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
