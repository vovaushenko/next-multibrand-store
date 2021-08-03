import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { BsExclamationTriangle } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import ReviewModalContent from './ReviewModalContent';
import * as Styled from './styles.ReviewModalContent';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = (isReviewed: boolean) => {
  return shallow(
    <ReviewModalContent
      review={{
        clientEmail: 'test@gmail.com',
        clientName: 'john doe',
        createdAt: '13 August',
        isReviewed: isReviewed,
        productID: '123test',
        rating: 5,
        reviewContent: 'some review',
        title: 'title',
      }}
    />
  );
};

describe('Review Form', () => {
  const wrap = setup(true);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  describe('review is not reviewed', () => {
    const wrap = setup(false);

    it('should render not reviewed icon', () => {
      const notReviewedIcon = wrap.find(BsExclamationTriangle);
      expect(notReviewedIcon.length).toBe(1);
    });

    it('should render not reviewed message in header', () => {
      const header = wrap.find(Styled.Header).first();
      expect(header.text()).toBe('Not Reviewed');
    });

    it('should render correct customer email', () => {
      const customerEmail = wrap.find(Styled.Email);

      expect(customerEmail.text()).toBe('<MdEmail />test@gmail.com');
    });

    it('should render correct customer name', () => {
      const customerName = wrap.find(Styled.Name);

      expect(customerName.text()).toBe('<MdPerson />john doe');
    });
  });

  describe('review is  reviewed', () => {
    const wrap = setup(true);

    it('should render not reviewed icon', () => {
      const reviewedIcon = wrap.find(MdDone);
      expect(reviewedIcon.length).toBe(1);
    });

    it('should render reviewed message in header', () => {
      const header = wrap.find(Styled.Header).first();
      expect(header.text()).toBe('Reviewed');
    });

    it('should render correct customer email', () => {
      const customerEmail = wrap.find(Styled.Email);

      expect(customerEmail.text()).toBe('<MdEmail />test@gmail.com');
    });

    it('should render correct customer name', () => {
      const customerName = wrap.find(Styled.Name);

      expect(customerName.text()).toBe('<MdPerson />john doe');
    });
  });
});
