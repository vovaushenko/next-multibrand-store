import { mount } from 'enzyme';
import Image from 'next/image';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../styles/mainTheme';
import CreditCard from './CreditCard';
import * as Styled from './styles.CreditCard';

/**
 * Setup function for the component
 * @returns {mountWrapper}
 */
const setup = () => {
  return mount(
    <ThemeProvider theme={mainTheme}>
      <CreditCard
        cardHolderImd="/images/avatar.png"
        cardHolderName="john doe"
        cardNumber="0000 0000 0000 0000"
      />
    </ThemeProvider>
  );
};

describe('CreditCard component', () => {
  const wrap = setup();

  it('should render correct card number', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct card number', () => {
    const cardNumber = wrap.find(Styled.CardNumber);
    expect(cardNumber.text()).toBe('0000 0000 0000 0000');
  });
  it('should render correct card holder name', () => {
    const cardHolderName = wrap.find(Styled.Name);
    expect(cardHolderName.text()).toBe('john doe');
  });

  it('should correctly render  card holder image', () => {
    const avatarWrap = wrap.find(Styled.CustomerAvatar);
    const avatar = avatarWrap.find(Image);
    expect(avatar.prop('src')).toBe('/images/avatar.png');
    expect(avatar.prop('alt')).toBe('john doe');
  });
});
