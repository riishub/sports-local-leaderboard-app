import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Leaderboard() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  const {role} = useParams(); 

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/scores?role=${role}&location=${filter}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [role,filter]);


  return (
    <div className="container">
      <h2>{role==="bowler"?"Bowling":"Batting"} Leaderboard</h2>

      {/* FILTER BUTTON */}
      <button onClick={() => setShowFilter(!showFilter)}>
        Filter    : {filter}
      </button>

      {/* DROPDOWN */}
      {showFilter && (
        <div>
          {["All","India","Australia","England"].map((loc)=>(
            <button key={loc}
              onClick={() => {
                setFilter(loc);
                setShowFilter(false);
                }}
                >
                {loc}
                </button>
          ))}
        </div>
      )}

      <hr />

      {/* LEADERBOARD */}
      {data.map((s, i) => (
        <div
          key={i}
          style={{
          padding: "10px",
          margin: "8px 0",
          background: "#07371d",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between"
              }}
        >
          <span>{i + 1}. {s.name}</span>
          <span>
            {role === "bowler" ? s.wickets : s.runs}
          </span>
        </div>
      ))}
      <Link to="/uploadstats">
      <button>Upload stats</button>
      </Link>
       <Link to="/myscores">
      <button>My scores</button>
      </Link>
    </div>
  );
}

export default Leaderboard;