import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Row } from 'react-bootstrap';

import { readPost, readComments } from './../../actions';

import { PostDetail, Comment } from './../../components';

class Post extends React.Component {
  componentWillMount(){
    this.props.readPost(this.props.params.id);
    this.props.readComments(this.props.params.id);
  }

  render() {
    return (
      <div>
        <Helmet title={this.props.post.title} />
        <h1 className="text-center"> {window.location.pathname} </h1>
        <Link to="/posts" className="btn btn-default">back</Link>
        <Row>
          <PostDetail key={this.props.post.id} {...this.props.post} />
        </Row>
        <div>
        { this.props.comments.map((comment) =>
          <Comment key={comment.id} {...comment} />
        )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post.detail,
    comments: state.comment.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPost, readComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
