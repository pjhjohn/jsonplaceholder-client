import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import CircularProgress from 'material-ui/CircularProgress';
import MenuItem from 'material-ui/MenuItem';
import { Row, Col } from 'react-grid-system';

import { readPullRequests } from './../../actions';

import { GithubItem } from './../../components';

class PullRequests extends React.Component {
  static defaultProps = {
    pullRequests: {}
  };

  state = {
    filter: {},
    fieldValues: {
      state: "open",
      sort: "created"
    },
    initialized: false,
    loading: false
  };

  componentWillMount() {
    this.props.readPullRequests(this.state.filter)
      .then(() => this.setState({initialized: true}));
  };

  updateFilter = (key, value) => {
    const newFilter = Object.assign(this.state.filter, { [key] : value });
    this.setState(Object.assign(this.state.fieldValues, { [key] : value }));
    if(!value) delete newFilter[key];
    this.setState({ filter: newFilter, loading: true });
    this.props.readPullRequests(newFilter)
      .then(() => this.setState({loading: false}));
  };

  render() {
    const progress = (<CircularProgress style={{textAlign:`center`, width:`100%`}} />);
    if(!this.state.initialized) return (progress);
    return (
      <div>
        <h2> PULL REQUESTS PAGE </h2>
        <div>
          <Row>
            <Col md={3}>
              <SelectField value={this.state.fieldValues.state} onChange={(event, index, value) => this.updateFilter('state', value)}>
                <MenuItem value="all" primaryText="ALL" />
                <MenuItem value="open" primaryText="OPEN" />
                <MenuItem value="closed" primaryText="CLOSED" />
              </SelectField>
            </Col>
            <Col md={3}>
              <SelectField value={this.state.fieldValues.sort} onChange={(event, index, value) => this.updateFilter('sort', value)}>
                <MenuItem value="created" primaryText="CREATED" />
                <MenuItem value="updated" primaryText="UPDATED" />
                <MenuItem value="popularity" primaryText="POPULARITY" />
              </SelectField>
            </Col>
          </Row>
        </div>
          <Row>
            {(this.state.loading) ? progress :
              this.props.pullRequests.map((issues) => <GithubItem key={issues.number} {...issues} />)
            }
          </Row>
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
