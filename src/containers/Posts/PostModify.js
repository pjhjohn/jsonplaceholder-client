import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import { readPost, modifyPost } from './../../actions';

class PostModify extends React.Component {
  state = {
    disabled: false
  };
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.readPost(this.props.params.id);
  }

  onSubmit = (props) => {
    this.setState({ 'disabled' : true });
    props.id = this.props.post.id;
    props.userId = this.props.post.userId;
    console.log(props);
    this.props.modifyPost(props).then(() => {
      this.context.router.push(`/posts/${props.id}`);
    });
  };

  render() {
    const { fields: { title, body }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h1>PostModify Test Page</h1>
        <p> Please input title and body </p>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" type="text" {...title } />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea className="form-control" type="text" {...body } />
        </div>
        <Button bsStyle="primary" type="submit" disabled={this.state.disabled}>Submit</Button>
        <Link to="/posts">
          <Button bsStyle="danger">Cancel</Button>
        </Link>
      </form>
    )
  }
}

PostModify = reduxForm({
  form: 'PostsModifyForm',
  fields: ['title', 'body']
}, null, { readPost, modifyPost })(PostModify);

function mapStateToProps(state) {
  return {
    post: state.post.detail
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPost, modifyPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModify);


