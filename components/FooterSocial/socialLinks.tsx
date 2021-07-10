import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export type SocialLink = { url: string; icon: JSX.Element };

export const socialLinks: SocialLink[] = [
  {
    url: 'https://facebook.com/',
    icon: <FaFacebook className={'footer-social-icon'} />,
  },
  {
    url: 'https://twitter.com/',
    icon: <FaTwitter className={'footer-social-icon'} />,
  },
  {
    url: 'https://www.instagram.com/',
    icon: <FaInstagram className={'footer-social-icon'} />,
  },
];
