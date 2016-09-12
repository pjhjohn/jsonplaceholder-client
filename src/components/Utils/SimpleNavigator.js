import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-grid-system';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class SimpleNavigator extends React.Component {
  static defaultProps = {
    back: false,
    edit: false,
    write: false
  };

  static propTypes = {
    title: React.PropTypes.string,
    path: React.PropTypes.string.isRequired,
    back: React.PropTypes.bool.isRequired,
    edit: React.PropTypes.bool.isRequired,
    editPath: React.PropTypes.string,
    write: React.PropTypes.bool.isRequired,
    writePath: React.PropTypes.string
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  render() {
    return (
      <Row style={{ marginBottom: `20px` }}>
        <Helmet title={this.props.title||this.props.path.split("/").join(" ").replace(/\b\w/g, l => l.toUpperCase()).trim()} />
        <Col md={2}> { this.props.back?
          <RaisedButton label="Back" fullWidth={true} primary={true}
                        onTouchTap={() => this.context.router.goBack()} />
          : null
        } </Col>
        <Col md={2} />
        <Col md={4}>
          <FlatButton label={this.props.title||this.props.path} style={{width: `100%`}} disabled={true} />
        </Col>
        <Col md={2}> { this.props.edit?
          <RaisedButton label="Edit" fullWidth={true} secondary={true}
                        onTouchTap={() => this.context.router.push(this.props.editPath || `${this.props.path}/edit`)} />
          : null
        } </Col>
        <Col md={2}> { this.props.write?
          <RaisedButton label="Write" fullWidth={true} primary={true}
                        onTouchTap={() => this.context.router.push(this.props.writePath || `${this.props.path}/new`)} />
          : null
        } </Col>
      </Row>
    );
  }
}

export default SimpleNavigator;
