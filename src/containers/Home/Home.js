import React from 'react';
import { Inspector } from 'react-inspector';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import { readReadme } from './../../actions';

class Home extends React.Component {
  componentWillMount() {
    this.props.readReadme();
  }

  render() {
    const loading = (
      <div>Loading....</div>
    );

    return (
      <div>
        <h1 className="text-center">Hello Nofetan</h1>
        <Panel header="Inspector">
          <Inspector data={this.props.readme}/>
        </Panel>
        { (!this.props.readme.content) ? loading : <ReactMarkdown source={atob(this.props.readme.content)} /> }
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
