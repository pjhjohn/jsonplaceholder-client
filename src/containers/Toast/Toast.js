import React from 'react';
import { ToastContainer, ToastMessage } from 'react-toastr';
import { connect } from 'react-redux';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

const POSTING = 'posting';
const EDITING = 'editing';
const NOTHING = 'nothing';
const COMMENT = 'comment';

class Toast extends React.Component {
  static defaultProps = {
    type: NOTHING,
    httpStatus: 200,
    date: ``
  };

  static propTypes = {
    type: React.PropTypes.string.isRequired,
    httpStatus: React.PropTypes.number.isRequired,
    date: React.PropTypes.string.isRequired
  };

  componentWillUpdate(nextProps) {
    switch (nextProps.type) {
      case POSTING: {
        if (nextProps.httpStatus === 201) this.refs.container.success(`Success! :) at ${nextProps.date}`, `Posting Result`);
        else this.refs.container.error(`Error! :(`, `Posting Result`);
        break;
      }
      case EDITING: {
        if (nextProps.httpStatus === 200) this.refs.container.success(`Success! :) at ${nextProps.date}`, `Editing Result`);
        else this.refs.container.error(`Error! :(`, `Editing Result`);
        break;
      }
      case COMMENT: {
        if (nextProps.httpStatus === 201) this.refs.container.success(`Successfully Commented at ${nextProps.date}`, `Comment Result`);
        else this.refs.container.error(`Error! :(`, `Comment Result`);
        break;
      }
      case NOTHING:
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <ToastContainer ref="container" toastMessageFactory={ToastMessageFactory} className="toast-top-right" preventDuplicates={false}/>
    );
  }
}


function mapStateToProps(state) {
  return {
    type: state.toast.type,
    httpStatus: state.toast.httpStatus,
    date : state.toast.date
  };
}

export default connect(mapStateToProps)(Toast);
