import React from 'react';
import Helmet from 'react-helmet';

class ErrorTemplate extends React.Component {
  static propTypes = {
    statusCode: React.PropTypes.oneOf([
      '100','101','200','201','202','204','206','207','300','301','302','303','304','305','307','400','401',
      '402','403','404','405','406','408','409','410','411','412','413','414','415','416','417','418','422',
      '423','424','425','426','429','431','444','450','451','500','502','503','506','507','508','509','599'
    ]),
    message: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="row">
        <Helmet title={this.props.statusCode} />
        <div className="col-md-offset-3 col-md-6">
          <h1 className="text-center">{this.props.statusCode + " : " + this.props.message}</h1>
          <h1 className="text-center"></h1>
          <img src={"https://http.cat/"+this.props.statusCode} alt={this.props.message} className="img-responsive"/>
        </div>
      </div>
    )
  }
}

export default ErrorTemplate;
