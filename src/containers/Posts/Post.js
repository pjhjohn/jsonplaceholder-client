import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux'; // glue for redux and react
import { bindActionCreators } from 'redux';

import { fetchPost } from './../../actions';
import { Post as PostComponent } from './../../components';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchPost(this.props.params.id);
  }

  render() {
    return (
      <div>
        <Helmet title={this.props.post.title} />
        <h1 className="text-center"> {window.location.pathname} </h1>
        <div className="row">
          <PostComponent key={this.props.post.id} {...this.props.post} />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
