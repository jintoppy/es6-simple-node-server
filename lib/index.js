import express from 'express';
import path from 'path';
import logger from 'morgan';
const app = express();

console.log(__dirname);
const publicPath = path.resolve(__dirname, "../public");
app.use(logger('dev'));
app.use(express.static(publicPath)); 

app.listen(3002, () => {
    console.log('started on 3002');
});