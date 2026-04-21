import {Link} from "react-router-dom"

function HomePage(){
   
    return(
        <div>
            <h1>Cricket Login</h1>
            
             <div>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
             <div>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
            <div>
                <Link to="/cricket">
                    <button>cricket</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;