import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { readPost, readComments } from './../../actions';

import { Post as PostComponent, Comment } from './../../components';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.props.readPost(this.props.params.id);
    this.props.readComments(this.props.params.id);
  }

  render() {
    let comments = this.props.comments.map((comment) => <Comment key={comment.id} {...comment} />);
    return (
      <div>
        <Helmet title={this.props.post.title} />
        <h1 className="text-center"> {window.location.pathname} </h1>
        <div className="row">
          <PostComponent key={this.props.post.id} {...this.props.post} />
        </div>
        <div> {comments} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post.item,
    comments: state.comment.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPost, readComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
