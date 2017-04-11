import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import FilterButton from './components/FilterButton';
import PostList from './components/PostList';
import { ascByVotes, desByVotes } from './utils/sorts';
import posts from './posts.js';
import './stylesheets/filterBox.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts
    }

    this.sortAscPosts = this.sortAscPosts.bind(this);
    this.sortDesPosts = this.sortDesPosts.bind(this);
  }

  sortAscPosts() {
    this.setState({
      posts: this.state.posts.slice(0).sort(ascByVotes),
      filterDescActived: false,
    })
  }

  sortDesPosts() {
    this.setState({
      posts: this.state.posts.slice(0).sort(desByVotes),
      filterDescActived: true,
    })
  }

  componentWillMount() {
    this.sortDesPosts();
  }
  
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={8} smOffset={2}>
            <Header />
            <div className='filter-box'>
              <span>Orden:</span>
              <FilterButton onFilterClick={ this.sortAscPosts } actived={ !this.state.filterDescActived } className="filter-asc">
                Ascendente
              </FilterButton>
              <FilterButton onFilterClick={ this.sortDesPosts } actived={ this.state.filterDescActived } className="filter-desc">
                Descendente
              </FilterButton>
            </div>
            <PostList posts={ this.state.posts } />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
