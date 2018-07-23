import express from 'express';
//import controller file
import * as userController from '../controllers/user.server.controller';
// get an instance of express router
const router = express.Router();
router.route('/')
    .get(userController.getUser)
    .put(userController.updateUser);
export default router;