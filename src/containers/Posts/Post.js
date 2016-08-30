import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Row, Col, Panel, ListGroup, ListGroupItem, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
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
        <Helmet title={`posts/${this.props.post.id}`} />

        <Row style={{ marginBottom: `20px` }}>
          <Col md={2}>
            <LinkContainer to={{pathname: '/posts'}}>
              <Button bsStyle="default" style={{width: `100%`}}>BACK</Button>
            </LinkContainer>
          </Col>
          <Col md={6}>
            <p className="text-center text-title"> {window.location.pathname} </p>
          </Col>
          <Col md={2}>
            <LinkContainer to={{pathname: '/posts/new'}}>
              <Button bsStyle="primary" style={{width: `100%`}}>WRITE POST</Button>
            </LinkContainer>
          </Col>
          <Col md={2}>
            <LinkContainer to={{pathname: `/posts/${this.props.params.id}/modify`}}>
              <Button bsStyle="primary" style={{width: `100%`}}>MODIFY POST</Button>
            </LinkContainer>
          </Col>
        </Row>

        <Panel header={window.location.pathname} bsStyle="primary">
          <PostDetail key={this.props.post.id} {...this.props.post} />
        </Panel>

        <Panel header={`${window.location.pathname}/comments`} bsStyle="info">
          <ListGroup fill style={{ marginTop: 0 }}>
          { this.props.comments.map((comment) =>
            <ListGroupItem key={comment.id} >
              <Comment {...comment} />
            </ListGroupItem>
          )}
          </ListGroup>
        </Panel>

        <Panel header={`${window.location.pathname}/comments/new`} bsStyle="default">
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

            <FormGroup style={{marginBottom: 0}}>
              <Col smOffset={2} sm={10}>
                <Button style={{width: `100%`}} type="submit" bsStyle="default" disabled={this.state.disabled}>
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Panel>
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
