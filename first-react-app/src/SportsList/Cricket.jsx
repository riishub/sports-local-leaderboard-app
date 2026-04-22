import {Link} from "react-router-dom"
import {useState, useEffect} from "react"


function Cricket(){
    const username = localStorage.getItem("username");
    return(
        
        <div>
            <h3>Logged in as: {username || "Guest"}</h3>
            
            <div>
                <Link to="/uploadstats">
                    <button>Upload Stats</button>
                </Link>
            </div>
            <div>
                <Link to="/ai">
                    <button>ai analyzer</button>
                </Link>
            </div>
        </div>
    )
}

export default Cricket;