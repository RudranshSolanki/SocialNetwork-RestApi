import express from 'express'
import { CommentController } from './commets.controller.js';



const commentController = new CommentController();
const commentRouter = express.Router();


commentRouter.get('/:id',commentController.getAllCommets);
commentRouter.post('/:id',commentController.addComment);
commentRouter.delete('/:id',commentController.deleteComment);
commentRouter.put('/:id',commentController.updateComment);


export default commentRouter;