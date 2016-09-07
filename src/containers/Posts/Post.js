import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { Link } from 'react-router'

import { readPost, readComments, createComment, readMoreComments } from './../../actions';

import { PostDetail, Comment } from './../../components';

class Post extends React.Component {
  static defaultProps = {
    post: {},
    comments: {}
  };

  static propTypes = {
    post: React.PropTypes.object.isRequired,
    comments: React.PropTypes.array.isRequired
  };

  state = {
    disabled: false,
    initializedPost: false,
    initializedComments: false
  };

  componentWillMount() {
    this.props.readPost(this.props.params.id)
      .then(()=>this.setState({initializedPost: true}));
    this.props.readComments(this.props.params.id)
      .then(()=>this.setState({initializedComments: true}));
  };

  onSubmit = (props) => {
    this.setState({ 'disabled' : true });
    props.postId = this.props.params.id;
    this.props.createComment(props)
      .then(() => this.props.readMoreComments({'_start' : this.props.comments.length, 'postId' : this.props.params.id}))
      .then(() => this.setState({ 'disabled' : false }));
  };

  render() {
    const progress = (<CircularProgress style={{textAlign:`center`, width:`100%`}} />);
    if(!this.state.initializedPost || !this.state.initializedComments) return (progress);
    return (
      <div>
        <Helmet title={`posts/${this.props.post.id}]`} />
        <Row style={{ marginBottom: `20px` }}>
          <Col md={2}>
            <Link to={`/posts`}>
              <RaisedButton label="BACK" fullWidth={true} primary={true} />
            </Link>
          </Col>
          <Col md={2} />
          <Col md={4}>
            <div className="text-title"> {window.location.pathname} </div>
          </Col>
          <Col md={2}>
            <Link to={`/posts/${this.props.params.id}/edit`}>
              <RaisedButton label="EDIT POST" fullWidth={true} secondary={true} />
            </Link>
          </Col>
          <Col md={2}>
            <Link to={`/posts/new`}>
              <RaisedButton label="WRITE POST" fullWidth={true} primary={true} />
            </Link>
          </Col>
        </Row>

        <Row style={{ marginBottom: `20px` }}>
          <Col md={12}>
            <Card>
              <CardHeader title={window.location.pathname}/>
              <CardText>
                <PostDetail {...this.props.post} />
              </CardText>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
          { this.props.comments.map((comment) =>
            <Comment key={comment.id} {...comment} />
          )}
          </Col>
        </Row>

        {/*<Panel header={`${window.location.pathname}/comments/new`} bsStyle="default">*/}
          {/*<Form horizontal onSubmit={handleSubmit(this.onSubmit)}>*/}
          {/**/}
            {/*<FormGroup controlId="formHorizontalEmail">*/}
              {/*<Col componentClass={ControlLabel} sm={2}>*/}
                {/*Email*/}
              {/*</Col>*/}
              {/*<Col sm={10}>*/}
                {/*<FormControl type="email" placeholder="Email" {...email} />*/}
              {/*</Col>*/}
            {/*</FormGroup>*/}
            {/**/}
            {/*<FormGroup controlId="formHorizontalName">*/}
              {/*<Col componentClass={ControlLabel} sm={2}>*/}
                {/*Name*/}
              {/*</Col>*/}
              {/*<Col sm={10}>*/}
                {/*<FormControl type="text" placeholder="Name" {...name} />*/}
              {/*</Col>*/}
            {/*</FormGroup>*/}
            {/**/}
            {/*<FormGroup controlId="formHorizontalBody">*/}
              {/*<Col componentClass={ControlLabel} sm={2}>*/}
                {/*Body*/}
              {/*</Col>*/}
              {/*<Col sm={10}>*/}
                {/*<FormControl componentClass="textarea" type="text" placeholder="Body" {...body} />*/}
              {/*</Col>*/}
            {/*</FormGroup>*/}
            {/**/}
            {/*<FormGroup style={{marginBottom: 0}}>*/}
              {/*<Col smOffset={2} sm={10}>*/}
                {/*<Button style={{width: `100%`}} type="submit" bsStyle="default" disabled={this.state.disabled}>*/}
                  {/*Submit*/}
                {/*</Button>*/}
              {/*</Col>*/}
            {/*</FormGroup>*/}
          {/*</Form>*/}
        {/*</Panel>*/}
      </div>
    );
  }
}

// Post = reduxForm({
//   form: 'CommentsNewForm',
//   fields: ['name', 'email', 'body']
// })(Post);

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
