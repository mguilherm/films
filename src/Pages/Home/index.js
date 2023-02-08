import api from '../../Services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Home(){

    const [films, setFilms] = useState([]);

    useEffect(() => {
        async function loadFilms(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key : 'd72ec6b99b21fdf730adac7799b7005e',
                    language: 'pt-BR',
                }
            })
            setFilms(response.data.results)
        } 

        loadFilms();
    }, [])



    return(
        <div className='films-wrapper'>
            {films.map((film)=>{
                return(
                    <div key={film.id} className='film-list'>
                        {/* <h1 className='film-title'>{film.title}</h1> */}
                        <img className='film-img' src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
                        <Link to={`/films/${film.id}`}>Acessar</Link>
                    </div>
                )
            })}
            
        </div>

    )
}

export default Home;