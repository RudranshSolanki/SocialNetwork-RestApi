import express from 'express';
import { PostCotroller } from './post.controller.js';


const postController = new PostCotroller();
const postRouter = express.Router();


postRouter.get('/all',postController.getAll);
postRouter.get('/:id',postController.getPost);
postRouter.get('/',postController.getUserPosts);
postRouter.post('/',postController.uploadPost);
postRouter.delete('/:id',postController.deletePost);
postRouter.put('/:id',postController.updatePost);

export default postRouter;