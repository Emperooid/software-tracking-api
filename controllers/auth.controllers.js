import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRATION, JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js"; // Add this import

export const signUp = async (req, res, next) => {
    // const session = await mongoose.startSession();
    // session.startTransaction(); // Start transaction properly

    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUsers = await User.create([{ name, email, password: hashedPassword }], { session });

        const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

        // await session.commitTransaction();
        // session.endSession();
        
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                token,
                user: newUsers[0],
            }
        });

    } catch (error) {
        // await session.abortTransaction();
        // session.endSession();
        next(error);
    }
}

export const signIn = async (req, res, next) => {
    // The basis of my signin logic
}

export const signOut = async (req, res, next) => {
    // The basis of my signout logic
}