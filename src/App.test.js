import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import helpers from './utils/helpers';

describe('Todo', () => {
  let wrapper, colours;
  beforeEach(() => {
    wrapper = shallow(<App />);
    colours = helpers.getColors();
  });
  // Tests will go here using `it` blocks
  it('renders', () => {
    expect(wrapper.find('h1').text()).toContain('Color Image Generator');
  });

  it('initial value of color-counter', () => {
    expect(wrapper.find('#color-counter').text()).toEqual('0 colors');
  });

  it('Check total 32768 colours generated', () => {
    const expected = colours.length === 32768;
    expect(expected).toBe(true);
  });

  it('Check generated colours are unique', () => {
    const coloursSet = new Set(colours);
    const expected = coloursSet.size === 32768;
    expect(expected).toBe(true);
  });
});
