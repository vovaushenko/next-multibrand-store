import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import ProductList from '../../components/ProductList/ProductList';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export default function AdminProductList(): JSX.Element {
  const router = useRouter();
  const { error, products } = useTypedSelector((state) => state.products);
  const {
    error: adminOperationError,
    isUploaded,
    isDeleted,
  } = useTypedSelector((state) => state.admin);
  const { loadAllProducts, clearProductState } = useActions();

  useEffect(() => {
    if (!products.length) {
      loadAllProducts();
    }

    if (error) {
      toast.error(error);
      clearProductState();
    }
    if (adminOperationError) {
      toast.error(adminOperationError);
      clearProductState();
    }
    if (isDeleted) {
      toast.success('Product was successfully deleted');
      router.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, adminOperationError, isUploaded, isDeleted]);
  return (
    <AdminLayout title="All Products">
      {/* TODO:Products filter */}
      {/* TODO:Products List */}
      <ProductList products={products} />
    </AdminLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (session.user.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
