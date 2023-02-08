import './style.css';
import { useParams } from 'react-router-dom';
import api from '../../Services/api'
import { useEffect, useState } from 'react';


function Films(){
    const { id } = useParams()
    const [filmSelected, setFilmSelected] = useState([])

    useEffect(()=>{
        async function getFilm(){
            const response = await api.get(`/movie/${id}`,{
                params: {
                    api_key: 'd72ec6b99b21fdf730adac7799b7005e',
                    language: 'pt-BR'
                }
            })
            setFilmSelected(response.data)
            console.log(response.data)
        }
            getFilm();
    }, [])

    return(
        <>
            <h1 className='films'>{filmSelected.title}</h1>
            <span>{filmSelected.overview}</span>
        </>
    )
}

export default Films