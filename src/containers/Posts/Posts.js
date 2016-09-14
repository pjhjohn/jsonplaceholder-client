import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import { readInitialPosts, readMorePosts } from './../../actions';

import { SimpleNavigator, PostItem } from './../../components';

class Posts extends React.Component {
  static defaultProps = {
    posts: {},
    initialized: false,
    _start: 0,
    _end: 0
  };

  static propTypes = {
    posts: React.PropTypes.array.isRequired,
    initialized: React.PropTypes.bool.isRequired,
    _start: React.PropTypes.number.isRequired,
    _end: React.PropTypes.number.isRequired,
  };

  state = {
    loading: false
  };

  componentWillMount() {
    if(this.props.initialized) return;
    this.props.readInitialPosts();
  };

  onReadMorePosts = (query) => {
    this.setState({ loading: true });
    this.props.readMorePosts(query).then(() => this.setState({loading: false}));
  };

  render() {
    const progress = (<CircularProgress style={{textAlign:`center`, width:`100%`}} />);
    if(!this.props.initialized) return (progress);
    return (
      <div>
        <SimpleNavigator path={window.location.pathname} back write />

        <Row>
        { this.props.posts.map((post) =>
          <Link to={`/posts/${post.id}`} key={post.id} >
            <Col md={12}>
              <PostItem {...post} />
            </Col>
          </Link>
        )}
        </Row>

        {(this.state.loading) ? progress :
          <RaisedButton label="MORE POSTS" fullWidth={true} primary={true} onClick={() => this.onReadMorePosts({'_start': this.props._end})} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const posts = [];
  Object.keys(state.post.data).sort((a, b) => parseInt(a, 10) - parseInt(b, 10)).forEach((key) => posts.push(state.post.data[key]));
  return {
    posts: posts,
    initialized: state.post.initialized,
    _start: state.post._start,
    _end: state.post._end
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readInitialPosts, readMorePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
