import {Link} from "react-router-dom";
import { useState } from "react";

function AddScore() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [location, setLocation]= useState("");

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, score:Number(score) ,location}),
    });

    setName("");
    setScore("");
    setLocation("");
  };

  return (
    <div className="container">
      <h2>Add Score</h2>
      <input value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input value={score} placeholder="score" onChange={(e) => setScore(e.target.value)} />
      <input value={location} placeholder="location" onChange={(e)=> setLocation(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/">Leaderboard</Link>
    </div>
  );
}

export default AddScore;