import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";
import "./style.css";
import { useEffect, useState } from "react";


function Favorites() {
  const [films, setFilms] = useState([])
  useEffect(()=>{
    const favoriteMoviesList = JSON.parse(localStorage.getItem('@toWatch'));
    setFilms(favoriteMoviesList || [])

  }, [])

  function removeFavorite(film){
      let filteredMoviesList = films.filter((item)=>{
        return (film !== item.id)
      })

    setFilms(filteredMoviesList);
    localStorage.setItem('@toWatch', JSON.stringify(filteredMoviesList));
  }

  

  if (films.length !== 0) {
    return (
      <div className="favorites">
        <h1>Favoritos</h1>
        <div className="favorites-list favorites-grid">
          {films.map((film) => {
            return (
              <div id="favorite-wrapper" key={film.id}>
                <Card film={film} />
                <div id="remove-btn" onClick={()=> removeFavorite(film.id)}>
                  <Button btnName="❌" data={film}></Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-wrapper">
        <p>Você ainda não tem nenhum filme nos favoritos! 🥺</p>
        <span className="favorites-link">
          <Link to="/">Clique aqui e comece sua seleção.</Link>
        </span>
      </div>
    );
  }
}

export default Favorites;

