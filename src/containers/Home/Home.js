import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactMarkdown from 'react-markdown';
import { Card, CardText } from 'material-ui/Card';

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
      <Card>
        <CardText>
          { (!this.props.readme.content) ? loading : <ReactMarkdown source={atob(this.props.readme.content)} /> }
        </CardText>
      </Card>
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
