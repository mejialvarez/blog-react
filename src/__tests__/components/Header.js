import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header', ()=> {
  it('renders title', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('.header-title').text()).toBe('Blog Posts');
  });
});