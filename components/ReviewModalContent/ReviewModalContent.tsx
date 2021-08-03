import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useEffect } from 'react';
import { BsExclamationTriangle } from 'react-icons/bs';
import { MdDone, MdEmail, MdPerson } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Review } from '../../types';
import Button from '../Button/Button';
import * as Styled from './styles.ReviewModalContent';

interface Props {
  review: Review;
}
/**
 *@function ReviewModalContent
 *@param {object} review - review data
 *@returns {JSX.Element} - Rendered CardContent component
 */
const ReviewModalContent = ({ review }: Props): JSX.Element => {
  const router = useRouter();
  const { moderateReview, deleteReview } = useActions();
  const { isLoading, isUpdated, error, isDeleted } = useTypedSelector(
    (state) => state.admin
  );

  const markAsReviewed = useCallback(() => {
    if (review._id) {
      moderateReview(review._id);
    }
  }, [moderateReview, review._id]);

  const deleteCustomerReview = useCallback(() => {
    if (confirm('Are you sure want to delete this review?')) {
      if (review._id) {
        deleteReview(review._id);
      }
    }
  }, [review._id, deleteReview]);

  useEffect(() => {
    if (error) toast.error(error);
    if (isUpdated) {
      toast.success('The review was successfully moderated 🧡');
      router.reload();
    }
    if (isDeleted) {
      toast.success('The review was successfully deleted 💥');
      router.reload();
    }
  }, [error, isUpdated, isDeleted, router]);

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
        <Button
          text="mark as reviewed"
          isLoading={isLoading}
          isCompleted={isUpdated}
          onClick={markAsReviewed}
        />
        <Button isLoading={isLoading} onClick={deleteCustomerReview}>
          delete this review
        </Button>
      </Styled.BtnWrapper>
    </Styled.Container>
  );
};

export default ReviewModalContent;
