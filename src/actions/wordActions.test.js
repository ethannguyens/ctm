import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as wordActions from './wordActions';
import * as types from './actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_WORDS_SUCCESS when loading words', (done) => {
    //arrange
    nock('http://localhost:3000')
      .get('/data')
      .reply(200, {body: {words: {a: {count: 1, prime: true}}}});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_WORDS_SUCCESS, body: {words: {a: {count: 1, prime: true}}}}
    ];

    const store = mockStore({words: {}}, expectedActions);

    //act and assert
    const data = store.dispatch(wordActions.loadWords(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_WORDS_SUCCESS);
      done();
    }));

  });
});
