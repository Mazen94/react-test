import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Row>
        <Col>
          <Spinner animation="border" variant="primary" />
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(Loader);
