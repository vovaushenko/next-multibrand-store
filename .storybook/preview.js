import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyle';
import { mainTheme } from '../styles/mainTheme';
const themes = [mainTheme];

addDecorator(withThemesProvider(themes), ThemeProvider);

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
));
