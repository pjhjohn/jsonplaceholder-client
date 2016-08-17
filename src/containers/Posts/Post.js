import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { readPost } from './../../actions';

import { Post as PostComponent } from './../../components';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.props.readPost(this.props.params.id);
  }

  render() {
    return (
      <div>
        <Helmet title={this.props.post.title} />
        <h1 className="text-center"> {window.location.pathname} </h1>
        <div className="row">
          <PostComponent key={this.props.post.id} {...this.props.post} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post.item
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
