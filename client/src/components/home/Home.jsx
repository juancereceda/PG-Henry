import React, { useEffect, useState } from 'react';
import { HomeCont, ContMovies, Movies, Billboard, ComingSoon, Stores, Labels, MerchCard, PubliCard, Icon, Linked } from './Styles';
import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from "../../actions/movies";
import Footer from '../footer/Footer'
import Slider from '../comboSlider/slider';
import { isAdmin } from '../../actions/users';
import Skeleton from './HomeSkeletons'

export default function Home() {
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movieList);
    const releaseList = useSelector(state => state.movieList);
    let [admin, setAdmin] = useState(null);
    let arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(i);
  }

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
                        {movieList.length > 0 ? movieList.filter(movie => movie.onBillboard).map(movie => <MovieCard isAdmin={admin} props={movie} id={movie._id} />) : arr.map(el =>  <Skeleton/>)}
                    </Billboard>
                    <Labels>Coming Soon</Labels>
                    <ComingSoon>
                        {releaseList.length > 0 ? movieList.filter(movie => !movie.onBillboard).map(movie => <MovieCard isAdmin={admin} props={movie} id={movie._id} />) : arr.map(el =>  <Skeleton/>)}
                    </ComingSoon>
                </Movies>
                <Stores>
                    <MerchCard><Slider /></MerchCard>
                    <MerchCard><Linked to='/products'><Icon src="https://image.flaticon.com/icons/png/512/86/86511.png" /></Linked></MerchCard>
                    <PubliCard>
                        Publicity
                    </PubliCard>
                </Stores>
            </ContMovies>
            <Footer />
        </HomeCont>
    )
}