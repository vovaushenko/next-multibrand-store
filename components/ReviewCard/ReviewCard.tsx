import React, { useCallback } from 'react';
import { useActions } from '../../hooks/useActions';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import ReviewForm from '../ReviewForm/ReviewForm';
import * as Styled from './styles.ReviewCard';

export interface Props {
  review: string;
}
/**
 *@function Review Card
 *@param {string} review - product review
 *@returns {JSX.Element} - Rendered Review Card component
 */
const ReviewCard = ({ review }: Props): JSX.Element => {
  const { openModal } = useActions();

  const handleLeaveReview = useCallback(() => {
    openModal({
      modalYposition: window.scrollY,
      modalContent: <ReviewForm />,
    });
  }, []);

  return (
    <Styled.CardContainer>
      <CardHeader headerText="Customer Reviews" />
      <Button text="LEAVE A REVIEW" onClick={handleLeaveReview} />
      <Styled.Review>{review}</Styled.Review>
    </Styled.CardContainer>
  );
};

export default ReviewCard;
