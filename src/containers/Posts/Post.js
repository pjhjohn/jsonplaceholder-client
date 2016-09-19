import React from 'react';
import { Row, Col } from 'react-grid-system';

import { connect } from 'react-redux';
import { actions as toastrActions } from 'react-redux-toastr'
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';

import { readPost, createComment, readInitialComments, readMoreComments } from './../../actions';

import { SimpleNavigator, PostDetail, Comment } from './../../components';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.notify = bindActionCreators(toastrActions, this.props.dispatch);
    this.state = {
      loadingPost: true,
      loadingComments: true
    };
  }

  componentWillMount() {
    this.props.readPost(this.props.params.id)
      .then(()=>this.setState({loadingPost: false}));
    this.props.readInitialComments(this.props.params.id)
      .then(()=>this.setState({loadingComments: false}));
  };

  onSubmit = (data) => {
    data.postId = this.props.params.id;
    this.setState({loadingComments: true});
    this.props.createComment(data).then((response) => {
      this.setState({loadingComments: false});
      if(response.payload.ok) this.notify.success(`Success`, `Successfully Commented`);
      else this.notify.error(`Error`, `Failed to Comment`);
      this.props.readMoreComments({'_start' : this.props.comments.length, 'postId' : this.props.params.id});
    });
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const progress = (<CircularProgress style={{textAlign:`center`, width:`100%`}} />);
    if(this.state.loadingPost) return (progress);
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

        { this.state.loadingComments? progress : null }

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

Post.propTypes = {
  post: React.PropTypes.object,
  comments: React.PropTypes.array
};

Post = reduxForm({
  form: 'CommentsNewForm'
})(Post);

function mapStateToProps(state) {
  const comments = [];
  Object.keys(state.comment.data).sort((a, b) => parseInt(b, 10) - parseInt(a, 10)).forEach((key) => comments.push(state.comment.data[key]));
  return {
    post: state.post.data[state.post.active],
    comments: comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPost, readInitialComments, readMoreComments, createComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
