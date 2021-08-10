import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
  const { getUserLocation, uploadUserSignupInfo } = useActions();
  const { isLoading, isLocationLoaded, location, isUploaded } =
    useTypedSelector((state) => state.user);

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    getUserLocation();

    uploadUserSignupInfo({ ...location, email });
  };

  useEffect(() => {
    if (isLocationLoaded) {
      uploadUserSignupInfo({ ...location, email });
    }

    if (isUploaded) {
      toast.success('We will deliver info about the best drops 💪');
    }
  }, [isLocationLoaded, email, location, uploadUserSignupInfo]);

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
            text={isUploaded ? 'Thanks for subscription' : 'subscribe'}
            type="submit"
            isLoading={isLoading}
            isCompleted={isUploaded}
          />
        </Styled.Form>
      </Styled.SignUP>
    </Container>
  );
};

export default NewsletterSignUp;
