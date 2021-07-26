import { shallow } from 'enzyme';
import React from 'react';
import { BiDollar } from 'react-icons/bi';
import DashboardCard from './DashboardCard';
import * as Styled from './styles.DashboardCard';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(
    <DashboardCard
      variant="icon"
      header="tomato"
      stat="500"
      icon={<BiDollar />}
    />
  );
};

describe('Checkout Shipping info component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct card header', () => {
    const header = wrap.find(Styled.Header);
    expect(header.text()).toBe('tomato');
  });
  it('should render correct card header', () => {
    const stat = wrap.find(Styled.Stat);
    expect(stat.text()).toBe('500');
  });

  it('should render specified icon', () => {
    const iconWrap = wrap.find(Styled.ImageWrapper);
    const icon = iconWrap.find(BiDollar);
    expect(icon.length).toBe(1);
  });
});
