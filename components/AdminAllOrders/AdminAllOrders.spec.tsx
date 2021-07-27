import { mount } from 'enzyme';
import React from 'react';
import { initialReduxStore } from '../../test/initialReduxStore';
import {
  storeFactory,
  withReduxAndStyledProviders,
} from '../../test/testUtils';
import FormTextField from '../FormTextField/FormTextField';
import AdminAllOrders from './AdminAllOrders';
import * as Styled from './styles.AdminAllOrders';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<AdminAllOrders />));
};

describe('AdminAllOrders Component', () => {
  const wrap = setup();
  const state = storeFactory(initialReduxStore);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render filters', () => {
    const filter = wrap.find(Styled.Filter);
    expect(filter.length).toBe(1);

    const filters = wrap.find(FormTextField);
    expect(filters.length).toBe(2);
  });

  it('should render all orders in global state', () => {
    const allOrders = state.getState().orders.orders;

    const renderedOrder = wrap.find(Styled.Order);

    expect(allOrders.length).toBe(renderedOrder.length);
  });
});
