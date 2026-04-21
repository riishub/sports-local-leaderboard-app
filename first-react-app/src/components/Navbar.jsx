import {Link,useNavigate} from "react-router-dom"

function Navbar(){
    const username = localStorage.getItem("username")
    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem("username")
        navigate("/")
    }
    return(
        <div style={{display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#3a363b",
        color: "white"}}>
        <div>
            {!username?(
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
            <span style={{ marginRight: "10px" }}>
              {username}
            </span>
            <button onClick={handleLogout}>Logout</button>
          </>
            )}
        </div>
        </div>
        
    )
}

export default Navbar