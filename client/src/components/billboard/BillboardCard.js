import React from "react";
import {StyledCard} from './BillboardCard-styles';
import { Link } from 'react-router-dom';

export default function BillboardCard ({props}) {
    return(
        <StyledCard>
            <h2><Link to={`/movies/${props._id}`}>{props.title}</Link></h2>
            <Link to={`/movies/${props._id}`}><img src={props.poster} alt={`Poster of the movie "${props.title}"`}/></Link>
            <p>{props.description}</p>
            <h4>Gender: <span>{props.genre}</span></h4>
            <h5>Cast: <span>{props.cast}</span></h5>
            <h3>IMDb Rating: <span>{props.IMDb}</span></h3>
        </StyledCard>
    );
}