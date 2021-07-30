import { shallow } from 'enzyme';
import React from 'react';
import { BiCog } from 'react-icons/bi';
import SettingsControl from './SettingsControl';

describe('Router Link', () => {
  const wrap = shallow(<SettingsControl />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render correct icon', () => {
    const icon = wrap.find(BiCog);
    expect(icon.length).toBe(1);
  });
});
