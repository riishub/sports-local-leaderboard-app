import mongoose from "mongoose"

const userschema = new mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model("User",userschema)

export default User