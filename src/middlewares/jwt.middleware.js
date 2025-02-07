import jwt from 'jsonwebtoken'

const jwtAuth=(req,res,next)=>{
    // read the token
    const {jwtToken} = req.cookies;
    if(!jwtToken)
        return res.status(401).send('unauthorized');
    
    //check token is valid
    try{
        const payload = jwt.verify(jwtToken,process.env.JWT_SECRET);
        req.userId = payload.userid;
    }
    catch(err)
    {
        return res.status(401).send('unauthorized');
    }
    next();
}

export default jwtAuth;