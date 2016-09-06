import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-grid-system';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';

class ErrorTemplate extends React.Component {
  static defaultProps = {
    statusCode: '200',
    message: "OK"
  };

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
      <Row>
        <Helmet title={this.props.statusCode} />
        <Col md={2} />
        <Col md={8}>
          <Card>
            <CardHeader title={`${this.props.statusCode} : ${this.props.message}`}/>
            <CardMedia>
              <img src={`https://http.cat/${this.props.statusCode}`} alt={this.props.message}  />
            </CardMedia>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default ErrorTemplate;
