let postid = 2;

export class PostModel{
    constructor(userid,caption,imageUrl){
        this.id = ++postid,
        this.userid = userid,
        this.caption = caption,
        this.imageUrl = imageUrl
    }

    static addPost(userid,caption,imageUrl){
        const post = new PostModel(userid,caption,imageUrl);
        posts.push(post);

    }

    static getPost(postId){
        const post = posts.find(p=>p.id == postId);
        return post;
    }

    static getAllPosts(){
        return posts;
    }

    static userPosts(userid){
        const userposts = posts.filter(u=>u.userid == userid);
        return userposts;
    }

    static deletePost(postid){
        const postIndex = posts.findIndex(p=>p.id == postid);
        if(postIndex ==-1)
            return 'post not found';
        else{
            posts.splice(postIndex,1);
        }
    }

    static updatePost(postid,userid,caption,imageurl){
        const post = posts.find(p=>p.id == postid && p.userid==userid);
        if(post){
            post.caption = caption;
            post.imageUrl = imageurl;
        }
        else{
            return 'no post found with this user';
        }

    }
}

const posts = [
    {
        id:1,
        userid:1,
        caption: 'wondering',
        imageUrl: 'imageurl'
    },
    {
        id:2,
        userid:2,
        caption: 'woo hoo!',
        imageUrl: 'imageurl2'
    }
]