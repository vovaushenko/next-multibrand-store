import { mount } from 'enzyme';
import React from 'react';
import Skeleton, { Props } from './Skeleton';
import '../__mocks__/matchMediaMock';
import ContentLoader from 'react-content-loader';
import PageHeader from '../PageHeader/PageHeader';
import { withReduxAndStyledProviders } from '../../test/testUtils';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = (props: Props) => {
  return mount(withReduxAndStyledProviders(<Skeleton {...props} />));
};

describe('Skeleton component', () => {
  describe('Product details page skeleton', () => {
    const wrap = setup({ variant: 'productDetails' });

    it('should render with no errors', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });
    it('should skeleton with specified params', () => {
      const skeleton = wrap.find(ContentLoader);
      expect(skeleton.prop('height')).toBe(window.innerHeight);
      expect(skeleton.prop('width')).toBe(window.innerWidth);
    });
  });

  describe('All products page skeleton', () => {
    const wrap = setup({ variant: 'allProducts' });

    it('should render', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });
    it('should skeleton with specified params', () => {
      const skeleton = wrap.find(ContentLoader);
      expect(skeleton.prop('height')).toBe(window.innerHeight);
      expect(skeleton.prop('width')).toBe(window.innerWidth);
    });
  });
  describe('Whats hot section skeleton', () => {
    const wrap = setup({ variant: 'whatsHot' });

    it('should render', () => {
      expect(wrap);
      expect(wrap.length).toBe(1);
    });

    it('should render correct header', () => {
      const header = wrap.find(PageHeader);
      expect(header.length).toBe(1);
    });
    it('should skeleton with specified params', () => {
      const skeleton = wrap.find(ContentLoader);
      expect(skeleton.prop('height')).toBe(window.innerHeight);
      expect(skeleton.prop('width')).toBe(window.innerWidth);
    });
  });
});
