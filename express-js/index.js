// require('dotenv').config();
// console.log('------1', process.env)
// import mongoose from 'mongoose';
import app from './app.js';

const port = 1506;

app.listen(port, () => {
  console.log(`ExpressJs app listening at http://localhost:${port}`)
});


