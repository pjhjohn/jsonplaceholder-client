import React from 'react';
import { Debounce } from 'react-throttle';
import { Row, Col } from 'react-grid-system';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CircularProgress from 'material-ui/CircularProgress';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import { readContributors, readIssues } from './../../actions';

import { SimpleNavigator, GithubItem } from './../../components';

class Issues extends React.Component {
  static defaultProps = {
    contributors: {},
    issues: {}
  };

  static propTypes = {
    contributors: React.PropTypes.array.isRequired,
    issues: React.PropTypes.array.isRequired
  };

  state = {
    filter: {},
    fieldValues: {
      state: "open",
      sort: "created",
      labels: "",
      assignee: ""
    },
    initialized: false,
    loading: false
  };

  componentWillMount() {
    this.props.readIssues(this.state.filter)
      .then(() => this.setState({initialized: true}));
    this.props.readContributors()
      .then(() => this.setState({initialized: true}));;
  };

  updateFilter = (key, value) => {
    const newFilter = Object.assign(this.state.filter, { [key]: value });
    this.setState(Object.assign(this.state.fieldValues, { [key]: value }));
    if(!value) delete newFilter[key];
    this.setState({ filter: newFilter, loading: true });
    this.props.readIssues(newFilter)
      .then(() => this.setState({loading: false}));
  };

  render() {
    const paperStyle = { paddingLeft: 16, paddingRight: 16 };
    const dividerStyle = { marginLeft: -16, marginRight: -16 };
    const progress = (<CircularProgress style={{textAlign: `center`, width: `100%`}} />);
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
            <MenuItem value="comments" primaryText="COMMENTS" />
          </SelectField>
          <Divider style={dividerStyle} />
          <SelectField value={this.state.fieldValues.labels} onChange={(event, index, value) => this.updateFilter('labels', value)} underlineShow={false} fullWidth>
            <MenuItem value="" primaryText="SELECT LABEL" />
            <MenuItem value="bug" primaryText="BUG" />
            <MenuItem value="duplicate" primaryText="DUPLICATE" />
            <MenuItem value="enhancement" primaryText="ENHANCEMENT" />
            <MenuItem value="help wanted" primaryText="HELP WANTED" />
            <MenuItem value="invalid" primaryText="INVALID" />
            <MenuItem value="updated" primaryText="UPDATED" />
          </SelectField>
          <Divider style={dividerStyle} />
          <SelectField value={this.state.fieldValues.assignee} onChange={(event, index, value) => this.updateFilter('assignee', value)} underlineShow={false} fullWidth>
            <MenuItem value="" primaryText="SELECT ASSIGNEE" />
            { this.props.contributors.map((contributor) =>
              <MenuItem key={contributor.login} value={contributor.login} primaryText={contributor.login} />
            )}
          </SelectField>
          <Divider style={dividerStyle} />
          <Debounce time="1000" handler="onKeyUp">
            <TextField
              title="milestone"
              hintText="Milestone"
              onKeyUp={(event) => this.updateFilter(event.target.title, event.target.value)}
              underlineShow={false}
              fullWidth
            />
          </Debounce>
        </Paper>
        <Row>
          {(this.state.loading) ? progress : this.props.issues.map((issues) =>
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
    contributors: state.github.contributors,
    issues: state.github.issues
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readContributors, readIssues }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
