import api from '../../Services/api';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import Card from '../../components/Card';

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
        <div>
            <div className="favorites">
                <h1>DESTAQUES</h1>
            </div>
            <div className='films-wrapper'>
                {films.map((film)=>{
                    return(
                        <Card key={film.id} film={film}/>
                    )
                })}
            </div>

        </div>
    )
}

export default Home;