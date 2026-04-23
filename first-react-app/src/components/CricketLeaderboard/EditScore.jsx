import {Link, useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"

function EditScore(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [formdata, setformdata]=useState({    
        name: "",
        runs: "",
        wickets: "",
        location: "",
        role: "",
        matchLevel: "",
        tournamentName: "",
        ballType: "",
        date: "",
        bowlertype: "",
    })

    const username = localStorage.getItem("username")

    useEffect(()=>{
       fetch(`${process.env.REACT_APP_API_URL}/scores/${id}`)
      .then((res) => res.json())
      .then((data) => setformdata(data));
  }, [id]);

    const handleChange = (e)=>{
        const{name, value}=e.target
        setformdata((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit = async ()=>{
    if (!username) {
      alert("Please login first");
      return;
    }
    const res = await fetch(`${process.env.REACT_APP_API_URL}/scores/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            ...formdata,
            username,
            runs: formdata.runs ? Number(formdata.runs) : undefined,
            wickets: formdata.wickets ? Number(formdata.wickets) : undefined,
        })
    })
    const data = await res.json()
     if (res.ok) {
      alert("Updated successfully");
      navigate("/myscores");
    } else {
      alert(data.error);
    }
    }
    return (
    <div>
      <h2>Edit Score</h2>

      <input name="name" value={formdata.name} onChange={handleChange} />

      <select name="role" value={formdata.role} onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="batter">Batter</option>
        <option value="bowler">Bowler</option>
      </select>

      {formdata.role === "batter" && (
        <input
          name="runs"
          value={formdata.runs}
          onChange={handleChange}
        />
      )}

      {formdata.role === "bowler" && (
        <>
          <input
            name="wickets"
            value={formdata.wickets}
            onChange={handleChange}
          />
          <input
            name="bowlertype"
            value={formdata.bowlertype}
            onChange={handleChange}
          />
        </>
      )}

      <input name="location" value={formdata.location} onChange={handleChange} />
      <input name="matchLevel" value={formdata.matchLevel} onChange={handleChange} />
      <input name="tournamentName" value={formdata.tournamentName} onChange={handleChange} />
      <input name="ballType" value={formdata.ballType} onChange={handleChange} />
      <input type="date" name="date" value={formdata.date} onChange={handleChange} />

      <button onClick={handleSubmit}>Update</button>
    </div>
  );

}

export default EditScore