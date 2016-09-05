import React from 'react';

import { Panel } from 'react-bootstrap';

class GithubIssue extends React.Component {
  static defaultProps = {
    number: 0,
    title: "",
    body: ""
  };

  static propTypes=  {
    number: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  };


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
