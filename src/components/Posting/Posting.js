/**
 * Created by lanie on 2016-08-10.
 */
import React from 'react';

import './Posting.scss';

class Posting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {userId: "", id: "", title: "", body: ""}
    };
  }
  _onUpdate() {
    var post = {userId: "", id: "", title: "", body: ""};
    post.userId = document.getElementById("userId").value;
    post.id = document.getElementById("id").value;
    post.title = document.getElementById("title").value;
    post.body = document.getElementById("body").value;
    const object = this;
    object.setState(object.state.post = post);
  }

  render() {
    return (
      <div className="container text-center">
        <h1> HELL-O! WELCOME TO POSTING TEST PAGE! </h1>
        <p> Please input user-id, id, title and content </p>
          <form role="form">
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
          <button type="submit" value="submit" onClick={this._onUpdate.bind(this)}> POSTING </button>
        </form>
      </div>
    )
  }
}

export default Posting;