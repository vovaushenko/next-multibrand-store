import { addDecorator } from '@storybook/react';
import * as nextImage from 'next/image';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../styles/mainTheme';
import { initialReduxStore } from '../test/initialReduxStore';
import { storeFactory } from '../test/testUtils';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

const themes = [mainTheme];

addDecorator(withThemesProvider(themes), ThemeProvider);
//TODO: Solve problem with the below decorator
const store = storeFactory(initialReduxStore);
// addDecorator((s) => (
//   <Provider store={store}>
//     <GlobalStyles />
//     {s()}
//   </Provider>
// ));
