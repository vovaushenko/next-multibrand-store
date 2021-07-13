import React from 'react';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import * as Styled from './styles';

export interface Props {
  review: string;
}
/**
 *@function Review Card
 *@param {string} review - product review
 *@returns {JSX.Element} - Rendered Review Card component
 */
const ReviewCard = ({ review }: Props): JSX.Element => {
  return (
    <Styled.CardContainer>
      <CardHeader headerText="Customer Reviews" />
      <Button text="LEAVE A REVIEW" />
      <Styled.Review>{review}</Styled.Review>
    </Styled.CardContainer>
  );
};

export default ReviewCard;
