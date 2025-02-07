let cmntIndex = 1;

export class CommentModel{
    constructor(userid,postid,comment){
        this.id = ++cmntIndex,
        this.userid = userid,
        this.postid = postid,
        this.comment = comment
    }

    static getAllComments(postid){
        const comment = comments.filter(c=>c.postid == postid);
        return comment;
    }

    static deleteComment(commentid,userid){
        const commentIndex = comments.findIndex(c=>c.id == commentid && c.userid == userid)
        if(commentIndex == -1)
            return 'no comment found';
        else{
            comments.splice(commentIndex,1);
        }
    }

    static updateComment(commentid,userid,newcomment){
        const comment = comments.find(c=>c.id == commentid && c.userid == userid);
        if(comment)
        {
            comment.comment = newcomment;
        }
        else{
            return 'can not find comment by this user id'
        }
    }

    static addComment(userid,postid,comment){
        const newcomment = new CommentModel(userid,postid,comment);
        comments.push(newcomment);
        
    }
}

const comments =[
    {
        id:1,
        userid:1,
        postid:1,
        comment: 'wow great!'
    }
]