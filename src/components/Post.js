import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../stylesheets/post.css';

class Post extends Component {
  render() {
    return (
      <div className='post'>
        <Row>
          <Col lg={5} md={5} sm={12} xs={12}>
            <img className='img-responsive' src='http://blog.makeitreal.camp/images/bg-images/bundler.jpg' alt='mkt' />
          </Col>
          <Col className="post-body" lg={7} md={7} sm={12} xs={12}>
            <Row>
              <Col lg={1} md={1} sm={1} xs={2}>
                <div className='votes'>
                  <span className="upvote-arrow"></span>
                  <span className="upvote-count">{ this.props.votes }</span>
                  <span className="downvote-arrow"></span>
                </div>
              </Col>
              <Col lg={11} md={11} sm={11} xs={10}>
                <h2 className='title'>{ this.props.title }</h2>
                <p className='description'>{ this.props.description }</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Post;