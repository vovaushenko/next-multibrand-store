import { shallow } from 'enzyme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../styles/mainTheme';
import * as Styled from './styles.MobileNavbar';

const setup = () => {
  return shallow(
    <ThemeProvider theme={mainTheme}>
      <Styled.Container />
    </ThemeProvider>
  );
};

const resizeWindow = (innerWidth: number): void => {
  window = Object.assign(window, { innerWidth });
  window.dispatchEvent(new Event('resize'));
};

describe('Mobile Navbar', () => {
  const wrapper = setup();
  it('should render on MOBILE screens', () => {
    resizeWindow(200);
    expect(wrapper.length).toBe(1);
  });
});
