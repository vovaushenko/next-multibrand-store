import { shallow } from 'enzyme';
import React from 'react';
import Skeleton, { Props } from './Skeleton';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = (props: Props) => {
  return shallow(<Skeleton {...props} />);
};

describe('Skeleton component', () => {
  describe('Page skeleton', () => {
    const wrap = setup({ variant: 'productDetails' });

    it('should render with no errors', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });
  });
});
