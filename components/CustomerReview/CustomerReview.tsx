import React from 'react';
import FiveStars from '../FiveStars/FiveStars';
import * as Styled from './styles.CustomerReview';

export interface Props {
  clientName: string;
  title: string;
  reviewContent: string;
  rating: number;
  createdAt: string;
}
/**
 *@function CustomerReview
 *@param {string} clientName - amount of products in cart
 *@param {number} rating - rating 1 to 5
 *@param {string} title - title of the review
 *@param {string} reviewContent - text of the review
 *@param {string} createdAt - date of review creation
 *@returns {JSX.Element} - Rendered CustomerReview component
 */
const CustomerReview = ({
  clientName,
  rating,
  reviewContent,
  title,
  createdAt,
}: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ReviewHeader>
        <Styled.ClientName>{clientName}</Styled.ClientName>
        <Styled.Time>
          {new Date(createdAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Styled.Time>
      </Styled.ReviewHeader>

      <Styled.ReviewBody>
        <FiveStars rating={rating} />
        <Styled.ReviewTitle>{title}</Styled.ReviewTitle>
        <Styled.ReviewText>{reviewContent}</Styled.ReviewText>
      </Styled.ReviewBody>
    </Styled.Container>
  );
};
export default CustomerReview;
