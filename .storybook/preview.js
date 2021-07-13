import { addDecorator } from '@storybook/react';
import * as nextImage from 'next/image';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyle';
import { mainTheme } from '../styles/mainTheme';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

const themes = [mainTheme];

addDecorator(withThemesProvider(themes), ThemeProvider);

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
));
