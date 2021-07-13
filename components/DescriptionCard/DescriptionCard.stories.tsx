import { Story } from '@storybook/react';
import React from 'react';
import DescriptionCard, { Props } from './DescriptionCard';

export default {
  title: 'utility/Description Card',
  component: DescriptionCard,
};

const Template: Story<Props> = (args) => <DescriptionCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  description:
    'Developed by Kanye West, the Adidas Yeezy Boost 380 is a running sneaker-inspired model with a chunky sole. They also sport a combination of materials on the upper, padded tongue/collar, Boost cushioning, and a rubber outsole. Adidas Yeezy Boost 380 (Covellite) gz0454 is first released in March 2021',
};
