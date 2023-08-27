'use client';

// import RedirectTemplate from 'components/RedirectTemplate/RedirectTemplate';
import { useAppContext } from 'context/appContext';

const DashboardPage = () => {
  const { state } = useAppContext();
  const user = state.user; 

  // if (user === undefined) {
  //   RedirectTemplate('register');
  // }

  return (
    <>
      <h1>Dashboard Page</h1>
    </>
  );
};

export default DashboardPage;
