import React, {useEffect} from 'react';
import { HomeCont, ContMovies, Movies, Billboard, ComingSoon, Stores, Labels } from './Styles';
import MovieCard from './Movies';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from "../../actions/movies";

export default function Home() {
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movieList);
    const releaseList = useSelector(state => state.movieList);

    useEffect(() => {
        dispatch(getMovieList())
    });

    useEffect(() => {
        dispatch(getMovieList())
    });

    return (
        <HomeCont>
            <ContMovies>
                <Movies>
                    <Labels>Billboard:</Labels>
                    <Billboard>
                        {movieList.length > 0 ? movieList.map(movie => <MovieCard props={movie} key={movie._id} />) : <h2>It seems there are no movies on schedule!</h2>}
                    </Billboard>
                    <Labels>Coming Soon:</Labels>
                    <ComingSoon>
                        {releaseList.length > 0 ? movieList.map(movie => <MovieCard props={movie} key={movie._id} />) : <h2>It seems there are no premiers announced!</h2>}
                    </ComingSoon>
                </Movies>
                <Stores>
                    <div className="Combos" />
                    <div className="Merch" />
                </Stores>
            </ContMovies>
            <div className="Footer"></div>
        </HomeCont>
    )
}