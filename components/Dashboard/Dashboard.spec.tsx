import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import Dashboard from './Dashboard';
import * as Styled from './styles.Dashboard';

describe('Description Card', () => {
  const wrap = shallow(<Dashboard />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all rows', () => {
    const topRow = wrap.find(Styled.Row);
    expect(topRow.length).toBe(1);
    const midRow = wrap.find(Styled.MidRow);
    expect(midRow.length).toBe(1);
    const bottomRow = wrap.find(Styled.BottomRow);
    expect(bottomRow.length).toBe(1);
  });
  it('should render all dashboard cards', () => {
    const dashboardCard = wrap.find(DashboardCard);
    expect(dashboardCard.length).toBe(10);
  });
});
