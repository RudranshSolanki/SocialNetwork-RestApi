import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { UserModel } from "./user.model.js";
import { UserRepository } from './user.repository.js';

export class UserController{

    constructor(){
        this.userRepository = new UserRepository();

    }
    async signup(req,res){
        const {name,email,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await UserModel(name,email,hashedPassword);
        await this.userRepository.registerUser(newUser);
        res.status(201).send({success:true,message:'user added successfully'});
    }

    async signin(req,res){
        const {email,password} = req.body;
        const user =  await this.userRepository.findByEmail(email);
        if(!user)
        {
            return res.status(400).send("User not found");
        }
        else{
            const result = await bcrypt.compare(password,user.password);
            if(result){
                const token = jwt.sign({userid:result.id,email:result.email},process.env.JWT_SECRET,{
                    expiresIn:'1h',
                 })
                res.status(201).cookie("jwtToken", token, { maxAge: 900000, httpOnly: false }).send({success:true,message:'logged in'});
            }
            else
                res.status(400).send({success:false,message:'invalid creds'});
        }
        const result = await this.userRepository.signIn(email,password);
    }
}