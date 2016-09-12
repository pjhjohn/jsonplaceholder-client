import React from 'react';
import { Row, Col } from 'react-grid-system';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';

import { readPost, readComments, createComment, readMoreComments, notify } from './../../actions';

import { SimpleNavigator, PostDetail, Comment } from './../../components';

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
    initializedPost: false,
    initializedComments: false
  };

  componentWillMount() {
    this.props.readPost(this.props.params.id)
      .then(()=>this.setState({initializedPost: true}));
    this.props.readComments(this.props.params.id)
      .then(()=>this.setState({initializedComments: true}));
  };

  onSubmit = (data) => {
    data.postId = this.props.params.id;
    this.props.createComment(data).then((response) => {
      this.props.notify(`comment`, response.payload.status);
      this.props.readMoreComments({'_start' : this.props.comments.length, 'postId' : this.props.params.id});
    });
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const progress = (<CircularProgress style={{textAlign:`center`, width:`100%`}} />);
    if(!this.state.initializedPost || !this.state.initializedComments) return (progress);
    return (
      <div>
        <SimpleNavigator path={window.location.pathname} back edit write writePath={`/posts/new`} />

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
            <Card>
              <CardTitle title={`Comment`} />
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <CardText>
                  <Row>
                    <Col md={6}>
                      <Field fullWidth={true} component={TextField} name="email" floatingLabelText="Email"/>
                    </Col>
                    <Col md={6}>
                      <Field fullWidth={true} component={TextField} name="name" floatingLabelText="Name"/>
                    </Col>
                    <Col md={12}>
                      <Field fullWidth={true} component={TextField} name="body" floatingLabelText="Body"/>
                    </Col>
                  </Row>
                </CardText>
                <CardActions style={{ paddingRight: 0, textAlign: 'right' }}>
                  <FlatButton type="submit" label="Submit" primary={true} disabled={pristine||submitting} />
                </CardActions>
              </form>
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
      </div>
    );
  }
}

Post = reduxForm({
  form: 'CommentsNewForm'
})(Post);

function mapStateToProps(state) {
  return {
    post: state.post.detail,
    comments: state.comment.list.slice().reverse()
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPost, readComments, readMoreComments, createComment, notify }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
