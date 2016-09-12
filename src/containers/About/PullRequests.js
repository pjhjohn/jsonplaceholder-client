import React from 'react';
import { Row, Col } from 'react-grid-system';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CircularProgress from 'material-ui/CircularProgress';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import { readPullRequests } from './../../actions';

import { SimpleNavigator, GithubItem } from './../../components';


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
    const paperStyle = { paddingLeft: 16, paddingRight: 16 };
    const dividerStyle = { marginLeft: -16, marginRight: -16 };
    const progress = (<CircularProgress style={{textAlign:`center`, width:`100%`}} />);
    if(!this.state.initialized) return (progress);
    return (
      <div>
        <SimpleNavigator path={window.location.pathname} />
        <Paper zDepth={1} style={paperStyle}>
          <SelectField value={this.state.fieldValues.state} onChange={(event, index, value) => this.updateFilter('state', value)} underlineShow={false} fullWidth>
            <MenuItem value="all" primaryText="ALL" />
            <MenuItem value="open" primaryText="OPEN" />
            <MenuItem value="closed" primaryText="CLOSED" />
          </SelectField>
          <Divider style={dividerStyle} />
          <SelectField value={this.state.fieldValues.sort} onChange={(event, index, value) => this.updateFilter('sort', value)} underlineShow={false} fullWidth>
            <MenuItem value="created" primaryText="CREATED" />
            <MenuItem value="updated" primaryText="UPDATED" />
            <MenuItem value="popularity" primaryText="POPULARITY" />
          </SelectField>
        </Paper>
        <Row>
          {(this.state.loading) ? progress : this.props.pullRequests.map((issues) =>
            <Col md={12} key={issues.number}>
              <GithubItem {...issues} />
            </Col>
          )}
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
