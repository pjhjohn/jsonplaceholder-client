import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Button, Row } from 'react-bootstrap';

import { readPost, readComments, createComment, readMoreComments } from './../../actions';

import { PostDetail, Comment } from './../../components';

class Post extends React.Component {
  state = {
    disabled: false
  };
  componentWillMount() {
    this.props.readPost(this.props.params.id);
    this.props.readComments(this.props.params.id);
  }

  onSubmit = (props) => {
    this.setState({ 'disabled' : true });
    props.postId = this.props.params.id;
    this.props.createComment(props)
      .then(() => this.props.readMoreComments({'_start' : this.props.comments.length, 'postId' : this.props.params.id}))
      .then(() => this.setState({ 'disabled' : false }));
  }

  render() {
    const {fields: { name, email, body}, handleSubmit} = this.props;
    return (
      <div>
        <Helmet title={this.props.post.title} />
        <h1 className="text-center"> {window.location.pathname} </h1>
        <Link to="/posts">
          <Button bsStyle="default">back</Button>
        </Link>
        <Row>
          <PostDetail key={this.props.post.id} {...this.props.post} />
        </Row>
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
          <Button bsStyle="primary" type="submit" disabled={this.state.disabled}> Comment Submit </Button>
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
