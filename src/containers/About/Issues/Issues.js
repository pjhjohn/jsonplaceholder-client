import React from 'react';
import { GithubIssues } from './../../../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readIssues } from './../../../actions';

import { DropdownButton, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';

class Issues extends React.Component {

  state = {
    'state': 'open',
    'sort': 'created'
  };

  updateState = (state) => {
    this.setState({
      'state': state
    });
    this.props.readIssues(Object.assign({ 'state': state }, { 'sort': this.state.sort }));
  };

  updateSort = (sort) => {
    this.setState({
      'sort': sort
    });
    this.props.readIssues(Object.assign({ 'state': this.state.state }, { 'sort': sort }));
  };

  render() {
    return (
      <div>
        <h2> ISSUES PAGE </h2>
        <div>
          <DropdownButton title="STATE" bsStyle="primary" id="state">
            <MenuItem onClick={() => this.updateState('open')}> DEFAULT </MenuItem>
            <MenuItem onClick={() => this.updateState('all')}> ALL </MenuItem>
            <MenuItem onClick={() => this.updateState('open')}> OPEN </MenuItem>
            <MenuItem onClick={() => this.updateState('closed')}> CLOSED </MenuItem>
          </DropdownButton>
          <DropdownButton title="SORT" bsStyle="info" id="sort">
            <MenuItem onClick={() => this.updateSort('created')}> DEFAULT </MenuItem>
            <MenuItem onClick={() => this.updateSort('created')}> CREATED </MenuItem>
            <MenuItem onClick={() => this.updateSort('updated')}> UPDATED </MenuItem>
            <MenuItem onClick={() => this.updateSort('comments')}> COMMENTS </MenuItem>
          </DropdownButton>
          <h2> State : {this.state.state} / Sort : {this.state.sort} </h2>
        </div>
        <ListGroup>
          {
            this.props.issues.map((issues) =>
            <ListGroupItem key={issues.number} >
              <GithubIssues {...issues} />
            </ListGroupItem>
          )}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    issues: state.github.issues
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readIssues }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
