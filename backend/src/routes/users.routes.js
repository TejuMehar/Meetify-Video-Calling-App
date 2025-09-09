import { Router} from 'express';
import {login, register} from '../controllers/user.controller.js';

const router = Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/add-to-history');
router.route('/get-user-history');


export default router;