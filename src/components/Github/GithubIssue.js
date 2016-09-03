import React from 'react';

import { Panel } from 'react-bootstrap';

class GithubIssue extends React.Component {
  render() {
    return (
      <Panel header={`Number : ${this.props.number}`} bsStyle="primary">
        <p>{`Title : ${this.props.title}`}</p>
        <p>{`Body : ${this.props.body}`}</p>
      </Panel>
    );
  }
}

export default GithubIssue;
