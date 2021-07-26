import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import React from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';

export default function AdminDashboard(): JSX.Element {
  return (
    <AdminLayout title="dashboard">
      <div>
        <h1>Admin Dashboard</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          suscipit ipsum in modi aspernatur maxime quod numquam optio facere hic
          ipsa ducimus necessitatibus a asperiores labore ab vitae, nemo
          similique eligendi eius possimus atque officia earum? Sapiente
          accusamus qui, veniam magni quasi hic rerum!
        </p>
      </div>
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
