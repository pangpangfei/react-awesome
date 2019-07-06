import React from 'react';
import { connect } from 'react-redux';

export default connect(
  state => ({
    name: state.pageA.name
  })
)(
  function PageB({ name }) {
    return <div>{name}</div>;
  }
);