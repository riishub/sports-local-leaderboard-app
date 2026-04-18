import {Link} from "react-router-dom"
import {useState, useEffect} from "react"
import Leaderboard from "../components/CricketLeaderboard/Leaderboard"
import UploadStats from "../components/CricketLeaderboard/UploadStats"

function Cricket(){
    return(
        
        <div>
            <h1>cricket leaderboard</h1>
            <div>
                <Link to="/cricleaderboard">
                    <button>Cricket batting leaderboard</button>
                </Link>
            </div>
            <div>
                <Link to="/bowlingleaderboard">
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