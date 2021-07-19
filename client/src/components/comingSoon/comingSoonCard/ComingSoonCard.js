import React from "react";
import {StyledCard} from './ComingSoonCard-styles';
import { Link } from 'react-router-dom';

export default function BillboardCard ({props}) {
    return(
        <StyledCard>
            <h2><Link to={`/movies/${props._id}`}>{props.title}</Link></h2>
            <Link to={`/movies/${props._id}`}><img src={props.poster} alt={`Poster of the movie "${props.title}"`}/></Link>
            <div>Premiere: <span>{props.date}</span></div>
            <div>Gender: <span>{props.genre}</span></div>
            <div>{props.rated}</div>
            <div>{props.runtime}</div>
        </StyledCard>
    );
}