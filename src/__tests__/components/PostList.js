import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../../components/PostList';
import Post from '../../components/Post';

describe('PostList', () => {
  it('renders no posts when props empty', () => {
    const wrapper = shallow(<PostList posts={ [] }/>)

    expect(wrapper.find(Post).length).toBe(0)
  })

  it('renders posts', () => {
    const posts = [
      {
        id: 1,
        title: 'Title 1',
        description: 'Description 1',
        url: '',
        votes: 10,
        writer_avatar_url: '',
        post_image_url: ''
      },
      {
        id: 2,
        title: 'Title 2',
        description: 'Description 2',
        url: '',
        votes: 20,
        writer_avatar_url: '',
        post_image_url: ''
      }
    ];
    const wrapper = shallow(<PostList posts={ posts }/>)

    expect(wrapper.find(Post).length).toBe(2)
  })
})