import { PostModel } from "./post.model.js";


export class PostCotroller{
    uploadPost(req,res){
        const userid = req.userId;
        console.log(userid);
        const{caption,imageUrl} = req.body;
        PostModel.addPost(userid,caption,imageUrl);
        res.status(201).send({success:true,message:'post uploaded successfully'});
    }

    getAll(req,res)
    {
        const post = PostModel.getAllPosts();
        res.status(200).send({success:true,posts:post});
    }

    getPost(req,res){
        const postid = req.params.id;
        const post = PostModel.getPost(postid);
        if(post)
            res.status(200).send({success:true,message:'post fetched'})
        else
            res.status(400).send({success:false,message:'not able to find the post'})
    }

    getUserPosts(req,res){
        const userid = req.userId;
        const userposts = PostModel.userPosts(userid);
        if(userposts)
            res.status(200).send({success:true,posts:userposts})
        else
            res.status(400).send({success:false,message:`user didn't post anything`})
    }

    deletePost(req,res){
        const postid = req.params.id;
        const err = PostModel.deletePost(postid);
        if(err){
            res.status(400).send({success:false,message:err})
        }
        else{
            res.status(200).send({success:true,message:'post deleted successfully'})
        }
    }

    updatePost(req,res){
        const postid = req.params.id;
        const userid = req.userId;
        const {caption,imageUrl} = req.body;
        const err = PostModel.updatePost(postid,userid,caption,imageUrl);
        if(err)
            res.status(400).send({success:false,message:err})
        else
        res.status(200).send({success:true,message:'post updated successfully'})

    }
}