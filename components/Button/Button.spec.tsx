import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../styles/mainTheme';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import Button from './Button';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(
    withReduxAndStyledProviders(
      <Button
        text="tomato"
        isCompleted={false}
        isLoading={true}
        disabled={false}
      />
    )
  );
};

describe('Button', () => {
  const wrap = setup();

  it('should render text content without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('button').text()).toBe('tomato');
  });

  test('it applies default styles', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={mainTheme}>
          <Button />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('border', '0');
    expect(tree).toHaveStyleRule('cursor', 'pointer');
  });
});
