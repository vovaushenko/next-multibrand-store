import { signIn } from 'next-auth/client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import Input from '../FormTextField/FormTextField';
import Registration from '../Registration/Registration';
import * as Styled from './styles.SignIn';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { openModal } = useActions();

  //* Session from next-auth, session.user contains a user after authentication
  // const [session, loading] = useSession();

  const handleUserSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    setIsLoading(false);
    if (result?.error) {
      toast.error(result.error);
    }
  };

  // Will open modal with registration form
  const handleUserRegistration = () => {
    openModal({
      modalYposition: window.scrollY,
      modalContent: <Registration />,
    });
  };

  return (
    <Styled.Form onSubmit={handleUserSignIn}>
      <CardHeader headerText="Sign in to your account" />
      <Styled.Text>Enter your email and password:</Styled.Text>
      <Input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={email}
        setValue={setEmail}
        required={true}
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={password}
        setValue={setPassword}
        required={true}
      />
      <Button type="submit" text="Sign In" isLoading={isLoading} />

      <Styled.Footer>
        <Styled.Text>
          New customer?
          <Styled.RegistrationBtn
            type="button"
            onClick={handleUserRegistration}
          >
            Register new account
          </Styled.RegistrationBtn>
        </Styled.Text>
      </Styled.Footer>
    </Styled.Form>
  );
};

export default SignIn;
