// import express from 'express';
// import { registerUser, loginUser,getCurrentUser } from '../controllers/authController';
// import { protect } from '../middlewares/authMiddleware';

// const router = express.Router();

// router.post('/signup', registerUser);
// router.post('/login', loginUser);
// router.get('/me', protect, getCurrentUser);

// export default router;

import express from 'express';
import { registerUser, loginUser, getCurrentUser } from '../controllers/authController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getCurrentUser);

export default router;