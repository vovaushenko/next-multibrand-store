import { signIn } from 'next-auth/client';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import Input from '../FormTextField/FormTextField';
import * as Styled from './styles.SignIn';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

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
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={password}
        setValue={setPassword}
      />
      <Button type="submit" text="Sign In" isLoading={isLoading} />

      <Styled.Footer>
        <Styled.Text>
          New customer?
          <Link href="auth/register" passHref>
            <Styled.Registration>Register new account</Styled.Registration>
          </Link>
        </Styled.Text>
      </Styled.Footer>
    </Styled.Form>
  );
};

export default SignIn;
