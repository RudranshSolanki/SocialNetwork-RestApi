import { CommentModel } from "./comments.model.js";

export class CommentController{
    getAllCommets(req,res){
        const postid = req.params.id;
        const comments = CommentModel.getAllComments(postid);
        if(comments)
            res.status(200).send({success:true,message:comments});
        else
            res.status(400).send({success:false,message:'no comments found with current user'})
    }

    addComment(req,res){
        const userid = req.userId;
        const postid = req.params.id;
        const {comment} = req.body;
        CommentModel.addComment(userid,postid,comment);
        res.status(201).send({success:true,message:'commented successfully'})
    }

    deleteComment(req,res){
        const commentid = req.params.id;
        const userid = req.userId;
        const err = CommentModel.deleteComment(commentid,userid);
        if(err)
            res.status(400).send({success:false,message:err});
        else
            res.status(201).send({success:true,message:'commented deleted successfully'})
    }

    updateComment(req,res){
        const commentid = req.params.id;
        const userid = req.userId;
        const {comment} = req.body;
        const err = CommentModel.updateComment(commentid,userid,comment);
        if(err)
            res.status(400).send({success:false,message:err});
        else
            res.status(201).send({success:true,message:'commented updated successfully'})
    }

}