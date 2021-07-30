import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import Button from '../Button/Button';
import FormTextAreaField from '../FormTextAreaField/FormTextAreaField';
import FormTextField from '../FormTextField/FormTextField';
import * as Styled from './styles.ContactUs';

/**
 *Renders contact customer service support form
 *@function ContactUs
 *@returns {JSX.Element} - Rendered CardContent component
 */
const ContactUs = (): JSX.Element => {
  const router = useRouter();
  const [message, setMessage] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  //TODO: send email to notice support
  const handleContactCustomerSupport = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    router.reload();
  };

  return (
    <Styled.Form onSubmit={handleContactCustomerSupport}>
      <FormTextField
        name="userName"
        placeholder="Your Name"
        value={userName}
        setValue={setUserName}
        type="text"
        required
      />
      <FormTextField
        name="userEmail"
        placeholder="Your Email"
        value={userEmail}
        setValue={setUserEmail}
        type="text"
        required
      />

      <FormTextAreaField
        name="message"
        placeholder="Your Message"
        value={message}
        setValue={setMessage}
        required
      />

      <Button text="Contact us" type="submit" />
    </Styled.Form>
  );
};

export default ContactUs;
