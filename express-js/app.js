import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { testCookie1, testCookie2 } from './controller/users.js';
// import db from './lowdb.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import testRoute from './routes/test.js';
import { requireAuth } from './middlewares/requireAuth.js';

// mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

// app.use((req, res, next) => {
//   console.log('my middleware - cookie: ', req && req.cookies);
//   next();
// })

// app.use(express.json()) // for lowdb
app.use(express.static('public')); // for folder public

app.use(cookieParser('secret-key-for-signed-cookie')); // for read cookie
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './pages');

// app.use('/users', userRoute);
app.use('/users', requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/test', testRoute);

// test
app.get('/cookie', testCookie1, testCookie2);

app.get('/search', (req, res) => {
  console.log("------------- query: ", req.query)
  res.render('home.pug', {
    name: 'Hải',
  });
  // res.send('<h1>searching...!</h1>')
})

export default app;