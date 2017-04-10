import React from 'react';
import { shallow } from 'enzyme';
import Post from '../../components/Post';

describe('Post', () => {
  it('renders post', () => {
    const post = {
      id: 1,
      title: 'Title',
      description: 'Description',
      url: '',
      votes: 10,
      writer_avatar_url: '',
      post_image_url: ''
    };
    const wrapper = shallow(<Post post={ post } />);
    expect(wrapper.find('.title').text()).toBe('Title')
    expect(wrapper.find('.description').text()).toBe('Description')
    expect(wrapper.find('.upvote-count').text()).toBe('10')
  });
})