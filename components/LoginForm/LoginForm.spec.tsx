import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import FormTextField from '../FormTextField/FormTextField';
import LoginForm from './LoginForm';
import * as Styled from './styles.LoginForm';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<LoginForm />));
};

describe('LoginForm component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct header', () => {
    const container = wrap.find(Styled.Container);
    const header = container.find(CardHeader);
    expect(header.length).toBe(1);
    expect(header.text()).toBe('Log In Your Account');
  });

  it('should render two text form with two text fields', () => {
    const form = wrap.find(Styled.Form);
    expect(form.length).toBe(1);

    const formInputs = form.find(FormTextField);
    expect(formInputs.length).toBe(2);
  });

  it('should render submit button', () => {
    const submitBtn = wrap.find(Button);
    expect(submitBtn.length).toBe(1);
  });
});
