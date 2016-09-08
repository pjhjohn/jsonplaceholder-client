import React from 'react';
import { ToastContainer, ToastMessage } from 'react-toastr';
import { connect } from 'react-redux';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class Toastr extends React.Component {
  static defaultProps = {
    action: ``,
    status: 404
  };

  static propTypes = {
    action: React.PropTypes.string.isRequired,
    status: React.PropTypes.number.isRequired
  };

  componentWillUpdate(nextProps) {
    console.log(nextProps);
    switch (nextProps.action) {
      case `posting`: {
        if (nextProps.status === 201) this.refs.container.success(`Success! :)`, `Posting Result`);
        else this.refs.container.error(`Error! :(`, `Posting Result`);
        break;
      }
      case `editing`: {
        if (nextProps.status === 200) this.refs.container.success(`Success! :)`, `Editing Result`);
        else this.refs.container.error(`Error! :(`, `Editing Result`);
        break;
      }
      default:
        break;
    }
  }

  render() {
    return (
      <ToastContainer ref="container" toastMessageFactory={ToastMessageFactory} className="toast-top-right"/>
    );
  }
}


function mapStateToProps(state) {
  return {
    action: state.toastr.action,
    status: state.toastr.status
  };
}

export default connect(mapStateToProps)(Toastr);
