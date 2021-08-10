import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import NewsletterSignUp from './NewsletterSignUp';
import * as Styled from './styles';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<NewsletterSignUp />));
};

describe('Footer contact/reward links Section', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render signup form', () => {
    const signup = wrap.find(Styled.SignUP);
    expect(signup.length).toBe(1);
  });

  it('should render correct header', () => {
    const header = wrap.find(SectionHeader);
    expect(header.text()).toBe('newsletter sign up');
  });

  it('should render button with SUBSCRIBE title for non-subscribed users', () => {
    const btn = wrap.find(Button);
    expect(btn.text()).toBe('subscribe');
  });
});
