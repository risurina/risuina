import React, { ReactElement } from 'react';
import Navbar from 'components/Navbar';
import Footer from "components/Footer";

const Layout = ({ children }: {children: ReactElement}): ReactElement => {
  return (
    <div>
      {/** Navigation  */}
      <Navbar />

      {/** Content */}
      {children}
      {/** End Content */}

      {/** Footer
      <Footer />
      */}
    </div>
  );
}

export default Layout;