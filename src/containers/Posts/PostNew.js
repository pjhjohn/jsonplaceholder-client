import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-grid-system';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import FlatButton from 'material-ui/FlatButton';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';

import { createPost, notify } from './../../actions';

class PostNew extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  componentDidMount() {
    this.refs.field2focus.getRenderedComponent().getRenderedComponent().focus();
  }

  onSubmit = (data) => {
    this.props.createPost(data).then((response) => {
      console.log(response);
      this.props.notify(`posting`, response.payload.status);
      this.context.router.push(`/posts/${response.payload.data.id}`);
    });
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <Row>
        <Col md={2}/>
        <Col md={8}>
          <Card>
            <Helmet title={`New Post`} />
            <CardTitle title={`New Post`} />
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <CardText>
                <Row>
                  <Col md={12}>
                    <Field fullWidth={true} component={TextField} name="userId" floatingLabelText="User ID" ref="field2focus" withRef />
                    <Field fullWidth={true} component={TextField} name="title" floatingLabelText="Title" />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost, notify }, dispatch);
}

PostNew = reduxForm({
  form: 'PostsNewForm'
})(PostNew);

export default connect(null, mapDispatchToProps)(PostNew);
