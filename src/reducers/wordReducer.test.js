import expect from 'expect';
import wordReducer from './wordReducer';
import * as actions from '../actions/wordActions';

describe('Word Reducer', () => {
  it('should add word when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = {
      words: {
        test: {
          count: 1,
          prime: true
        }
      }
    };

    const newWords = {
      a: {
        count: 1,
        prime: true
      },
      b: {
        count: 2,
        prime: false
      }
    };

    const action = actions.loadWordsSuccess(newWords);

    //act
    const newState = wordReducer(initialState, action);

    //assert
    expect(Object.keys(newState).length).toEqual(2);
    expect(newState['a'].count).toBe(1);
    expect(newState['a'].prime).toBe(true);
    expect(newState['b'].count).toBe(2);
    expect(newState['b'].prime).toBe(false);
  });
});
