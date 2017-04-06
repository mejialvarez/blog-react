import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={8} smOffset={2}>
            <Header />
            <Post title="Manejo de dependencias en Ruby con Bundler" description="Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby." votes="0" />
            <Post title="A" description="B" votes="0" />
            <Post title="A" description="B" votes="0" />
            <Post title="A" description="B" votes="0" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
