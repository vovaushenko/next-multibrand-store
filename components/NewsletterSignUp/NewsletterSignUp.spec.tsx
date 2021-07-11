import { shallow } from 'enzyme';
import React from 'react';
import NewsletterSignUp from './NewsletterSignUp';

describe('Footer contact/reward links Section', () => {
  const wrap = shallow(<NewsletterSignUp />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  //TODO:Test email useState
  //TODO: When redux-part on the app will be finished, test UI handleSubmit action
});
