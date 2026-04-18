import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function BowlingLeaderboard() {
  const [bowlingstats, setBowlingstats] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/scores")
      .then((res) => res.json())
      .then((data) => setBowlingstats(data));
  }, []);
  
  const onlyBowlers = bowlingstats.filter((s)=>s.role === "bowler")

  const filteredbowlingstats =
    filter === "All"
      ? onlyBowlers
      : onlyBowlers.filter((s) => s.location === filter);

  const sortedwickcount = [...filteredbowlingstats].sort(
    (a, b) => (b.wickets || 0)- (a.wickets || 0)
  );

  return (
    <div className="container">
      <h2>Bowling Leaderboard</h2>

      {/* FILTER BUTTON */}
      <button onClick={() => setShowFilter(!showFilter)}>
        Filter    : {filter}
      </button>

      {/* DROPDOWN */}
      {showFilter && (
        <div>
          <button onClick={() => { setFilter("All"); setShowFilter(false); }}>
            All
          </button>

          <button onClick={() => { setFilter("India"); setShowFilter(false); }}>
            India
          </button>

          <button onClick={() => { setFilter("England"); setShowFilter(false); }}>
            England
          </button>

          <button onClick={() => { setFilter("Australia"); setShowFilter(false); }}>
            Australia
          </button>
        </div>
      )}

      <hr />

      {/* LEADERBOARD */}
      {sortedwickcount.map((s, i) => (
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
          <span>{s.wickets}</span>
        </div>
      ))}
      <Link to="/uploadstats">
      <button>Upload stats</button>
      </Link>
    </div>
  );
}

export default BowlingLeaderboard;