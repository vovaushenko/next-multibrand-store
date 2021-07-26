import { shallow } from 'enzyme';
import Image from 'next/image';
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

describe('Dashboard Card "Icon" variant', () => {
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

describe('Dashboard Card "Figure" variant', () => {
  const wrap = shallow(
    <DashboardCard
      variant="figure"
      imgParams={{ height: 200, src: '/test', width: 300 }}
      title="tomato"
      stats={[
        ['tomato', 'test'],
        ['tomato', 'test'],
      ]}
    />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct card title', () => {
    const stats = wrap.find(Styled.TextWrapper);
    expect(stats.length).toBe(2);
  });

  it('should render image with correct alt,src height and width', () => {
    const imgWrap = wrap.find(Styled.Figure);
    expect(imgWrap.length).toBe(1);

    const image = imgWrap.find(Image);
    expect(image.prop('alt')).toBe('tomato');
    expect(image.prop('src')).toBe('/test');
    expect(image.prop('height')).toBe(200);
    expect(image.prop('width')).toBe(300);
  });
});
