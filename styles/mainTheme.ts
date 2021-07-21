import { DefaultTheme } from 'styled-components';

export const mainTheme: DefaultTheme = {
  primaryBg: '#000000',
  secondaryBg: '#151515',
  secondaryBgLighter: '#383838',
  secondaryBgLightest: '#444444',
  primaryGolden: '#ffc130',
  secondaryGolden: '#ffa500',
  primaryWhite: '#ffffff',
  primaryRed: '#ff0000',
  darkGray: '#8f8f8f',
  lightGray: '#9a9696',
  lightestGray: '#d0d0d0',
  primaryGreen: '#4BB543',
  activeGreen: '#21fc6b',
  dashboardGrayBg: '#242424',
  dashboardGrayCard: '#1b1b1b',
  borderRadius: '0.5rem',
  borderGrayColor: 'rgba(143, 143, 143, 0.3)',
  selectedOutline: '0 0 0 1px #ffa500;',

  blackToGrayGradient: `linear-gradient(
    180deg,
    #000000 35.5%,
    #151515 50%,
    #383838 78.6%
  )`,

  grayToBlackGradient: `linear-gradient(
    180deg,
    #383838 35.5%,
    #151515 50%,
    #000000 78.6%
  )`,
  maxWidth: '1500px',

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};
