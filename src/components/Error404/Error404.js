import React from 'react';
import Helmet from 'react-helmet';

class Error404 extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Not Found" />
        <h1 className="text-center"> Not Founded! </h1>
      </div>
    )
  }
}

export default Error404;
