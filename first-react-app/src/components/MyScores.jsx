import {useNavigate} from "react-router-dom";
import { useState,useEffect } from "react"

function MyScores(){
    const [myscores,setMyscores]=useState([])
    const username = localStorage.getItem("username")
    const navigate = useNavigate()
    useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/scores?username=${username}`)
      .then((res) => res.json())
      .then((data) => setMyscores(data));
  }, [username]);

    const handleEdit=async(id)=>{
        navigate(`/edit/${id}`)
    }


    const handleDelete=async(id)=>{
        const res = await fetch(`${import.meta.env.VITE_API_URL}/scores/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
        const data=await res.json()
        alert(data.message||data.error)
        if(res.ok){
            setMyscores((prev)=>prev.filter((s)=>s._id!==id))  
        }
    }

    

    return(
        <div>
            <h2>My scores</h2>
            
            {myscores.map((s)=>(
            <div key={s.id}>
                <p>{s.name}</p>
                <p>{s.date}</p>
                <p>{s.role==="bowler"?s.wickets:s.runs}</p>

                <button onClick={()=>handleEdit(s._id)}>Edit</button>
                <button onClick={()=>handleDelete(s._id)}>Delete</button>
            </div>
            ))}
        </div>
    )
}

export default MyScores