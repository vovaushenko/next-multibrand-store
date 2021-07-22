import { signOut, useSession } from 'next-auth/client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../Button/Button';
import FormFileField from '../FormFileField/FormFileField';
import FormTextField from '../FormTextField/FormTextField';
import * as Styled from './styles.UpdateUserAccount';

/**
 * Update User Account details component
 *@function UpdateUserAccount
 *@returns {JSX.Element} - Rendered UpdateUserAccount component
 */
const UpdateUserAccount = (): JSX.Element => {
  // we will use session to get first, last names and avatar
  const [session] = useSession();
  const userFirstName = session ? session.user.name.split(' ')[0] : '';
  const userLastName = session ? session.user.name.split(' ')[1] : '';
  const userAvatar = session ? session.user.avatar.url : '';

  // User Account Data, some of initial values will be from session (first and last name)
  const [firstName, setFirstName] = useState<string>(userFirstName);
  const [lastName, setLastName] = useState<string>(userLastName);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [verificationPassword, setVerificationPassword] = useState<string>('');

  //* Avatar Image and Image Preview
  const [avatar, setAvatar] = useState<string | ArrayBuffer | null>('');

  const [avatarPreview, setAvatarPreview] = useState<string>(userAvatar);

  const { updateUserProfile, clearAuthState } = useActions();

  const { isUpdated, isLoading, error } = useTypedSelector(
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

      updateUserProfile(newUser);
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
    if (isUpdated) {
      toast.success(
        '🎉 Account details have been successfully updated. Please sign-in again.🎉'
      );

      setTimeout(() => {
        signOut();
      }, 2000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isUpdated]);

  return (
    <Styled.Form onSubmit={handleUserRegistration}>
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
        placeholder="New Password"
        value={password}
        setValue={setPassword}
        required={true}
      />
      <FormTextField
        type="password"
        name="verificationPassword"
        placeholder="Verify New Password"
        value={verificationPassword}
        setValue={setVerificationPassword}
        required={true}
      />
      <Styled.AvatarControl>
        <Styled.AvatarPreview>
          <Image
            src={String(avatarPreview) || '/images/avatar.png'}
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
        text={
          isUpdated
            ? 'Details are updated, please sign-in again'
            : 'Update Account details'
        }
        isLoading={isLoading}
        isCompleted={isUpdated}
        disabled={isUpdated}
      />
    </Styled.Form>
  );
};

export default UpdateUserAccount;
