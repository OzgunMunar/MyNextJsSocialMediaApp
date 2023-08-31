import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    userImageLink: {
        type: String,
        default: ''
    },
    passwordToken: String,
    passwordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    
})

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;