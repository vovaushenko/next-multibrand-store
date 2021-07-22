import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import FormFileField from '../FormFileField/FormFileField';
import FormTextField from '../FormTextField/FormTextField';
import * as Styled from './styles.Registration';

/**
 * New User registration component
 *@function Registration
 *@returns {JSX.Element} - Rendered Registration component
 */
const Registration = (): JSX.Element => {
  //TODO: Refactor in User Object
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [verificationPassword, setVerificationPassword] = useState<string>('');

  //* Avatar Image and Image Preview
  const [avatar, setAvatar] = useState<string | ArrayBuffer | null>('');

  const [avatarPreview, setAvatarPreview] =
    useState<string>('/images/avatar.png');

  const { registerNewUser, clearAuthState } = useActions();

  const { isRegistered, isLoading, error } = useTypedSelector(
    (state) => state.auth
  );

  const handleUserRegistration = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (password !== verificationPassword) {
      toast.error('🤯 Passwords do not match 🤯');
      setPassword('');
      setVerificationPassword('');
      return;
    }
    if (avatar && typeof avatar === 'string') {
      const newUser = {
        name: `${firstName} ${lastName}`,
        avatar,
        email,
        password,
      };

      registerNewUser(newUser);
    }
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        if (typeof reader.result === 'string') {
          setAvatar(reader.result);
          setAvatarPreview(reader.result);
        }
      }
    };

    if (e.target.files?.length) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearAuthState();
    }
    if (isRegistered) {
      toast.success('🎉🎉🎉 Welcome on board 🎉🎉🎉');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isRegistered]);

  return (
    <Styled.Form onSubmit={handleUserRegistration}>
      <CardHeader headerText="Create your account" />
      <Styled.Text>Please fill in the information below:</Styled.Text>
      <FormTextField
        type="text"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        setValue={setFirstName}
        required={true}
      />
      <FormTextField
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        setValue={setLastName}
        required={true}
      />
      <FormTextField
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        setValue={setEmail}
        required={true}
      />
      <FormTextField
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        setValue={setPassword}
        required={true}
      />
      <FormTextField
        type="password"
        name="verificationPassword"
        placeholder="Verify Password"
        value={verificationPassword}
        setValue={setVerificationPassword}
        required={true}
      />
      <Styled.AvatarControl>
        <Styled.AvatarPreview>
          <Image
            src={String(avatarPreview)}
            alt="User avatar"
            height={50}
            width={50}
            objectFit="contain"
            className="user__avatar"
          />
        </Styled.AvatarPreview>
        <FormFileField
          labelText=""
          name="avatar"
          placeholder="Avatar"
          onChange={handleUploadImage}
          required={true}
        />
      </Styled.AvatarControl>
      <Button
        type="submit"
        text={isRegistered ? 'Welcome on board!' : 'Create Account'}
        isLoading={isLoading}
        isCompleted={isRegistered}
        disabled={isRegistered}
      />
    </Styled.Form>
  );
};

export default Registration;
