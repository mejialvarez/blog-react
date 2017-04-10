import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import PostList from './components/PostList';
import posts from './posts.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts
    }
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={8} smOffset={2}>
            <Header />
            <PostList posts={ this.state.posts } />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
