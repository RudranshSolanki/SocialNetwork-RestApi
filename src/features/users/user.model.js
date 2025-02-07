import { getDB } from "../../config/mongodb.js";


export class UserModel{
    
    constructor(name,email,password){
        this.name = name,
        this.email = email,
        this.password = password
    }

    static getAllusers(){
        return users;
    }
}

const users = [
    {
        id:1,
        name:'Rudransh',
        email:'rudrash@gmail.com',
        password:'password1'
    }
]