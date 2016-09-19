import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-grid-system';

import { connect } from 'react-redux';
import { actions as toastrActions } from 'react-redux-toastr'
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import FlatButton from 'material-ui/FlatButton';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';

import { readPost, updatePost } from './../../actions';

class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.notify = bindActionCreators(toastrActions, this.props.dispatch);
  }

  componentWillMount() {
    this.props.readPost(this.props.params.id);
  };

  componentDidMount() {
    this.refs.field2focus.getRenderedComponent().getRenderedComponent().focus();
  }

  onSubmit = (data) => {
    data.userId = this.props.post.userId;
    this.props.updatePost(this.props.post.id, data).then((response) => {
      if(response.payload.ok) this.notify.success(`Success`, `Successfully Edited`);
      else this.notify.error(`Error`, `Failed to Edit`);
      this.context.router.push(`/posts/${this.props.post.id}`);
    });
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <Row>
        <Col md={2}/>
        <Col md={8}>
          <Card>
            <Helmet title={`Edit Post`} />
            <CardTitle title={`Edit Post`} />
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <CardText>
                <Row>
                  <Col md={12}>
                    <Field fullWidth={true} component={TextField} name="title" floatingLabelText="Title" ref="field2focus" withRef />
                    <Field fullWidth={true} component={TextField} name="body" floatingLabelText="Body" />
                  </Col>
                </Row>
              </CardText>
              <CardActions style={{ paddingRight: 0, textAlign: 'right' }}>
                <FlatButton type="button" label="Cancel" onTouchTap={() => this.context.router.goBack()} />
                <FlatButton type="submit" label="Submit" primary={true} disabled={pristine||submitting} />
              </CardActions>
            </form>
          </Card>
        </Col>
        <Col md={2}/>
      </Row>
    );
  }
}

PostEdit.contextTypes = {
  router: React.PropTypes.object
};

PostEdit.propTypes = {
  post: React.PropTypes.object.isRequired
};

PostEdit.defaultProps = {
  post: {}
};

PostEdit = reduxForm({
  form: 'PostsEditForm'
})(PostEdit);

function mapStateToProps(state) {
  return {
    initialValues: state.post.data[state.post.active],
    post: state.post.data[state.post.active]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPost, updatePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
