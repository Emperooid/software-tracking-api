import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp =async (req, res, next) => {
    //the basis of my signup logic

    const session = await mongoose.startSession();
    session.abortTransaction();

    try{
        const {name, email, password} = req.body;
        const existingUser = await  User.findOne ({email});

        if (existingUser){
            const error = new Error ('user alreaady exist')
            error.statusCode = 409;
            throw error;
        }

        //hash password ... to hide the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash (password, salt);

        const newUser = await user.Create ([{name, email, password: hashedPassword}],{session});

        const token = jwt.sign({userId: newUser[0]._id})

    }


    catch (error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }


}

export const signIn =async (req, res, next) => {
    //the basis of my signin logic

}


export const signOut =async (req, res, next) => {
    //the basis of my signout logic

}