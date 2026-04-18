import mongoose from "mongoose"

const scoreSchema = new mongoose.Schema({
    
    role:String, //batter or bowler

    name:String,
    location:String,
    
    runs:Number,
    bowlertype:String,
    wickets:Number,

    matchlevel:String,
    tournamentName: String,
    ballType: String,
    date: String
})

const Score = mongoose.model("Score",scoreSchema)

export default Score 