import { Link } from "react-router-dom"

function Error(){
    return(
        <>
            <h1>Ops, parece que algo deu errado!</h1>
            <Link to='/'>Home</Link>
        </>

    )
}

export default Error;