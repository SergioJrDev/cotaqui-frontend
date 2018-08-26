import React from "react";
import Header from "../Header/Header.jsx";
import HeaderLinks from "../Header/HeaderLinks.jsx";
import Footer from "../Footer/Footer";

const PageWrapper = props => {
  const { children } = props;
  return (
    <div>
      <Header
        color="primary"
        brand="Cotaqui Online"
        rightLinks={<HeaderLinks />}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
