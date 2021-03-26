import './Layout.scss';

export const Layout = (props) => {
  const { children } = props;
  return (
    <main className="main">
      {children}
    </main>
  );
};

export default Layout;
