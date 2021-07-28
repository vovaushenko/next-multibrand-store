import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Layout from './Layout';

describe('Main Layout wrapper component', () => {
  const wrapper = shallow(
    <Layout title="tomato">
      <h1>Children</h1>
    </Layout>
  );

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });

  it('should render correct title', () => {
    const title = wrapper.find('title');

    expect(title.text()).toBe('tomato');
  });
  it('should render wrapped children', () => {
    const children = wrapper.find('h1');
    expect(children.length).toBe(1);
    expect(children.text()).toBe('Children');
  });
  it('should render Navbar', () => {
    const navbar = wrapper.find(Navbar);
    expect(navbar.length).toBe(1);
  });
  it('should render Footer', () => {
    const footer = wrapper.find(Footer);
    expect(footer.length).toBe(1);
  });
});
