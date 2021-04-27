import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Todo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  // Tests will go here using `it` blocks
  it('renders', () => {
    expect(wrapper.find('h1').text()).toContain('Color Image Generator');
  });

  it('initial value of color-counter', () => {
    expect(wrapper.find('#color-counter').text()).toEqual('0 colors');
  });

  it('Check exact required number of colors generated', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('#color-counter').text()).toEqual('32768 colors');
  });
});
