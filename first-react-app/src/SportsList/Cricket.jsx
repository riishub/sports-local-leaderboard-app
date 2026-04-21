import {Link} from "react-router-dom"
import {useState, useEffect} from "react"


function Cricket(){
    const username = localStorage.getItem("username");
    return(
        
        <div>
            <h3>Logged in as: {username || "Guest"}</h3>
            <h1>cricket leaderboard</h1>
            <div>
                <Link to="/leaderboard/batter">
                    <button>Cricket batting leaderboard</button>
                </Link>
            </div>
            <div>
                <Link to="/leaderboard/bowler">
                    <button>Cricket bowling leaderboard</button>
                </Link>
            </div>
            <div>
                <Link to="/uploadstats">
                    <button>Upload Stats</button>
                </Link>
            </div>
        </div>
    )
}

export default Cricket;