import React from 'react';
import { BsExclamationTriangle } from 'react-icons/bs';
import { MdDone, MdEmail, MdPerson } from 'react-icons/md';
import { Review } from '../../types';
import Button from '../Button/Button';
import * as Styled from './styles.ReviewModalContent';

interface Props {
  review: Review;
}
/**
 *@function CardContent
 *@param {number} productAmount - amount of products in cart
 *@param {object} cart - cart content
 *@returns {JSX.Element} - Rendered CardContent component
 */
const ReviewModalContent = ({ review }: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Status>
        {review.isReviewed ? (
          <MdDone className="icon" />
        ) : (
          <BsExclamationTriangle className="icon" />
        )}

        <Styled.Header>
          {review.isReviewed ? 'Reviewed' : 'Not Reviewed'}
        </Styled.Header>
      </Styled.Status>
      <Styled.InfoWrapper>
        <Styled.Header>Title</Styled.Header>
        <Styled.Text>{review.title}</Styled.Text>
      </Styled.InfoWrapper>

      <Styled.InfoWrapper>
        <Styled.Header>Review</Styled.Header>
        <Styled.Text>{review.reviewContent}</Styled.Text>
      </Styled.InfoWrapper>

      <Styled.Contact>
        <Styled.Header>Contact Client</Styled.Header>
        <div className="customer-info">
          <Styled.Email href={`mailto:${review.clientEmail}`}>
            <MdEmail className="icon" />
            {review.clientEmail}
          </Styled.Email>

          <Styled.Name>
            <MdPerson className="icon" />
            {review.clientName}
          </Styled.Name>
        </div>
      </Styled.Contact>

      <Styled.BtnWrapper>
        <Button text="mark as reviewed" />
        <Button>delete this review</Button>
      </Styled.BtnWrapper>
    </Styled.Container>
  );
};

export default ReviewModalContent;
