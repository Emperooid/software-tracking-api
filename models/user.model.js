import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required :[true, 'user name is required'],
        trim: true,
        minlength: [3, 'user name must be at least 3 characters long'],
        maxlength: [50, 'user name must be at most 50 characters long']
    },
    email:{
        type:String,
        required: [true, 'user email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        minlenght :5,
        maxlenght:255,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'user password is required'],
        minlength: [6, 'user password must be at least 6 characters long'],
        maxlength: [1024, 'user password must be at most 1024 characters long']
    },
},{timestamps :true});    

const User = mongoose.model('User', userSchema);
export default User;    