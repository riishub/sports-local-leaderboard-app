import {Link} from "react-router-dom"

function HomePage(){
   
    return(
        <div>
            <h1>Select the sport</h1>
            <div>
                <Link to="/cricket">
                    <button>Cricket</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;