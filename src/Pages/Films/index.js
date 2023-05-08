import './style.css';
import { Link, useParams } from 'react-router-dom';
import api from '../../Services/api';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';


function Films(){
    const { id } = useParams()
    const [filmSelected, setFilmSelected] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function getFilm(){
            await api.get(`/movie/${id}`,{
                params: {
                    api_key: 'd72ec6b99b21fdf730adac7799b7005e',
                    language: 'pt-BR'
                }
            })
            .then((response)=>{
                setFilmSelected(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log('film not found')
            })
        }
        getFilm();

        return ()=>{
            console.log('unmonted component')
        }
    }, [])

    if(loading){
        return(
            <Loading/>
        )
    }

    return(
        <div className='filmsDetail'>
            <div className='filmsDetail-blackGradient'></div>
            <img className='filmsDetail-img' src={`https://image.tmdb.org/t/p/original/${filmSelected.backdrop_path}`} alt={filmSelected.title} />
            <div className="filmsDetail-description">
                <h1 className='filmsDetail-title'>{filmSelected.title}</h1>
                <span>{filmSelected.overview}</span>
                <div>
                    <p className='text-highlighted'>Nota: {Number(filmSelected.vote_average).toFixed(1)}</p>
                    <div className='filmsDetail-buttons'>
                        <Button btnName='Trailer'/>
                        <Button btnName='+ Favoritos'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Films;