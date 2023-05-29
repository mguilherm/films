function Button(props){
    let data = props.data;
    function addToFavorite(){
        const favoriteList = localStorage.getItem('@toWatch');
        let favoriteMovies = JSON.parse(favoriteList) || [];
        console.log(favoriteMovies)

        const hasFilm = favoriteMovies.some((filmsSalved)=> filmsSalved.id === data.id)

        if (hasFilm){
            alert('Filme já está na Lista! ⚠️')
            return;
        } else {
            favoriteMovies.push(data);
            localStorage.setItem('@toWatch', JSON.stringify(favoriteMovies));
            alert('Filme adicionado com sucesso ✅')
        }

    }
    return(
        <button className='filmsDetail-btn text-highlighted'>
            <a 
                href={props.btnLink} 
                target="_blank" 
                rel="noreferrer" 
                onClick={props.toFavorite ? addToFavorite : null}>
                    {props.btnName}
            </a>
        </button>
    )
}

export default Button;