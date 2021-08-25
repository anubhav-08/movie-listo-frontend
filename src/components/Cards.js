import React, {useEffect, useState} from 'react';
import Card from './Card';
import './Cards.css';

const Cards = () => {

    const [data, setdata] = useState([]);
    const getMoviesData = async ()=>{
        const res = await fetch('http://127.0.0.1:8000/api/list/movies');
        const adata = await res.json();
        setdata(adata);
    }

    useEffect(()=>{
        getMoviesData();
    }, []);
    
    return (
        <div className='cards'>
           {
               data.map((curr, idx)=>{
                   return (
                        <Card key={idx} movie_title={curr.name} rating={curr.rating} movie_img = {curr.image_url}/>
                   )
               })
           }
        </div>
    )
}

export default Cards
