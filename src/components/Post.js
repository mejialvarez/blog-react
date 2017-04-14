import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../stylesheets/post.css';

class Post extends Component {
  constructor() {
    super();

    this.onUpVoteClick = this.onUpVoteClick.bind(this);
    this.onDownVoteClick = this.onDownVoteClick.bind(this);
  }

  onUpVoteClick() {
    this.props.onUpVoteClick(this.props.post.id)
  }

  onDownVoteClick() {
    this.props.onDownVoteClick(this.props.post.id)
  }

  render() {
    const {
      title,
      description,
      url,
      votes,
      writer_avatar_url,
      post_image_url
    } = this.props.post;

    return (
      <div className='post'>
        <Row>
          <Col lg={5} md={5} sm={12} xs={12}>
            <img className='img-responsive' src={ post_image_url} alt={ title } />
          </Col>
          <Col className='post-body' lg={7} md={7} sm={12} xs={12}>
            <Row>
              <Col lg={1} md={1} sm={1} xs={2}>
                <div className='votes'>
                  <span className='upvote-arrow' onClick={ this.onUpVoteClick }></span>
                  <span className='upvote-count'>{ votes }</span>
                  <span className='downvote-arrow' onClick={ this.onDownVoteClick }></span>
                </div>
              </Col>
              <Col lg={11} md={11} sm={11} xs={10}>
                <h2 className='title'>
                  <a href={ url }>
                    { title }
                  </a>
                </h2>
                <p className='description'>{ description }</p>
                <div className="writer">
                  Escrito por: <img src={ writer_avatar_url } className="img-circle" alt="writer" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Post;