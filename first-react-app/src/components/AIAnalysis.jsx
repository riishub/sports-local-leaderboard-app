import { useState } from "react";

function AIAnalysis() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (role) => {
    setLoading(true);

    const today = new Date().toISOString().split("T")[0];

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/ai/analyze?role=${role}&date=${today}`
    );

    const result = await res.json();
    setData(result);

    setLoading(false);
  };

  return (
    <div>
      <h2>AI Cricket Analyzer</h2>

      <button onClick={() => handleAnalyze("batter")}>
        Analyze Batters
      </button>

      <button onClick={() => handleAnalyze("bowler")}>
        Analyze Bowlers
      </button>

      {loading && <p>Analyzing...</p>}

      {data && (
        <div>
          <h3>AI Insight</h3>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {data.analysis}
          </pre>

          <h4>Top Players</h4>
          {data.players.map((p) => (
            <div key={p._id}>
              <p>{p.name}</p>
              <p>{p.role === "bowler" ? p.wickets : p.runs}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AIAnalysis;