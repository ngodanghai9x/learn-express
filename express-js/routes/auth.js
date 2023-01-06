import express from 'express';
import { renderLogin, login } from '../controller/auth.js';

const router = express.Router();

router.get('/login', renderLogin );

router.post('/login', login);

export default router;