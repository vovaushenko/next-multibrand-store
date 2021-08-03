import { Story } from '@storybook/react';
import React from 'react';
import CustomerReview, { Props } from './CustomerReview';

export default {
  title: 'utility/review/Customer Review',
  component: CustomerReview,
};

const Template: Story<Props> = (args) => <CustomerReview {...args} />;

export const Card = Template.bind({});
Card.args = {
  clientName: 'john doe',
  rating: 4,
  title: 'my review',
  createdAt: '2021-08-02T18:18:46.304Z',
  reviewContent:
    'This is one of the best purchases in my life. The sneakers are so comfy and the price was a bargain!',
};
