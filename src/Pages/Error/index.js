import { Link } from "react-router-dom"
import './style.css'

function Error(){
    return(
        <div className="error">
            <h1>404</h1>
            <h2>Ops, something got wrong</h2><br/>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Error;