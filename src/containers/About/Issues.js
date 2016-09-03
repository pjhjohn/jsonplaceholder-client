import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropdownButton, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Debounce } from 'react-throttle';

import { readContributors, readIssues } from './../../actions';

import { GithubIssue } from './../../components';

class Issues extends React.Component {

  state = {
    filter: {}
  };

  componentWillMount() {
    this.props.readContributors();
  }

  updateFilter = (key, value) => {
    const newFilter = Object.assign(this.state.filter, { [key] : value });
    if(!value) delete newFilter[key];
    this.setState({ filter: newFilter });
    this.props.readIssues(newFilter);
  };

  render() {
    if(!this.props.contributors.length) return (<div>LOADING</div>);
    return (
      <div>
        <h2> ISSUES PAGE </h2>
        <div>
          <DropdownButton title="STATE" bsStyle="primary" id="state">
            <MenuItem onClick={() => this.updateFilter('state', 'all')}> ALL </MenuItem>
            <MenuItem onClick={() => this.updateFilter('state', 'open')}> OPEN </MenuItem>
            <MenuItem onClick={() => this.updateFilter('state', 'closed')}> CLOSED </MenuItem>
          </DropdownButton>
          <DropdownButton title="SORT" bsStyle="info" id="sort">
            <MenuItem onClick={() => this.updateFilter('sort', 'created')}> CREATED </MenuItem>
            <MenuItem onClick={() => this.updateFilter('sort', 'updated')}> UPDATED </MenuItem>
            <MenuItem onClick={() => this.updateFilter('sort', 'comments')}> COMMENTS </MenuItem>
          </DropdownButton>
          <DropdownButton title="LABELS" bsStyle="success" id="labels">
            <MenuItem onClick={() => this.updateFilter('labels', '')}> DEFAULT </MenuItem>
            <MenuItem onClick={() => this.updateFilter('labels', 'bug')}> BUG </MenuItem>
            <MenuItem onClick={() => this.updateFilter('labels', 'duplicate')}> DUPLICATE </MenuItem>
            <MenuItem onClick={() => this.updateFilter('labels', 'enhancement')}> ENHANCEMENT </MenuItem>
            <MenuItem onClick={() => this.updateFilter('labels', 'help wanted')}> HELP WANTED </MenuItem>
            <MenuItem onClick={() => this.updateFilter('labels', 'invalid')}> INVALID </MenuItem>
            <MenuItem onClick={() => this.updateFilter('labels', 'updated')}> UPDATED </MenuItem>
          </DropdownButton>
          <Debounce time="1000" handler="onKeyUp">
            <input type="text" title="assignee"  placeholder="Assignee" list="assigneeList"
                   onKeyUp={(event) => this.updateFilter(event.target.title, event.target.value)} />
          </Debounce>
          <datalist id="assigneeList">
          { this.props.contributors.map((contributors) =>
            <option key={contributors.id}> {contributors.login} </option>
          )}
          </datalist>
          <Debounce time="1000" handler="onKeyUp">
            <input type="text" title="milestone" placeholder="Milestone"
                   onKeyUp={(event) => this.updateFilter(event.target.title, event.target.value)} />
          </Debounce>
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
    contributors: state.github.contributors,
    issues: state.github.issues
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readContributors, readIssues }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
