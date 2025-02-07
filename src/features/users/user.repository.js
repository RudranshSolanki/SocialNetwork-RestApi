import { getDB } from "../../config/mongodb.js";

export class UserRepository{
    async registerUser(newUser)
    {
        try{
            const db = getDB(); //get the database,
            const collection = db.collection('users');
            await collection.insertOne(newUser);
            return newUser;
        }
        catch(err)
        {
            throw new Error("somethhing went wrong");
        }
    }

    async findByEmail(email)
    {
        try{
            const db = getDB(); //get the database,
            const collection = db.collection('users');
            return await collection.findOne({email});
            
        }
        catch(err)
        {
            throw new Error("somethhing went wrong");
        }
    }

    async signIn(email,password)
    {
        try{
            const db = getDB(); //get the database,
            const collection = db.collection('users');
            return await collection.findOne({email,password});
            
        }
        catch(err)
        {
            throw new Error("somethhing went wrong");
        }
    }
}