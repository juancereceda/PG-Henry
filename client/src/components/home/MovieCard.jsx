import React from 'react';
import {Movie} from './Styles';

export default function MovieCard ({props, isAdmin}) {
    const handleClick = (e, id) =>  {
        e.preventDefault();
        window.open(`http://localhost:3000/movies/${id}`)
    };

    const handleEdit = (id) => {
        const editConfirm = window.confirm(`Do you want edit ${props.title}?`)
        if (editConfirm) window.open(`http://localhost:3000/administration/${id}`);
    };

    return (
        <Movie src={props.poster} onAuxClick={() => isAdmin && handleEdit(props._id)} onClick={(e) => handleClick(e, props._id)} />
    )
};