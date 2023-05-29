import { Link } from "react-router-dom";

function Card(props) {
  let film = props.film
  if (film === undefined){
    film = props
  }

  return (
    <div key={film.id} className="film-list">
      <Link to={`/films/${film.id}`}>
        <img
          className="film-img"
          src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
          alt={film.title}
        />
        <button className="flex-center">Acessar</button>
      </Link>
    </div>
  );
}
 export default Card;