import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  const isCricketPage = location.pathname.startsWith("/cricket") || location.pathname.startsWith("/leaderboard");
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#3a363b",
        color: "white",
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ display: "flex", gap: "10px" }}>
        {isCricketPage && (
            <>
            <Link to="/leaderboard/batter">
          <button>Batting Leaderboard</button>
        </Link>

        <Link to="/leaderboard/bowler">
          <button>Bowling Leaderboard</button>
        </Link>
            </>
        )}
        
      </div>

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {!username ? (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>

            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        ) : (
          <>
            <span>{username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;