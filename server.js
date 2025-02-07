import './env.js';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import userRouter from './src/features/users/users.routes.js';
import postRouter from './src/features/post/post.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import commentRouter from './src/features/comment/comments.routes.js';
import likeRouter from './src/features/likes/likes.routes.js';
import {connnectToMongoDB} from './src/config/mongodb.js';


const app = express();


app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/users',userRouter);
app.use('/api/post',jwtAuth,postRouter);
app.use('/api/comment',jwtAuth,commentRouter);
app.use('/api/like',jwtAuth,likeRouter);

app.listen(3000,()=>{
    console.log('server is running on port 3000');
    connnectToMongoDB();
})

