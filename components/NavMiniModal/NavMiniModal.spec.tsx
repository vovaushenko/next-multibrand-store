import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import NavMiniModal from './NavMiniModal';

describe('Navbar Header Search', () => {
  const navSearch = shallow(
    <NavMiniModal isOpen={true} modalContent={() => <h1>tomato</h1>} />
  );

  it('should render with no errors', () => {
    expect(navSearch);
    expect(navSearch.length).toBe(1);
  });

  //TODO: Write tests when component will be ready
});
