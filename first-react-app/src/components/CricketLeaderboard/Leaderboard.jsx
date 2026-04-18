import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Leaderboard() {
  const [runs, setRuns] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/scores")
      .then((res) => res.json())
      .then((data) => setRuns(data));
  }, []);

  const filteredScores =
    filter === "All"
      ? runs
      : runs.filter((s) => s.location === filter);

  const sortedScores = [...filteredScores].sort(
    (a, b) => b.runs - a.runs
  );

  return (
    <div className="container">
      <h2>Leaderboard</h2>

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
      {sortedScores.map((s, i) => (
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
          <span>{s.runs}</span>
        </div>
      ))}
      <Link to="/uploadstats">
      <button>Upload stats</button>
      </Link>
    </div>
  );
}

export default Leaderboard;