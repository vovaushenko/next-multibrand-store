import { addDecorator } from '@storybook/react';
import * as nextImage from 'next/image';
import { Provider } from 'react-redux';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyle';
import { mainTheme } from '../styles/mainTheme';
import { mockReduxStore } from '../test/mockReduxStore';
import { storeFactory } from '../test/testUtils';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

const themes = [mainTheme];

addDecorator(withThemesProvider(themes), ThemeProvider);

const store = storeFactory(mockReduxStore);
addDecorator((story) => (
  <ThemeProvider theme={mainTheme}>
    <Provider store={store}>
      <GlobalStyles />
      {story()}
    </Provider>
  </ThemeProvider>
));
