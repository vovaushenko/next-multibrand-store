import React, { useCallback, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import CustomerReview from '../CustomerReview/CustomerReview';
import ReviewForm from '../ReviewForm/ReviewForm';
import * as Styled from './styles.ReviewCard';

/**
 *@function Review Card
 *@param {string} review - product review
 *@returns {JSX.Element} - Rendered Review Card component
 */
const ReviewCard = (): JSX.Element => {
  const { openModal, loadProductReviews } = useActions();
  const { _id } = useTypedSelector((state) => state.products.product);
  const { productReviews } = useTypedSelector((state) => state.reviews);

  const handleLeaveReview = useCallback(() => {
    openModal({
      modalYposition: window.scrollY,
      modalContent: <ReviewForm />,
    });
  }, []);

  useEffect(() => {
    loadProductReviews(_id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id]);

  return (
    <Styled.CardContainer hasReviews={productReviews.length > 0}>
      {productReviews.length === 0 ? (
        <>
          <CardHeader headerText="Customer Reviews" />
          <Button text="LEAVE A REVIEW" onClick={handleLeaveReview} />
          <Styled.Review>No reviews yet</Styled.Review>
        </>
      ) : (
        <Styled.Reviews>
          <CardHeader headerText="Reviews" />
          {productReviews.map((review, id) => (
            <CustomerReview key={id} {...review} />
          ))}
          <Button text="LEAVE A REVIEW" onClick={handleLeaveReview} />
        </Styled.Reviews>
      )}
    </Styled.CardContainer>
  );
};

export default ReviewCard;
