import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Inspector } from 'react-inspector';
import { readContributors, readLanguages, readPullRequests, readIssues } from './../../actions';

import { Panel } from 'react-bootstrap';

class About extends React.Component {

  componentWillMount() {
    this.props.readLanguages();
    this.props.readContributors();
    this.props.readPullRequests({'state': 'open'});
    this.props.readIssues({'state': 'open'});
  }

  render() {
    return (
      <div>
        <h1 className="text-center"> ABOUT PAGE </h1>
        <Panel header="Contributors" bsStyle="primary">
          <Inspector data={this.props.contributors} />
        </Panel>
        <Panel header="Languages" bsStyle="info">
          <Inspector data={this.props.languages} />
        </Panel>
        <Panel header="Pull Requests" bsStyle="success">
         <Inspector data={this.props.pullRequests} />
        </Panel>
        <Panel header="Issues" bsStyle="warning">
          <Inspector data={this.props.issues} />
        </Panel>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contributors: state.github.contributors,
    languages: state.github.languages,
    pullRequests: state.github.pullRequests,
    issues: state.github.issues
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ readContributors, readLanguages, readPullRequests, readIssues }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
