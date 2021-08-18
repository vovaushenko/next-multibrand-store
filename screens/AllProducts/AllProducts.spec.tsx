import { shallow } from 'enzyme';
import React from 'react';
import Filters from '../../components/Filters/Filters';
import GridControl from '../../components/GridControl/GridControl';
import ProductGrid from '../../components/ProductsGrid/ProductsGrid';
import AllProducts from './AllProducts';
import { mockProduct } from '../../test/mockReduxStore';

describe('Footer contact/reward links Section', () => {
  const wrap = shallow(<AllProducts products={[mockProduct]} />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all components', () => {
    const filters = wrap.find(Filters);
    expect(filters.length).toBe(1);
    const gridControl = wrap.find(GridControl);
    expect(gridControl.length).toBe(1);
    const productGrid = wrap.find(ProductGrid);
    expect(productGrid.length).toBe(1);
  });
});
