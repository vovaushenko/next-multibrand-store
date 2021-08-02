import React, { useState } from 'react';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO:when backend is ready, add redux logic and handle submit review
    e.preventDefault();
    console.log(name, email, title, review, rating);
  };

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

      <Button text="submit review" type="submit" />
    </Styled.Form>
  );
};

export default ReviewForm;
