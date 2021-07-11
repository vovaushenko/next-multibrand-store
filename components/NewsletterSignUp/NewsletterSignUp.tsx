import React, { useState } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import FormTextField from '../FormTextField/FormTextField';
import SectionHeader from '../SectionHeader/SectionHeader';
import { SignUpSection } from './styles';

/**
 * NewsletterSignUp component where user can subscribe to newsletter by submitting his email
 *@function NewsletterSignUp
 *@returns {JSX.Element} - Rendered NewsletterSignUp component
 */
const NewsletterSignUp = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('User newsletter signup');
    //TODO: add email validation
    //TODO: connect to backend and handle user subscription to a newsletter
  };
  return (
    <Container>
      <SignUpSection>
        <SectionHeader headerText={'newsletter sign up'} />
        <p>Get info on new drops, promos & more.</p>
        <form className="signup-form" onSubmit={handleNewsletterSubmit}>
          <FormTextField
            name="email"
            placeholder="Your Email"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <Button text="subscribe" type="submit" />
        </form>
      </SignUpSection>
    </Container>
  );
};

export default NewsletterSignUp;
