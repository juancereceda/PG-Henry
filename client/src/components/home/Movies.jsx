import React from 'react';
// import {Link} from 'react-router-dom';
import {Movie, MovieCont} from './Styles';

export default function MovieCard ({props}) {

    function auxiliar (e, id) {
        e.preventDefault();
        window.open(`http://localhost:3000/movies/${id}`)
    };

    return (
        // <MovieCont to={`/movies/${props._id}`} >
            <Movie src={props.poster} onClick={(e) => auxiliar(e, props._id)} />
        // </MovieCont>
    )
};