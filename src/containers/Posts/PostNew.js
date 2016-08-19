import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from './../../actions';

class PostNew extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props).then(() => {
      this.context.router.push('/posts');
    });
  }

  render() {
    const { fields: { userId, id, title, body }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h1>PostNew Test Page</h1>
        <p> Please input user-id, id, title and body </p>
        <div className="form-group">
          <label>User Id</label>
          <input className="form-control" type="text" {...userId } />
        </div>
        <div className="form-group">
          <label>Id</label>
          <input className="form-control" type="text" {...id } />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" type="text" {...title } />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea className="form-control" type="text" {...body } />
        </div>
        <button className="btn btn-primary" type="submit" >Submit</button>
        <Link to="/posts" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['userId', 'id', 'title', 'body']
}, null, { createPost })(PostNew);
