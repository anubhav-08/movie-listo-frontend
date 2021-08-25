import React from 'react';
import './Card.css'



const Card = (props) => {
    return (
        <div className='card'>
            <div className="card-image">
                <img src={props.movie_img} alt="movie" />
            </div>
            <div className="card-info">
                <div className="rating">
                    <h3>{props.rating}/10</h3>
                </div>
                <div className="title">
                    <h2>{props.movie_title}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card
