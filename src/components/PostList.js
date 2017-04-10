import React, { Component } from 'react';
import Post from './Post'

class PostList extends Component {
  render() {
    return (
      <div>
        {
          this.props.posts.map((post, index) => {
            return <Post post={ post } key={ index } />;
          })
        }
      </div>
    );
  }
}

export default PostList;