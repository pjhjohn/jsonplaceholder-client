import React from 'react';

import { Panel } from 'react-bootstrap';

class GithubIssues extends React.Component {
  render() {
    return (
      <div>
        <Panel header={"Number : " + this.props.number} bsStyle="primary">
          Title : {this.props.title} <br />
          Body : {this.props.body}
        </Panel>
      </div>
    )
  };
}

export default GithubIssues;
