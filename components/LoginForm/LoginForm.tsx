import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import FormTextField from '../FormTextField/FormTextField';
import * as Styled from './styles.LoginForm';

/**
 *Renders login form. Successfully logged-in users will be redirected to IndexPage or AdminPages depending on their auth-role
 *@function LoginForm
 *@returns {JSX.Element} - Rendered LoginForm component
 */
const LoginForm = (): JSX.Element => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [session] = useSession();

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    setIsLoading(false);

    if (result && result.error) {
      toast.error(result.error);
    }
  };

  useEffect(() => {
    if (session?.user.role === 'admin') {
      router.push('/admin');
    }
    if (session?.user.role === 'user') {
      router.push('/');
    }
  }, [session, router]);

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleLogIn}>
        <CardHeader headerText="Log In Your Account" />
        <Styled.FormControl>
          <FormTextField
            name="client-email"
            placeholder="Enter Email"
            type="email"
            value={email}
            setValue={setEmail}
            required
          />
        </Styled.FormControl>

        <Styled.FormControl>
          <FormTextField
            name="client-password"
            placeholder="Enter Password"
            type="password"
            value={password}
            setValue={setPassword}
            required
          />
        </Styled.FormControl>

        <Button text="Log In" type="submit" isLoading={isLoading} />
      </Styled.Form>
    </Styled.Container>
  );
};

export default LoginForm;
