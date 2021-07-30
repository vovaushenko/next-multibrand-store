import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import FormTextAreaField from '../FormTextAreaField/FormTextAreaField';
import FormTextField from '../FormTextField/FormTextField';
import ContactUs from './ContactUs';

describe('ContactUs Form', () => {
  const wrap = shallow(<ContactUs />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render fields for name and email', () => {
    const textInput = wrap.find(FormTextField);
    expect(textInput.length).toBe(2);
  });

  it('should render field for message', () => {
    const message = wrap.find(FormTextAreaField);
    expect(message.length).toBe(1);
  });
});
