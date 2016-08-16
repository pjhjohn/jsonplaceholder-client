import React from 'react';

class PostForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit} role="form">
        <div className="form-group">
          <h3> User Id </h3>
          <input className="form-control" id="userId" type="text"/>
        </div>
        <div className="form-group">
          <h3> Id </h3>
          <input className="form-control" id="id" type="text"/>
        </div>
        <div className="form-group">
          <h3> Title </h3>
          <input className="form-control input-sm" id="title" type="text"/>
        </div>
        <div className="form-group">
          <h3> Body </h3>
          <input className="form-control input-lg" id="body" type="text"/>
        </div>
        <button className="btn btn-default" type="submit" value="submit">Submit</button>
      </form>
    );
  }
}

export default PostForm;
