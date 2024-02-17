import express from 'express';
import { UserController } from '../controllers/userController.js';

const router = express.Router();
const userController = new UserController();

router.post('/login', userController.login.bind(userController));
router.post('/register', userController.register.bind(userController));

export default router;
