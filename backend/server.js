import express from "express";
import cors from "cors";

const app=express();

app.use(cors())
app.use(express.json())

app.get("/test", (req,res) => {
    res.json({message:"backend is working"})
})

let scores = [];
app.post("/scores", (req,res) =>{
    const {name,score,location}=req.body; 
    const newScore={
        name,
        score: Number(score),
        location,
    }
    scores.push(newScore)
    res.json({success:true , data: req.body})
})
app.get("/scores", (req, res) => {
    const sorted=[...scores].sort((a,b)=>b.score-a.score);
    res.json(sorted);
});

app.listen(5000, ()=>{
    console.log("server running on port: 5000   ")
})