import React from 'react';

import { Container, Row, Col } from 'react-grid-system';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md={12}>
              <p className="text-muted">Place sticky footer content here.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
