/**
 * Created by lanie on 2016-08-10.
 */
import React from 'react';
import { connect } from 'react-redux'; // glue for redux and react
import { bindActionCreators } from 'redux';

import { pushPost, loadPost } from './../../actions';

import './Posting.scss';

class Posting extends React.Component {
  constructor(props){
    super(props);
    this.props.loadPost();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit() {

    var post = {userId: "", id: "", title: "", body: ""};
    post.userId = document.getElementById("userId").value;
    post.id = document.getElementById("id").value;
    post.title = document.getElementById("title").value;
    post.body = document.getElementById("body").value;
    this.props.pushPost(post);
  }

  render() {
    return (
      <div className="container text-center">
        <h1> HELL-O! WELCOME TO POSTING TEST PAGE! </h1>
        <p> Please input user-id, id, title and body </p>
          <form onSubmit={this.onFormSubmit} role="form">
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
          <button type="submit" value="submit"> POSTING </button>
        </form>
      </div>
    )
  }
}

export default Posting;

function mapStateToProps(state) {
  return {
    post: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ pushPost, loadPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posting);
