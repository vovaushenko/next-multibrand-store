import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import React from 'react';
import AdminAllReviews from '../../components/AdminAllReviews/AdminAllReviews';
import AdminLayout from '../../components/AdminLayout/AdminLayout';

export default function AdminAllReviewsPage(): JSX.Element {
  return (
    <AdminLayout title="Reviews">
      <AdminAllReviews />
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
