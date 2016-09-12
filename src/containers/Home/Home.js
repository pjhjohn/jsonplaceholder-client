import React from 'react';
import ReactMarkdown from 'react-markdown';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

import { readReadme } from './../../actions';

import { SimpleNavigator } from './../../components';

class Home extends React.Component {
  static defaultProps = {
    readme: {}
  };

  static propTypes = {
    readme: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.readReadme();
  };

  render() {
    const paperStyle = { padding: `8px 16px` };
    const progress = (<CircularProgress style={{textAlign:`center`, width:`100%`}} />);
    return (
      <div>
        <SimpleNavigator path={window.location.pathname} />
        <Paper zDepth={1} style={paperStyle}>
          { (!this.props.readme.content) ? progress : <ReactMarkdown source={atob(this.props.readme.content)} /> }
        </Paper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    readme: state.readme.detail
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readReadme }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
