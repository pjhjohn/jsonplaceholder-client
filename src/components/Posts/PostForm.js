import React from 'react';
import { reduxForm } from 'redux-form';

class PostForm extends React.Component {
  render() {
    const { fields: { userId, id, title, body }, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit} role="form">
        <h3>Create New post</h3>
        <div className={`form-group ${userId.touched && userId.invalid ? 'has-warning' : ''}`}>
          <label> User Id </label>
          <input className="form-control" type="text" {...userId } />
          <div className="text-help">
            { userId.touched ? userId.error : '' }
          </div>
        </div>

        <div className={`form-group ${id.touched && id.invalid ? 'has-warning' : ''}`}>
          <label> Id </label>
          <input className="form-control" type="text" {...id } />
          <div className="text-help">
            { id.touched ? id.error : '' }
          </div>
        </div>

        <div className={`form-group ${title.touched && title.invalid ? 'has-warning' : ''}`}>
          <label> Title </label>
          <input className="form-control input-sm" type="text" {...title } />
          <div className="text-help">
            { title.touched ? title.error : '' }
          </div>
        </div>

        <div className={`form-group ${body.touched && body.invalid ? 'has-warning' : ''}`}>
          <label> Body </label>
          <textarea className="form-control input-lg" type="text" {...body } />
          <div className="text-help">
            { body.touched ? body.error : '' }
          </div>
        </div>
        <button className="btn btn-default" type="submit" value="submit">Submit</button>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  if(!values.userId){
    errors.userId = 'Enter User Id';
  }
  if(!values.id){
    errors.id = 'Enter User id';
  }
  if(!values.title){
    errors.title = 'Enter User title';
  }

  if(!values.body){
    errors.body = 'Enter User body';
  }

  return errors;
}


export default reduxForm({
  form: 'PostForm',
  fields: ['userId', 'id', 'title', 'body'],
  validate
})(PostForm);
