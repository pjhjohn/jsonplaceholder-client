import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createPost } from './../../actions';

import { PostForm } from './../../components';

class PostNew extends React.Component {
  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit() {
    var post = {userId: "", id: "", title: "", body: ""};
    post.userId = document.getElementById("userId").value;
    post.id = document.getElementById("id").value;
    post.title = document.getElementById("title").value;
    post.body = document.getElementById("body").value;
    this.props.createPost(post);
  }

  render() {
    return (
      <div className="container text-center">
        <h1>PostNew Test Page</h1>
        <p> Please input user-id, id, title and body </p>
        <PostForm onSubmit={this.onFormSubmit} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.post.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
