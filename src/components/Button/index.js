function Button(props){

    return(
        <button className='filmsDetail-btn text-highlighted'>
            <a href={props.btnLink} target="_blank" rel="noreferrer">
                {props.btnName}
            </a>
        </button>
    )
}

export default Button;