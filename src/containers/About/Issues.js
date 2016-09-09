import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Debounce } from 'react-throttle';
import CircularProgress from 'material-ui/CircularProgress';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-grid-system';

import { readContributors, readIssues } from './../../actions';

import { GithubItem } from './../../components';

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
    value: {
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
    const newFilter = Object.assign(this.state.filter, { [key] : value });
    const changeValue = Object.assign(this.state.value, { [key] : value });
    this.setState(changeValue);
    if(!value) delete newFilter[key];
    this.setState({ filter: newFilter, loading: true });
    this.props.readIssues(newFilter)
      .then(() => this.setState({loading: false}));
  };

  render() {
    const progress = (<CircularProgress style={{textAlign:`center`, width:`100%`}} />);
    if(!this.state.initialized) return (progress);
    return (
      <div>
        <h2> ISSUES PAGE </h2>
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
              <MenuItem value="comments" primaryText="COMMENTS" />
            </SelectField>
          </Col>
          <Col md={3}>
            <SelectField value={this.state.value.labels} onChange={(event, index, value) => this.updateFilter('labels', value)}>
              <MenuItem value="" primaryText="SELECT LABEL" />
              <MenuItem value="bug" primaryText="BUG" />
              <MenuItem value="duplicate" primaryText="DUPLICATE" />
              <MenuItem value="enhancement" primaryText="ENHANCEMENT" />
              <MenuItem value="help wanted" primaryText="HELP WANTED" />
              <MenuItem value="invalid" primaryText="INVALID" />
              <MenuItem value="updated" primaryText="UPDATED" />
            </SelectField>
          </Col>
          <Col md={3}>
            <SelectField value={this.state.value.assignee} onChange={(event, index, value) => this.updateFilter('assignee', value)}>
              <MenuItem value="" primaryText="SELECT ASSIGNEE" />
              { this.props.contributors.map((contributor) =>
                <MenuItem key={contributor.login} value={contributor.login} primaryText={contributor.login} />
              )}
            </SelectField>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Debounce time="1000" handler="onKeyUp">
              <TextField
                style={{width: "100%"}}
                title="milestone"
                hintText="milestone"
                floatingLabelText="Floating Label Text"
                onKeyUp={(event) => this.updateFilter(event.target.title, event.target.value)}
              />
            </Debounce>
          </Col>
        </Row>
        <Row>
          {(this.state.loading) ? progress :
            this.props.issues.map((issues) => <GithubItem key={issues.number} {...issues} />)
          }
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
