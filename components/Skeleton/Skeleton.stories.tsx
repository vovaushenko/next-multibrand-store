import { Story } from '@storybook/react';
import React from 'react';
import Skeleton, { Props } from './Skeleton';

export default {
  title: 'Utility/Skeletons',
  component: Skeleton,
};

const Template: Story<Props> = (args) => <Skeleton {...args} />;
export const ProductDetailsPageSkeleton = Template.bind({});
ProductDetailsPageSkeleton.args = { variant: 'productDetails' };

export const AllProductsPageSkeleton = Template.bind({});
AllProductsPageSkeleton.args = { variant: 'allProducts' };

export const WhatsHotSection = Template.bind({});
WhatsHotSection.args = { variant: 'whatsHot' };
