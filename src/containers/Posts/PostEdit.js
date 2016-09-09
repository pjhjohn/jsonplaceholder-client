import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

import { readPost, updatePost, notify } from './../../actions';

class PostEdit extends React.Component {
  static defaultProps = {
    post: {}
  }

  static propTypes = {
    post: React.PropTypes.object.isRequired
  };

  state = {
    disabled: false
  };

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.readPost(this.props.params.id);
  };

  onSubmit = (props) => {
    this.setState({ 'disabled' : true });
    props.userId = this.props.post.userId;
    this.props.updatePost(this.props.post.id, props).then((response) => {
      this.props.notify(`editing`, response.payload.status);
      this.context.router.push(`/posts/${this.props.post.id}`);
    });
  };

  render() {
    const { fields: { title, body }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h1>Post Edit Test Page</h1>
        <p> Please input title and body </p>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" type="text" {...title} />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea className="form-control" type="text" {...body} />
        </div>
        <RaisedButton type="submit" label="SUBMIT" fullWidth={true} primary={true} disabled={this.state.disabled} />
        <Link to={`/posts`}>
          <RaisedButton label="CANCEL" fullWidth={true} secondary={true} />
        </Link>
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostEditForm',
  fields: ['title', 'body']
}, state => ({initialValues: state.post.detail, post: state.post.detail}), { readPost, updatePost, notify })(PostEdit);


