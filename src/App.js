import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={7} smOffset={2}>
            <h1>Hola</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
