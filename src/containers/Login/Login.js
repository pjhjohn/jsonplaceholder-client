import React from 'react';
import { Row, Col } from 'react-grid-system';
import { Field, reduxForm } from 'redux-form';

import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

class Login extends React.Component {
  render() {
    return (
      <Col md={6}>
        <Card>
          <Field fullWidth={true} component={TextField} name="email" floatingLabelText="이메일"/>
          <Field fullWidth={true} component={TextField} name="password" floatingLabelText="비밀번호"/>
          <FlatButton type="submit" label="로그인"/>
          <FlatButton type="submit" label="트위터로 로그인"/>
          <FlatButton type="submit" label="페이스북으로 로그인"/>
          <Divider> </Divider>
          <FlatButton type="submit" label="회원가입"/>
        </Card>
      </Col>
    );
  }
}

export default Login;
