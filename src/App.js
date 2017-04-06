import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={7} smOffset={2}>
            <Header />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
