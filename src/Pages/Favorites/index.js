import { Link } from "react-router-dom";
import Card from "../../components/Card";
import "./style.css";

function Favorites() {
  const favoriteMoviesList = JSON.parse(localStorage.getItem("@toWatch"));
  console.log(favoriteMoviesList);
  if (favoriteMoviesList !== null) {
    return (
      <div className="favorites">
        <h1>Favoritos</h1>
        <div className="favorites-list favorites-grid">
          {favoriteMoviesList.map((film) => {
            return (
                <Card film={film}/>
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
