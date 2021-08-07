import { mount } from 'enzyme';
import 'jest-styled-components';
import Image from 'next/image';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import CardHeader from '../CardHeader/CardHeader';
import Order from './Order';
import { order } from './Order.stories';
import * as Styled from './styles.Order';

/**
 * Setup function for the component
 * @returns {mountWrapper}
 */
const setup = () => {
  return mount(
    withReduxAndStyledProviders(<Order orderID={1} order={order} />)
  );
};

describe('Order details', () => {
  const wrap = setup();
  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  describe('correct left column', () => {
    const leftColumn = wrap.find(Styled.LeftColumn);
    it('should render correct header', () => {
      const header = leftColumn.find(CardHeader);
      expect(header.text()).toBe('Order History');
    });
    it('should render correct subheader', () => {
      const subheader = leftColumn.find(Styled.Subheader).first();
      expect(subheader.text()).toBe(`Order #${1}`);
    });
  });

  describe('correct right column', () => {
    const rightColumn = wrap.find(Styled.RightColumn);
    it('should render correct header', () => {
      const header = rightColumn.find(CardHeader);
      expect(header.text()).toBe('Sneaker Maniac Goods');
    });
    it('should render all orders', () => {
      const orderItem = rightColumn.find(Styled.OrderItem);
      expect(orderItem.length).toBe(order.purchase.length);
    });

    it('should render correct image for order', () => {
      const firstOrder = rightColumn.find(Styled.OrderItem).first();

      const image = firstOrder.find(Image);
      expect(image.prop('src')).toBe(order.purchase[0].img);
      expect(image.prop('alt')).toBe(
        order.purchase[0].brand + ' ' + order.purchase[0].model
      );
    });
  });
});
