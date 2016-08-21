import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

import { readPosts } from './../../actions';

import { PostItem } from './../../components';

const START_INDEX = 0;

class Posts extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      initialStateLoaded: Boolean(this.props.posts.length),
      startPostId: this.props.startPostId,
      endPostId: this.props.endPostId,
      limit : this.props.endPostId - this.props.startPostId + 1
    }
    this.onReadPosts = this.onReadPosts.bind(this);
  }

  componentWillMount() {
    if(!this.state.initialStateLoaded) {
      this.props.readPosts(START_INDEX);
      this.setState({initialStateLoaded: true})
    }
  }

  shouldComponentUpdate(nextProps, nextState) { // if state or props not changes, return false (not re-rendering);
    return (JSON.stringify(nextState) !== JSON.stringify(this.state))
    || (JSON.stringify(nextProps) !== JSON.stringify(this.props));
  }

  componentDidMount() { // after first rendering
    this.setState({
      startPostId: 0,
      endPostId: 0
    })
  }

  componentDidUpdate() { // after rendering when props or state changes
    if(Boolean(this.props.posts[START_INDEX])) // when first post exist, set state 'startPostId'.
      this.setState({ startPostId: this.props.posts[START_INDEX].id })
    this.setState({
      endPostId: this.props.endPostId,
      limit : this.props.endPostId - this.props.startPostId + 1
    })
    console.log(this.state);
  }

  onReadPosts(postLength) {
    this.props.readPosts(postLength);
    this.setState({
      startPostId: this.props.posts[START_INDEX].id,
      endPostId: this.props.endPostId,
      limit : this.props.endPostId - this.props.startPostId + 1
    })
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
    startPostId: state.post.startIndex,
    endPostId: state.post.endIndex
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
