import { FC } from 'react';
import Footer from './common/footer';
import Header from './common/header';

const Layout: FC = ({ children }) => {
  return (
    <div className="flex-col min-h-screen">
      <Header />
      <div className="bg-y-mapo min-h-screen flex-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
