import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../Button/Button';
import Container from '../Container/Container';
import FormTextField from '../FormTextField/FormTextField';
import SectionHeader from '../SectionHeader/SectionHeader';
import * as Styled from './styles';

/**
 * NewsletterSignUp component where user can subscribe to newsletter by submitting his email
 *@function NewsletterSignUp
 *@returns {JSX.Element} - Rendered NewsletterSignUp component
 */
const NewsletterSignUp = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const { getUserLocation } = useActions();
  const { isLoading, isLoaded } = useTypedSelector((state) => state.user);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getUserLocation();
  };

  return (
    <Container>
      <Styled.SignUP>
        <SectionHeader headerText={'newsletter sign up'} />
        <p>Get info on new drops, promos & more.</p>
        <Styled.Form className="signup-form" onSubmit={handleNewsletterSubmit}>
          <FormTextField
            name="email"
            placeholder="Your Email"
            type="email"
            value={email}
            setValue={setEmail}
            required
          />
          <Button
            text={isLoaded ? 'Thanks for subscription' : 'subscribe'}
            type="submit"
            isLoading={isLoading}
            isCompleted={isLoaded}
          />
        </Styled.Form>
      </Styled.SignUP>
    </Container>
  );
};

export default NewsletterSignUp;
