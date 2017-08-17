import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../../webpack.config';
import open from 'open';
import WordApi from '../api/wordApi';

/* eslint-disable no-console */
process.env.NODE_ENV = 'dev';

const port = 3000;
const app = express();
const compiler = webpack(config);
const filePath = path.join( __dirname, '../mock/Railway-Children-by-E-Nesbit.txt');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../../src/index.html'));
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
