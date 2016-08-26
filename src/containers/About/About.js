import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Inspector } from 'react-inspector';
import { loadContributors, loadLanguages, loadPullRequests} from './../../actions';

class About extends React.Component {

  componentWillMount() {
    this.props.loadLanguages("/repos/pjhjohn/jsonplaceholder-client/languages");
    this.props.loadContributors("/repos/pjhjohn/jsonplaceholder-client/contributors");
    this.props.loadPullRequests("/repos/pjhjohn/jsonplaceholder-client/pulls?state=all");
  }

  render() {
    return (
      <div>
        <h1 className="text-center"> ABOUT PAGE </h1>
        <div>
          <h2> Contributors </h2>
          <Inspector data={this.props.contributors} />
        </div>
        <div>
          <h2> Using Language </h2>
          <Inspector data={this.props.languages} />
        </div>
        <div>
          <h2> Pull Requests </h2>
          <Inspector data={this.props.pullRequests} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contributors: state.contributors.contributors,
    languages: state.languages.languages,
    pullRequests: state.pullRequests.pullRequests
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loadContributors, loadLanguages, loadPullRequests }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
