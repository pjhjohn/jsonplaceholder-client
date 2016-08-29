import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropdownButton, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';

import { readIssues } from './../../actions';

import { GithubIssue } from './../../components';

class Issues extends React.Component {

  state = {
    filter: {}
  };

  updateFilter = (filter) => {
    const newFilter = Object.assign(this.state.filter, filter);
    this.setState({ filter: newFilter });
    this.props.readIssues(newFilter);
  }

  render() {
    return (
      <div>
        <h2> ISSUES PAGE </h2>
        <div>
          <DropdownButton title="STATE" bsStyle="primary" id="state">
            <MenuItem onClick={() => this.updateFilter({ state: 'open' })}> DEFAULT </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ state: 'all' })}> ALL </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ state: 'open' })}> OPEN </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ state: 'closed' })}> CLOSED </MenuItem>
          </DropdownButton>
          <DropdownButton title="SORT" bsStyle="info" id="sort">
            <MenuItem onClick={() => this.updateFilter({ sort: 'created' })}> DEFAULT </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ sort: 'created' })}> CREATED </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ sort: 'updated' })}> UPDATED </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ sort: 'comments' })}> COMMENTS </MenuItem>
          </DropdownButton>
          <DropdownButton title="LABELS" bsStyle="success" id="labels">
            <MenuItem onClick={() => this.updateFilter({ labels: ''})}> DEFAULT </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ labels: 'bug' })}> BUG </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ labels: 'duplicate' })}> DUPLICATE </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ labels: 'enhancement' })}> ENHANCEMENT </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ labels: 'help wanted' })}> HELP WANTED </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ labels: 'invalid' })}> INVALID </MenuItem>
            <MenuItem onClick={() => this.updateFilter({ labels: 'updated' })}> UPDATED </MenuItem>
          </DropdownButton>
        </div>
        <ListGroup>
          { this.props.issues.map((issues) =>
            <ListGroupItem key={issues.number} >
              <GithubIssue {...issues} />
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
