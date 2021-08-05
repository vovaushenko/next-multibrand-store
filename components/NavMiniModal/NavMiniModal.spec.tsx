import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import NavMiniModal from './NavMiniModal';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(
    withReduxAndStyledProviders(
      <NavMiniModal
        isOpen={true}
        modalContent={() => <h1>tomato</h1>}
        top="1rem"
        right="1rem"
        modalWidth="100%"
      />
    )
  );
};
describe('Navbar Header Search', () => {
  const navSearch = setup();

  it('should render with no errors', () => {
    expect(navSearch);
    expect(navSearch.length).toBe(1);
  });

  //TODO: Write tests when component will be ready
});
