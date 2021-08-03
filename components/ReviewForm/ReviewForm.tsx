import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Review } from '../../types';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import FormTextField from '../FormTextField/FormTextField';
import Rating from '../Rating/Rating';
import * as Styled from './styles.ReviewForm';
/**
 *Renders review form for customers feedback on products
 *@function ReviewForm
 *@returns {JSX.Element} - Rendered ReviewForm component
 */
const ReviewForm = (): JSX.Element => {
  //local form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  //thunk action creator and global state
  const { uploadNewCustomerReview } = useActions();
  const { isLoading, isReviewUploaded, error } = useTypedSelector(
    (state) => state.reviews
  );
  const { _id } = useTypedSelector((state) => state.products.product);

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // we will get productID from global state, since at this moment it will be there
    const newCustomerReview: Review = {
      clientEmail: email,
      clientName: name,
      rating,
      title,
      reviewContent: review,
      productID: _id,
      isReviewed: false,
      createdAt: String(Date.now()),
    };

    uploadNewCustomerReview(newCustomerReview);
  };

  useEffect(() => {
    if (isReviewUploaded) {
      toast.success('Thank you for your review 💫');
    }

    if (error) {
      toast.error(error);
    }
  }, [isReviewUploaded, error]);

  return (
    <Styled.Form onSubmit={handleSubmitReview}>
      <CardHeader headerText="Leave your review" />

      <Rating setClientRating={setRating} />

      <FormTextField
        name="customer-name"
        placeholder="Enter your name"
        value={name}
        setValue={setName}
        type="text"
        required
      />
      <FormTextField
        name="customer-email"
        placeholder="Enter your email"
        value={email}
        setValue={setEmail}
        type="email"
        required
      />

      <FormTextField
        name="review-title"
        placeholder="Give your review a title"
        value={title}
        setValue={setTitle}
        type="text"
        required
      />

      <FormTextField
        name="review-text"
        placeholder="Write your comments here"
        value={review}
        setValue={setReview}
        type="text"
        required
      />

      <Button
        text={
          isReviewUploaded ? 'Thank you for the review!' : 'submit your review'
        }
        type="submit"
        isLoading={isLoading}
        isCompleted={isReviewUploaded}
      />
    </Styled.Form>
  );
};

export default ReviewForm;
