import {Link} from "react-router-dom"

function HomePage(){
   
    return(
        <div>
            <h1>select sport</h1>
            
             
            <div>
                <Link to="/cricket">
                    <button>cricket</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;