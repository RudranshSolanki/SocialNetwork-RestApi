import express from 'express';
import { LikeController } from './likes.controller.js';

const likeController = new LikeController();
const likeRouter = express.Router();

likeRouter.get('/:postId',likeController.getAllLikes);
likeRouter.get('/toggle/:postId',likeController.toggleLike);

export default likeRouter;