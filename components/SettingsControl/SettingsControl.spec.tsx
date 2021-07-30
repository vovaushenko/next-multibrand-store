import { mount } from 'enzyme';
import React from 'react';
import { BiCog } from 'react-icons/bi';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import SettingsControl from './SettingsControl';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<SettingsControl />));
};

describe('Router Link', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render correct icon', () => {
    const icon = wrap.find(BiCog);
    expect(icon.length).toBe(1);
  });
});
