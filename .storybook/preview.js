import { addDecorator } from '@storybook/react';
import * as nextImage from 'next/image';
import { Provider } from 'react-redux';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { store } from '../store';
import { GlobalStyles } from '../styles/globalStyle';
import { mainTheme } from '../styles/mainTheme';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

const themes = [mainTheme];

addDecorator(withThemesProvider(themes), ThemeProvider);

addDecorator((s) => (
  <Provider store={store}>
    <GlobalStyles />
    {s()}
  </Provider>
));
