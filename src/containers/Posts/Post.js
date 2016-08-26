import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { readPost, readComments, createComment, readMoreComments } from './../../actions';

import { PostDetail, Comment } from './../../components';

class Post extends React.Component {
  state = {
    disabled: false
  };

  componentWillMount() {
    this.props.readPost(this.props.params.id);
    this.props.readComments(this.props.params.id);
  };

  onSubmit = (props) => {
    this.setState({ 'disabled' : true });
    props.postId = this.props.params.id;
    this.props.createComment(props)
      .then(() => this.props.readMoreComments({'_start' : this.props.comments.length, 'postId' : this.props.params.id}))
      .then(() => this.setState({ 'disabled' : false }));
  };

  render() {
    const { fields: { name, email, body }, handleSubmit } = this.props;
    return (
      <div>
        <Helmet title={this.props.post.title} />

        <Row style={{ marginBottom: `15px` }}>
          <Col md={2}>
            <LinkContainer to={{ pathname: '/posts' }}>
              <Button bsStyle="default" style={{width: `100%`}}>BACK</Button>
            </LinkContainer>
          </Col>
          <Col md={8}>
            <p className="text-center text-title"> {window.location.pathname} </p>
          </Col>
          <Col md={2}>
            <LinkContainer to={{ pathname: '/posts/new' }}>
              <Button bsStyle="primary" style={{width: `100%`}}>WRITE POST</Button>
            </LinkContainer>
          </Col>
        </Row>

        <Row>
          <PostDetail key={this.props.post.id} {...this.props.post} />
        </Row>

        <hr style={{ marginTop: `0` }}/>

        <Row>
        { this.props.comments.map((comment) =>
          <Comment key={comment.id} {...comment} />
        )}
        </Row>

        <hr style={{ marginTop: `0` }}/>

        <Form horizontal onSubmit={handleSubmit(this.onSubmit)}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" {...email} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Name" {...name} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalBody">
            <Col componentClass={ControlLabel} sm={2}>
              Body
            </Col>
            <Col sm={10}>
              <FormControl componentClass="textarea" type="text" placeholder="Body" {...body} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" bsStyle="primary" disabled={this.state.disabled}>
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
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
