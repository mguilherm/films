import './style.css';
import { Link, useParams } from 'react-router-dom';
import api from '../../Services/api'
import { useEffect, useState } from 'react';


function Films(){
    const { id } = useParams()
    const [filmSelected, setFilmSelected] = useState([])

    useEffect(()=>{
        async function getFilm(){
            await api.get(`/movie/${id}`,{
                params: {
                    api_key: 'd72ec6b99b21fdf730adac7799b7005e',
                    language: 'pt-BR'
                }
            })
            .then((response)=>{
                console.log(response.data)
                setFilmSelected(response.data)
            })
            .catch(()=>{
                <Link to='/'></Link>
            })
        }
        
        getFilm();
    }, [])

    return(
        <div className='filmsDetail'>
            <div className='filmsDetail-blackGradient'></div>
            <img className='filmsDetail-img' src={`https://image.tmdb.org/t/p/original/${filmSelected.backdrop_path}`} alt={filmSelected.title} />
            <div className="filmsDetail-description">
                <h1 className='filmsDetail-title'>{filmSelected.title}</h1>
                <span>{filmSelected.overview}</span>
            </div>
        </div>
    )
}

export default Films;