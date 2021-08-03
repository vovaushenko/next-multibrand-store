import React, { useCallback, useEffect } from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdDateRange,
  MdPerson,
  MdSentimentDissatisfied,
  MdSentimentSatisfied,
  MdZoomOutMap,
} from 'react-icons/md';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Review } from '../../types';
import ReviewModalContent from '../ReviewModalContent/ReviewModalContent';
import * as Styled from './styles.AdminAllReviews';

/**
 *Renders all reviews with filtering and details features
 *@function AdminAllReviews
 *@returns {JSX.Element} - Rendered AdminAllReviews component
 */

const AdminAllReviews = (): JSX.Element => {
  const { loadAllReviews, openModal } = useActions();
  const { allReviews } = useTypedSelector((state) => state.reviews);

  useEffect(() => {
    loadAllReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showReviewDetails = useCallback(
    (review: Review) => {
      openModal({
        modalYposition: window.scrollY,
        modalContent: <ReviewModalContent review={review} />,
      });
    },
    [openModal]
  );

  return (
    <Styled.Container>
      {allReviews.map((review, id) => (
        <Styled.Review key={review.productID + id}>
          {/* REVIEWED/NOT REVIEWED BOX */}
          <Styled.StatWrapper>
            {review.isReviewed ? (
              <MdCheckBox className="icon" />
            ) : (
              <MdCheckBoxOutlineBlank className="icon" />
            )}
            <p>{review.isReviewed ? 'Reviewed' : 'Not Reviewed'}</p>
          </Styled.StatWrapper>
          {/* SHOW DETAILS BOX */}
          <Styled.StatWrapper onClick={() => showReviewDetails(review)}>
            <MdZoomOutMap className="icon" />
            <p>Details</p>
          </Styled.StatWrapper>
          {/* DATE REVIEWED BOX */}
          <Styled.StatWrapper>
            <MdDateRange className="icon" />
            <p>
              {new Date(review.createdAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </Styled.StatWrapper>
          {/* CLIENT NAME BOX */}
          <Styled.StatWrapper>
            <MdPerson className="icon" />
            <p>{review.clientName}</p>
          </Styled.StatWrapper>
          {/* RATING BOX */}
          <Styled.StatWrapper>
            {review.rating >= 4 ? (
              <MdSentimentSatisfied className="icon" />
            ) : (
              <MdSentimentDissatisfied className="icon" />
            )}
            <p>{review.rating}</p>
          </Styled.StatWrapper>
        </Styled.Review>
      ))}
    </Styled.Container>
  );
};

export default AdminAllReviews;
