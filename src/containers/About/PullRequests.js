import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Row, Col } from 'react-grid-system';

import { readPullRequests } from './../../actions';

import { GithubItem } from './../../components';

class PullRequests extends React.Component {

  state = {
    filter: {},
    value: {
      state: "all",
      sort: "created",
      labels: "",
      assignee: ""
    }
  };

  updateFilter = (key, value) => {
    const newFilter = Object.assign(this.state.filter, { [key] : value });
    if(!value) delete newFilter[key];
    this.setState({ filter: newFilter });
    this.props.readPullRequests(newFilter);
  };

  render() {
    return (
      <div>
        <h2> PULL REQUESTS PAGE </h2>
        <div>
          <Row>
            <Col md={3}>
              <SelectField value={this.state.value.state} onChange={(event, index, value) => this.updateFilter('state', value)}>
                <MenuItem value="all" primaryText="ALL" />
                <MenuItem value="open" primaryText="OPEN" />
                <MenuItem value="closed" primaryText="CLOSED" />
              </SelectField>
            </Col>
            <Col md={3}>
              <SelectField value={this.state.value.sort} onChange={(event, index, value) => this.updateFilter('sort', value)}>
                <MenuItem value="created" primaryText="CREATED" />
                <MenuItem value="updated" primaryText="UPDATED" />
                <MenuItem value="popularity" primaryText="POPULARITY" />
              </SelectField>
            </Col>
          </Row>
        </div>
          { this.props.pullRequests.map((pulls) =>
              <GithubItem key={pulls.number} {...pulls} />
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pullRequests: state.github.pullRequests,
    comments: state.github.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPullRequests }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PullRequests);
