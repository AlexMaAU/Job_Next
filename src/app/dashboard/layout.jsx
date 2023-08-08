const DashboardLayout = ({ children }) => {
  return (
    <main>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </main>
  );
};

export default DashboardLayout;
