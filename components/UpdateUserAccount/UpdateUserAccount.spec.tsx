import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import Button from '../Button/Button';
import FormFileField from '../FormFileField/FormFileField';
import FormTextField from '../FormTextField/FormTextField';
import UpdateUserAccount from './UpdateUserAccount';

const setup = () => {
  return mount(withReduxAndStyledProviders(<UpdateUserAccount />));
};

describe('Update User Account', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all form elements', () => {
    const textFields = wrap.find(FormTextField);
    expect(textFields.length).toBe(5);
    const fileFields = wrap.find(FormFileField);
    expect(fileFields.length).toBe(1);
  });
  it(' should render correct helper text in button', () => {
    const btn = wrap.find(Button);
    expect(btn.text()).toBe('Update Account details');
  });
});
