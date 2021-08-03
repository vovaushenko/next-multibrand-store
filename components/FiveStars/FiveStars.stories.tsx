import { Story } from '@storybook/react';
import React from 'react';
import FiveStars, { Props } from './FiveStars';

export default {
  title: 'utility/review/Stars',
  component: FiveStars,
};

const Template: Story<Props> = (args) => <FiveStars {...args} />;
export const TwoStars = Template.bind({});
TwoStars.args = { rating: 2 };
export const ThreeStars = Template.bind({});
ThreeStars.args = { rating: 3 };
export const FourStars = Template.bind({});
FourStars.args = { rating: 4 };
export const FiveStar = Template.bind({});
FiveStar.args = { rating: 5 };
