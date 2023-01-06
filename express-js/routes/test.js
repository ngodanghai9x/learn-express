import express from 'express';
import multer from 'multer';

import { requireAuth, requireAuth1 } from '../middlewares/requireAuth.js';
import * as testController from '../controller/test.js';

// const upload = multer({ dest: './public/upload_files' }) // for parsing multipart/form-data
const upload = multer() // for parsing multipart/form-data

const router = express.Router();

router.get('/', async (req, res, next) => {
  testController.testFunc().then(async ({ number, cb }) => {
    res.status(200).json({
      message: 'success',
      number
    });
    if (cb) {
      await cb();
    }
  })
})

router.get('/async', async (req, res, next) => {
  const { number, cb } = await testController.testFunc();

  res.status(200).json({
    message: 'success',
    number
  });
  
  if (cb) {
    await cb();
  }
})


export default router;