import React from 'react';

import { HttpCatError } from './../../components';

class Error404 extends React.Component {
  render() {
    return (
      <HttpCatError statusCode="404" message="NotFound" />
    )
  }
}

export default Error404;
