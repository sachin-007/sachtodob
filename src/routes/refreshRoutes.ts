import express from 'express';
import { refresh } from '../controllers/refreshController';

const router = express.Router();

// Define the /refresh route
router.get('/refresh', refresh);

export default router;
