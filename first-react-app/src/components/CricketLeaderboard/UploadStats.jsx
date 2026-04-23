import {Link} from "react-router-dom";
import { useState } from "react";

function UploadStats() {
  const [submittedRole, setSubmittedRole] = useState("");
  const [formData, setFormData] = useState({
  name: "",
  runs: "",
  location: "",
  role: "",
  matchLevel: "",
  tournamentName: "",
  ballType: "",
  date: "",
  bowlertype:"",
  wickets:""
});
const handleChange = (e)=>{
  const {name,value}=e.target
  setFormData({
    ...formData,
    [name]:value
  });
}


    const handleSubmit = async () => {
      const username= localStorage.getItem("username")
      if(!username){
        alert("Please login first")
        return;
      }
        if (!formData.name || !formData.role) {
        alert("Name and role are required");
        return;
      }

      if (formData.role === "batter" && !formData.runs) {
        alert("Enter runs");
        return;
      }

      if (formData.role === "bowler" && !formData.wickets) {
        alert("Enter wickets");
        return;
      }
      try{
      const res = await fetch(`${import.meta.env.VITE_API_URL}/scores`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...formData, 
            username,
            runs:formData.runs ? Number(formData.runs) : undefined
          , wickets:formData.wickets ? Number(formData.wickets) : undefined
        }), 
      });
      const data = await res.json()
      if (!res.ok) {
        alert(data.error || "Failed to submit");
        return;
      }

      setSubmittedRole(formData.role);

      setFormData({
      name: "",
      runs: "",
      wickets: "",
      location: "",
      role: "",
      matchLevel: "",
      tournamentName: "",
      ballType: "",
      date: "",
      bowlertype: ""
      })
    }
  catch(err){
    console.log(err)
    alert("Something went wrong")
  }
}


  return (
    <div className="container">
      <h2>Add Score</h2>

      <input name="name" value={formData.name} placeholder="name" onChange={handleChange}/>

            {/* Role Selection */}
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="batter">Batter</option>
        <option value="bowler">Bowler</option>
      </select>

      {/* Conditional Inputs */}
      {formData.role === "batter" && (
        <input
          name="runs"
          value={formData.runs}
          placeholder="runs"
          onChange={handleChange} 
        />
      )}

      {formData.role === "bowler" && (
        <>
          <input
            name="wickets"
            value={formData.wickets}
            placeholder="wickets"
            onChange={handleChange}
          />

          <input
            name="bowlertype"
            value={formData.bowlertype}
            placeholder="bowler type (fast/spin)"
            onChange={handleChange}
          />
        </>
      )}

      {/* Common Fields */}
      <input
        name="location"
        value={formData.location}
        placeholder="location"
        onChange={handleChange}
      />

      <input
        name="matchLevel"
        value={formData.matchLevel}
        placeholder="match level (gully/school/club)"
        onChange={handleChange}
      />

      <input
        name="tournamentName"
        value={formData.tournamentName}
        placeholder="tournament name"
        onChange={handleChange}
      />

      <input
        name="ballType"
        value={formData.ballType}
        placeholder="ball type (tennis/leather)"
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
       

 {submittedRole && (
  <Link to={`/leaderboard/${submittedRole}`}>
    <button>Go to Leaderboard</button>
  </Link>
)}

      
    </div>
  );
}

export default UploadStats;