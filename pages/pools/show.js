/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import axios from 'axios';
import Layout from '../../components/Layout';
import IndexDashboard from '../../components/Dashboard/IndexDashboard';

import withRoot from '../../components/HOC/md/withRoot';
import { initStore } from '../../store';

const API_BASE_URL = 'http://localhost:3001';

const PoolDashboard = ({ pool, address }) => (
  <Layout>
    <IndexDashboard pool={pool} address={address} />
  </Layout>
);

function mapStateToProps(state) {
  return {
    // current: state.language.current,
    // languages: state.language.languages,
  };
}

PoolDashboard.getInitialProps = async (props) => {
  const { address, page } = props.query;
  console.log(props.query);
  // aqui van llamadas al web3 o API (json mockserver)
  let res;
  try {
    res = await axios.get(`${API_BASE_URL}/pools/${address}`);
    if (res.status === 404) {
      throw new Error('pool data not');
    }
  } catch (error) {
    return { pool: undefined, source: page };
  }

  console.log('mi pool: ', res.data);

  return { pool: res.data, source: page, address };
};

const mapDispatchToProps = dispatch => ({
  // changeLanguage: bindActionCreators(changeLanguage, dispatch),
});

PoolDashboard.propTypes = {
  pool: PropTypes.object.isRequired,
  address: PropTypes.string.isRequired,
};

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(PoolDashboard));
