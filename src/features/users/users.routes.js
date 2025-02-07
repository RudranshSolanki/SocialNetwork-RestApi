import express from 'express';
import { UserController } from './users.controller.js';


const userRouter = express.Router();

const userController = new UserController();
userRouter.post('/signin',(req,res)=>{
    userController.signin(req,res);
});
userRouter.post('/signup',(req,res)=>{
    userController.signup(req,res);
});

export default userRouter;