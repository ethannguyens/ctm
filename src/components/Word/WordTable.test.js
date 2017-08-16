import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import WordTable from './WordTable';

function setup() {
  const props = {
    words: {
      a: {
        count: 1,
        prime: true
      },
      b: {
        count: 1,
        prime: true
      }
    }
  };

  return shallow(<WordTable {...props} />);
}

describe('WordTable via Enzyme', () => {
  it('renders the words table', () => {
    const wrapper = setup();
    expect(wrapper.find('table').length).toBe(1);
    expect(wrapper.find('tr').length).toBe(3);
  });
});
