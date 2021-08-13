import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import Layout from '../../../components/Layout/Layout';
import Skeleton from '../../../components/Skeleton/Skeleton';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import AllProducts from '../../../screens/AllProducts/AllProducts';
/**
 * Page where product data is mapped into Shoes by category
 *@filtering is additionally applied for each category - men , women, kid
 *@function ShoesProductsPage
 *@returns {JSX.Element} - Rendered ShoesProductsPage page
 */
export default function ShoesProductsPage(): JSX.Element {
  const router = useRouter();

  const { loadAllProducts, addFilterOption } = useActions();
  const { isLoading, products, filteredProducts } = useTypedSelector(
    (state) => state.products
  );

  const { slug } = router.query;

  useEffect(() => {
    loadAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (slug !== undefined) {
      addFilterOption({
        filterName: 'department',
        filterValue: slug[0] as string,
      });

      addFilterOption({
        filterName: 'brand',
        filterValue: slug[1] as string,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, products]);

  // We will pass filteredProducts from global state to <ShoesProductsPage/>
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
