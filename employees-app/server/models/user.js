import mongoose, { Schema } from "mongoose";

// Schema => Collections 
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}); 

export const userModel = mongoose.model("users", UserSchema);