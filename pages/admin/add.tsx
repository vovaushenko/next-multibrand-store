import React from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import AdminAddProduct from '../../screens/AdminAddProduct/AdminAddProduct';

export default function AdminDashboard(): JSX.Element {
  return (
    <AdminLayout title="New Product">
      <AdminAddProduct />
    </AdminLayout>
  );
}
