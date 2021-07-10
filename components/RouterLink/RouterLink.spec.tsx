import { shallow } from 'enzyme';
import React from 'react';
import RouterLink from './RouterLink';

describe('Router Link', () => {
  const wrap = shallow(
    <RouterLink href="/tomato" fontSize="2rem">
      tomato
    </RouterLink>
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render children or text', () => {
    const routerLink = wrap.find('.router-link');
    expect(routerLink.text()).toBe('tomato');
  });
});
