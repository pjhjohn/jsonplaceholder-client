import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

import { readPosts } from './../../actions';

import { PostItem } from './../../components';

class Posts extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      initialStateLoaded: Boolean(this.props.posts.length),
      startPostId: this.props.startPostId,
      endPostId: this.props.endPostId,
      limit : this.props.endPostId - this.props.startPostId + 1
    }
  }

  componentWillMount() {
    if(!this.state.initialStateLoaded) {
      this.props.readPosts(0);
    }
  }

  shouldComponentUpdate(nextProps, nextState) { // if state or props not changes, return false (not re-rendering);
    return (JSON.stringify(nextState) !== JSON.stringify(this.state))
    || (JSON.stringify(nextProps) !== JSON.stringify(this.props));
  }

  componentDidUpdate() { // after rendering when props or state changes
    if(Boolean(this.props.posts[0])) // when first post exist, set state 'startPostId'.
      this.setState({
        initialStateLoaded: Boolean(this.props.posts),
        startPostId: this.props.posts[0].id
      })
    this.setState({
      endPostId: this.props.endPostId,
      limit : this.props.endPostId - this.props.startPostId + 1
    })
    console.log(this.state);
  }

  onReadPosts(postLength) {
    this.props.readPosts(postLength);
  }

  render() {
    let posts = this.props.posts.map((post) => <PostItem key={post.id} {...post} />);
    let startId = this.props.posts.length;
    return (
      <div>
        <h1 className="text-center"> {window.location.pathname} </h1>

        <Link to="/posts/new" className="col-md-12 btn btn-primary">
          글쓰기
        </Link>

        <div className="row">
          {posts}
        </div>

        <button className="col-md-12 btn btn-default"
          onClick={() => this.onReadPosts(startId)}>
          로오딩
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post.list,
    startPostId: state.post.start,
    endPostId: state.post.end
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
