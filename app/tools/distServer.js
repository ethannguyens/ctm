import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import WordApi from '../api/wordApi';


/*eslint-disable no-console */

const port = 3000;
const app = express();
const filePath = path.join( __dirname, '../mock/Railway-Children-by-E-Nesbit.txt');

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.get('/data', (red, res) => {
  WordApi.getWords(filePath).then(words => {
    res.send(words);
  });
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
