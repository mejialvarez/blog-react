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
      posts,
      filterDescActived: true
    }

    this.sortAscPosts = this.sortAscPosts.bind(this);
    this.sortDesPosts = this.sortDesPosts.bind(this);
    this.addVote = this.addVote.bind(this);
    this.removeVote = this.removeVote.bind(this);
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

  addVote(postId) {
    const postVotesUpdated = this.state.posts.map((post) => {
      if(post.id === postId) {
        post.votes++;
      }
      return post;
    });

    this.setState({
      posts: postVotesUpdated
    });
    this.state.filterDescActived ? this.sortDesPosts() : this.sortAscPosts();
  }

  removeVote(postId) {
    const postVotesUpdated = this.state.posts.map((post) => {
      if(post.id === postId) {
        post.votes--;
      }
      return post;
    });

    this.setState({
      posts: postVotesUpdated
    });
    this.state.filterDescActived ? this.sortDesPosts() : this.sortAscPosts();
  }

  componentDidMount() {
    this.state.filterDescActived ? this.sortDesPosts() : this.sortAscPosts();
  }
  
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={8} smOffset={2}>
            <Header />

            <div className='filter-box'>
              <span>Orden:</span>
              <FilterButton onFilterClick={ this.sortAscPosts } actived={ !this.state.filterDescActived }>
                Ascendente
              </FilterButton>
              <FilterButton onFilterClick={ this.sortDesPosts } actived={ this.state.filterDescActived }>
                Descendente
              </FilterButton>
            </div>

            <PostList 
              posts={ this.state.posts } 
              onPostUpVoteClick={ this.addVote } 
              onPostDownVoteClick={ this.removeVote } 
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
