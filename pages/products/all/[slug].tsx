import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import Layout from '../../../components/Layout/Layout';
import Skeleton from '../../../components/Skeleton/Skeleton';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import AllProducts from '../../../screens/AllProducts/AllProducts';
/**
 * Page where product data is mapped into AllProductsSlugPage
 *@filtering is additionally applied for each category - men , women, kid
 *@function AllProductsSlugPage
 *@returns {JSX.Element} - Rendered AllProductsSlugPage page
 */
export default function AllProductsSlugPage(): JSX.Element {
  const router = useRouter();
  const { loadAllProducts, addFilterOption } = useActions();
  const { isLoading, filteredProducts, products } = useTypedSelector(
    (state) => state.products
  );
  // we will get filterValue for department from slug -> /products/all/kid, /products/all/men, /products/all/women
  const { slug } = router.query;

  useEffect(() => {
    loadAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    addFilterOption({
      filterName: 'department',
      filterValue: slug as string,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, products]);

  // We will pass filteredProducts from global state to <AllProductsSlugPage/>
  return (
    <Layout title={'Shop All Products'}>
      {isLoading || slug === undefined ? (
        <Skeleton variant="allProducts" />
      ) : (
        <>
          <AllProducts products={filteredProducts} />
        </>
      )}
    </Layout>
  );
}
