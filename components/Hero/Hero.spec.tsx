import { shallow } from 'enzyme';
import React from 'react';
import Hero from './Hero';

describe('Hero component', () => {
  const wrapper = shallow(
    <Hero imgSrc="/test" sneakerModel="tomato" sneakerName="avocado" />
  );
  it('should render component with no errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render correct sneaker model', () => {
    const sneakerModel = wrapper.find('h1');
    expect(sneakerModel.text()).toBe('tomato');
  });
  it('should render correct sneaker name', () => {
    const sneakerName = wrapper.find('h2');
    expect(sneakerName.text()).toBe('avocado');
  });
});
