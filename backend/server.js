import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Score from "./models/Score.js"




const app=express();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/sportsDB")
.then(()=>console.log("mongodb connected"))
.catch((e)=>console.log(e))



app.post("/scores", async (req,res) =>{
    
    const newScore=new Score(req.body)
    await newScore.save()
    res.json(newScore)
})
app.get("/scores", async (req, res) => {
    const {role , location}=req.query

    let query = {}
    if(role){
        query.role=role
    }
    if(location && location!="All"){
        query.location=location
    }

    let sortOption = {}

    if(role==="bowler"){
        sortOption={wickets: -1}
    }
    else {
        sortOption={runs:-1}
    }
    const scores = await Score.find(query).sort(sortOption)
    res.json(scores)
});

app.listen(5000, ()=>{
    console.log("server running on port: 5000   ")
})