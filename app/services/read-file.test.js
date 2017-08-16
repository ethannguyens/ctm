import expect from 'expect';
import ReadFile from './read-file';
import path from 'path';

const assert = require('assert');

const readFile = new ReadFile();
const expectedData = { hello: { count: 1 }, world: { count: 1 } };

describe('Read File', () => {
  it('should initiate the ReadFile object', () => {
    assert.equal('object', typeof(readFile));
  });
});

describe('Get unique words', () => {
  it('should return an object with unique words count', () => {
    //arrange
    const location = path.join( __dirname, '../mock/test.txt');

    //act and assert
    readFile.getUniqueWords(location, 'stream', 'utf8').then((data) => {
      assert.equal(JSON.stringify(expectedData), JSON.stringify(data));
    });
  })
});

describe('Count Word', () => {
  it('should return an object with correct count', () => {
    //arrange
    const uniqueWords = {};
    const line = 'hello world';

    //act
    const obj = readFile.countWords(uniqueWords, line);

    //assert
    assert.equal(JSON.stringify(expectedData), JSON.stringify(obj));
  });
});

describe('Count Word', () => {
  it('should return an object with correct count', () => {
    //arrange
    const data = 'hello world \n';

    //act
    const obj = readFile.processData(data);

    //assert
    assert.equal(JSON.stringify(expectedData), JSON.stringify(obj));
  });
});

describe('sync', () => {
  it('should be a function', () =>{
    assert('function', typeof(readFile.sync));
  });

  it('should return the file content', () => {
    //act and assert
    readFile.sync(path.join( __dirname, '../mock/test.txt'), 'utf8').then((data) => {
      assert.equal(JSON.stringify(expectedData), JSON.stringify(data));
    });
  })

});

describe('async', () => {
  it('should be a function', () =>{
    assert('function', typeof(readFile.async));
  });

  it('should return the file content', () => {
    //act and assert
    readFile.async(path.join( __dirname, '../mock/test.txt'), 'utf8').then((data) => {
      assert.equal(JSON.stringify(expectedData), JSON.stringify(data));
    });
  })
});

describe('stream', () => {
  it('should be a function', () =>{
    assert('function', typeof(readFile.async));
  });

  it('should return the file content', () => {
    //act and assert
    readFile.stream(path.join( __dirname, '../mock/test.txt'), 'utf8').then((data) => {
      assert.equal(JSON.stringify(expectedData), JSON.stringify(data));
    });
  })
});