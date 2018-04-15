import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";

import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

import Layout from "../components/Layout";
import App from "../components/App";
import Home from "../components/home/Home";

export default () => (
  <Layout>
    {/* <App /> */}

    <Home />
    {/* <IntlExample /> */}
  </Layout>
);
