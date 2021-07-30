import { DefaultTheme } from 'styled-components';

export const mainTheme: DefaultTheme = {
  mode: 'dark',
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
  borderGrayColor: 'rgba(143, 143, 143, 0.1)',
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
  boxShadow: '0 0 10px rgb(0 0 0 / 15%), 0 3px 3px rgb(0 0 0 / 15%)',

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};
export const secondaryTheme: DefaultTheme = {
  mode: 'light',
  primaryBg: '#f4f4f8',
  secondaryBg: '#ffffff',
  secondaryBgLighter: '#4BB543',
  secondaryBgLightest: '#444444',
  primaryGolden: '#ffa500',
  secondaryGolden: '#ffa500',
  primaryWhite: '#343239',
  primaryRed: '#ff0000',
  darkGray: '#8f8f8f',
  lightGray: '#343239',
  lightestGray: '#d0d0d0',
  primaryGreen: '#4BB543',
  activeGreen: '#21fc6b',
  dashboardGrayBg: '#ffffff',
  dashboardGrayCard: '#f4f4f8',
  borderRadius: '0.5rem',
  borderGrayColor: 'rgba(143, 143, 143, 0.1)',
  selectedOutline: '0 0 0 1px #475be3;',

  blackToGrayGradient: `linear-gradient(
    180deg,
    #9a9696 35.5%,
    #d0d0d0 50%,
    rgba(255, 255, 255, 0.9) 78.6%
  )`,

  grayToBlackGradient: `linear-gradient(
    180deg,
    #ffffff 35.5%,
    #f4f4f8 50%,
    #f4f4f8 78.6%
  )`,
  maxWidth: '1500px',
  boxShadow: '0 0 10px rgb(0 0 0 / 15%), 0 3px 3px rgb(0 0 0 / 15%)',

  media: {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)',
  },
};

// colors BG: #f4f4f8
// card BG: #ffffff
// #151939
// #475be3
//Text color ##343239

// #002f34
// #
