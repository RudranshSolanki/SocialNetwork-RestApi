let likeIndex = 0;

export class LikeModel{
    constructor(userid,postid){
        this.id = ++likeIndex,
        this.userid = userid,
        this.postid = postid
    }

    static getLikes(postid){
        const allLikes = likes.filter(like=>like.postid == postid);
        return allLikes;
    }

    static toggleLike(postid,userid)
    {
        const likeid = likes.findIndex(like=> like.userid ==userid && like.postid == postid);
        if(likeid == -1)
        {
            const addlike = new LikeModel(userid,postid);
            likes.push(addlike);
            return 'post liked'
        }
        else{
            likes.splice(likeid,1);
            return 'post unliked'
        }
    }
}

const likes =[];