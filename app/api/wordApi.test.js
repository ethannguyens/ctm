import path from 'path';
import WordApi from './wordApi';

const assert = require('assert');

describe('Word Api', () =>{
  it('should return an object with correct ount and prime', () => {
    //arrange
    const expectedData = { hello: { count: 1, prime: true}, world: { count: 1, prime: true} };
    const filePath = path.join( __dirname, '../mock/test.txt');
    
    //act and assert
    WordApi.getWords(filePath).then(data => {
      assert.equal(JSON.stringify(expectedData), JSON.stringify(data));
    })
  });
});