import expect from 'expect';
import nock from 'nock';
import ajax from './ajax';

describe('Ajax', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should make an ajax call and return the correct data', (done) => {
    //arrange
    const port = process.env.PORT || 3000;
    const words = {words: {a: {count: 1, prime: true}}};
    nock(`http://localhost:${port}`)
      .get('/data')
      .reply(200, words);

    //act and assert
    ajax(`http://localhost:${port}`, data => {
      expect(data).toEqual(words);
      done();
    });

  });
});
