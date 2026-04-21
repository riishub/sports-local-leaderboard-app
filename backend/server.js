import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Score from "./models/Score.js"
import User from "./models/User.js"



const app=express();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/sportsDB")
.then(()=>console.log("mongodb connected"))
.catch((e)=>console.log(e))

app.post("/register", async(req,res)=>{
    try{
      const existingUser = await User.findOne({ username: req.body.username });
      if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
      }
      const newUser = new User(req.body)
      await newUser.save()
      res.json(newUser)
    }
    catch(err){
      res.status(500).json({error:"failed to save user data"})
    }
})
app.post("/login",async(req,res)=>{
      const{username,password}=req.body
      const user = await User.findOne({username,password})
      
      if(!user){
        return res.status(401).json({error: "invalid credentials"})
      }
      res.json({ message: "Login success", username })
    })

app.post("/scores", async (req,res) =>{
    try{
    const newScore=new Score(req.body)
    await newScore.save()
    res.json(newScore)
    }
    catch(err){
        res.status(500).json({error: "failed to save score"})
    }
})
app.get("/scores", async (req, res) => {
  const { username, role, location } = req.query;

  let query = {};
  if(username){
    query.username = username
  }

  if (role === "batter" || role === "bowler") {
    query.role = role;
  }

  
  if (location && location !== "All") {
    query.location = location;
  }


  let sortOption = {};
  if (role === "bowler") {
    sortOption = { wickets: -1 };
  } else {
    sortOption = { runs: -1 };
  }

  const scores = await Score.find(query).sort(sortOption);
  res.json(scores);
});

app.delete("/scores/:id",async(req,res)=>{
  try{
    const {username} = req.body
    const score = await Score.findById(req.params.id)
    if(!score){
      return res.status(404).json({error:"Score not found"})
    }
    if(score.username!==username){
      return res.status(403).json({error: "not allowed"})
    }
    await Score.findByIdAndDelete(req.params.id)
    res.json({message:"Deleted"})
  }
  catch(err){
    res.status(500).json({error:"Delete failed"})
  }
})



app.listen(5000, ()=>{
    console.log("server running on port: 5000   ")
})