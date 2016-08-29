import React from 'react';

import { Panel } from 'react-bootstrap';

class GithubIssues extends React.Component {
  render() {
    return (
      <div>
        <Panel header={`Number : ${this.props.number}`} bsStyle="primary">
          <p> Title : {this.props.title} </p>
          <p> Body : {this.props.body} </p>
        </Panel>
      </div>
    )
  };
}

export default GithubIssues;
