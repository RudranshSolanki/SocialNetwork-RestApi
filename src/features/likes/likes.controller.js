import { LikeModel } from "./likes.model.js";

export class LikeController{
    getAllLikes(req,res){
        const postid = req.params.postId;
        const allLikes = LikeModel.getLikes(postid);
        res.status(200).send({success:true,Likes:allLikes});
    }

    toggleLike(req,res){
        const postid = req.params.postId;
        const userid = req.userId;
        const msg = LikeModel.toggleLike(postid,userid);
        res.status(200).send({success:true,message:msg})
    }
}