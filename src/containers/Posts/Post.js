import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

import { readPost, readComments, createComment, readMoreComments } from './../../actions';

import { PostDetail, Comment } from './../../components';

class Post extends React.Component {
  componentWillMount(){
    this.props.readPost(this.props.params.id);
    this.props.readComments(this.props.params.id);
  }

  onSubmit = (props) => {
    props.postId = this.props.params.id;
    let postLength = this.props.comments.length;
    let nowState = this;
    this.props.createComment(props)
      .then(function () {
        nowState.props.readMoreComments(props.postId, {'_start' : postLength});
      });
  }

  render() {
    const {fields: { name, email, body}, handleSubmit} = this.props;
    return (
      <div>
        <Helmet title={this.props.post.title} />
        <h1 className="text-center"> {window.location.pathname} </h1>
        <Link to="/posts" className="btn btn-default">back</Link>
        <div className="row">
          <PostDetail key={this.props.post.id} {...this.props.post} />
        </div>
        <div>
        { this.props.comments.map((comment) =>
          <Comment key={comment.id} {...comment} />
        )}
        </div>
        <div>
          <h1> Comment </h1>
          <p> You can add comment about this post! (Enter your name, email and body) </p>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="form-group">
              <label> Name </label>
              <input type="form-control" placeholder="Name" {...name} />
            </div>
            <div className="form-group">
              <label> Email </label>
              <input type="form-control email" placeholder="Email" {...email} />
            </div>
            <div className="form-group">
              <label> Body </label>
              <input type="form-control" placeholder="body" {...body} />
            </div>
          <button type="Submit"> Comment Submit </button>
          </form>
        </div>
      </div>
    );
  }
}

Post = reduxForm({
    form: 'CommentsNewForm',
    fields: ['name', 'email', 'body']
})(Post);

function mapStateToProps(state) {
  return {
    post: state.post.detail,
    comments: state.comment.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPost, readComments, readMoreComments, createComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
