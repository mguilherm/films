import api from '../../Services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import './style.css'

function Home(){

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilms(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key : 'd72ec6b99b21fdf730adac7799b7005e',
                    language: 'pt-BR',
                }
            })
            setFilms(response.data.results)
            setLoading(false)
        } 

        loadFilms();
    }, [])

    if (loading) {
        return(
            <Loading/>
        );
    }

    return(
        <div className='films-wrapper'>
            {films.map((film)=>{
                return(
                    <div key={film.id} className='film-list'>
                        <Link to={`/films/${film.id}`}>
                        <img className='film-img' src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
                        <button className='flex-center'>Acessar</button> 
                        </Link>
                    </div>
                )
            })}
            
        </div>

    )
}

export default Home;