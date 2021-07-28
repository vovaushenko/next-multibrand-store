import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { initialReduxStore } from '../../test/initialReduxStore';
import {
  storeFactory,
  withReduxAndStyledProviders,
} from '../../test/testUtils';
import FormTextField from '../FormTextField/FormTextField';
import AdminAllClients from './AdminAllClients';
import * as Styled from './styles.AdminAllClients';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const state = storeFactory(initialReduxStore);
  return mount(
    withReduxAndStyledProviders(
      <Provider store={state}>
        <AdminAllClients />
      </Provider>
    )
  );
};

describe('AdminAllOrders Component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render filters', () => {
    const filter = wrap.find(Styled.Filter);
    expect(filter.length).toBe(1);

    const filters = filter.find(FormTextField);
    expect(filters.length).toBe(2);
  });
});
