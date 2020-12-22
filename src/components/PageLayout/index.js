import React from "react";
import Header from "../Header";
import PropTypes from "prop-types";

import "./style.scss";

function PageLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
