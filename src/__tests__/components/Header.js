import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

it('renders title h1', () => {
  const wrapper = shallow(<Header/>);
  expect(wrapper.find('h1').length).toBe(1);
});