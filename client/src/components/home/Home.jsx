import React, { useEffect, useState } from 'react';
import { HomeCont, ContMovies, Movies, Billboard, ComingSoon, Stores, Labels, MerchCard, PubliCard } from './Styles';
import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from "../../actions/movies";
import Footer from '../footer/Footer'
import Slider from '../comboSlider/slider';
import { isAdmin } from '../../actions/users';

export default function Home() {
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movieList);
    const releaseList = useSelector(state => state.movieList);
    let [admin, setAdmin] = useState(null);

    useEffect(() => {
        dispatch(getMovieList())
    }, [dispatch]);

    // Efecto para saber si el user es admin al montar el componente
    useEffect(() => {
        let verifyAdmin = async () => {
            const authorized = await isAdmin();
            setAdmin(authorized)
        }
        verifyAdmin();
    }, [])

    return (
        <HomeCont>
            <ContMovies>
                <Movies>
                    <Labels>Billboard</Labels>
                    <Billboard>
                        {movieList.length > 0 ? movieList.filter(movie => movie.onBillboard).map(movie => <MovieCard isAdmin={admin} props={movie} id={movie._id} />) : <h2>Loading movies...</h2>}
                    </Billboard>
                    <Labels>Coming Soon</Labels>
                    <ComingSoon>
                        {releaseList.length > 0 ? movieList.filter(movie => !movie.onBillboard).map(movie => <MovieCard isAdmin={admin} props={movie} id={movie._id} />) : <h2>Loading movies...</h2>}
                    </ComingSoon>
                </Movies>
                <Stores>
                    <MerchCard><Slider /></MerchCard>
                    <PubliCard>
                        Publicity
                    </PubliCard>
                </Stores>
            </ContMovies>
            <Footer />
        </HomeCont>
    )
}