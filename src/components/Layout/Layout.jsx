import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import AppBar from 'components/AppBar';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<PropagateLoader color="#41d61f" />}>
        <Outlet />
      </Suspense>
    </>
  );
}
