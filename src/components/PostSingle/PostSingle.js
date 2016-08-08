import React from 'react';
import { connect } from 'react-redux'; // glue for redux and react
import { bindActionCreators } from 'redux';

import { fetchSinglePost } from './../../actions';
import { Post } from './..';

class PostSingle extends React.Component {
  constructor(props){
    super(props);

    this.props.fetchSinglePost(this.props.params.id);
  }

  render() {
    return (
      <div>
        <h1 className="text-center"> {window.location.pathname} </h1>
        <div className="row">
          <Post key={this.props.post.id} {...this.props.post} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchSinglePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostSingle);