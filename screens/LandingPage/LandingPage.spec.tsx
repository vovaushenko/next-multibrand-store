import { mount } from 'enzyme';
import React from 'react';
import '../../components/__mocks__/matchMediaMock';
import Hero from '../../components/Hero/Hero';
import Skeleton from '../../components/Skeleton/Skeleton';
import WhatsHot from '../../components/WhatsHotSection/WhatsHotSection';
import { mockProduct } from '../../test/mockReduxStore';
import LandingPage, { Props } from './LandingPage';
import { withReduxAndStyledProviders } from '../../test/testUtils';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = (props: Props) => {
  return mount(withReduxAndStyledProviders(<LandingPage {...props} />));
};

describe('Landing page', () => {
  const wrap = setup({ areProductsLoading: true, products: [] });

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  describe('while loading', () => {
    it('should render Sekeleton while loading', () => {
      const skeleton = wrap.find(Skeleton);
      expect(skeleton.length).toBe(1);
    });

    it('should NOT render WhatsHot section while loading', () => {
      const whatsHot = wrap.find(WhatsHot);
      expect(whatsHot.length).toBe(0);
    });

    it('should render hero while loading', () => {
      const hero = wrap.find(Hero);
      expect(hero.length).toBe(1);
    });
  });

  describe('loaded state', () => {
    const wrap = setup({ areProductsLoading: false, products: [mockProduct] });
    it('should NOT render Skeleton when loaded', () => {
      const skeleton = wrap.find(Skeleton);
      expect(skeleton.length).toBe(0);
    });

    it('should render WhatsHot section when loaded', () => {
      const whatsHot = wrap.find(WhatsHot);
      expect(whatsHot.length).toBe(1);
    });

    it('should render hero anyway', () => {
      const hero = wrap.find(Hero);
      expect(hero.length).toBe(1);
    });
  });
});
