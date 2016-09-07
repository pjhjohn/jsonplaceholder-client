import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactMarkdown from 'react-markdown';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardText } from 'material-ui/Card';


import { readReadme } from './../../actions';

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
    const loading = (<div style={{textAlign:`center`, width:`100%`}}> <CircularProgress /> </div>);
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
