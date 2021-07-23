import React, { useEffect, useState } from 'react';
import { HomeCont, ContMovies, Movies, Billboard, ComingSoon, Labels, DiscountOffer, Linked } from './Styles';
import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from "../../actions/movies";
import Footer from '../footer/Footer'
import Slider from '../comboSlider/slider';
import { isAdmin } from '../../actions/users';
import Skeleton from './HomeSkeletons'
import {
    StyledAside,
  } from "../billboard/Billboard-styles";
  import {
    StyledFirstAside,
    StyledAsidePublicity,
  } from "../billboard/Aside-styles";
import { getVisiblesFeedbacks } from '../../actions/feedbacks';


export default function Home() {
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movieList);
    const visiblesFeedbacks = useSelector(state => state.visiblesFeedbacks);
    const releaseList = useSelector(state => state.movieList);
    let [admin, setAdmin] = useState(null);
    let arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(i);
  }

    useEffect(() => {
        dispatch(getMovieList());
        dispatch(getVisiblesFeedbacks());

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
            <DiscountOffer>
                <h1>Martes y Miercoles: ¡Oferta especial! 30% OFF en tickets para peliculas.</h1>
            </DiscountOffer>
            <ContMovies>
                <Movies>
                    <Linked to='/billboard'>
                        <Labels>Billboard</Labels>
                    </Linked>
                    <Billboard>
                        {movieList.length > 0 ? movieList.filter(movie => movie.onBillboard).map(movie => <MovieCard isAdmin={admin} props={movie} id={movie._id} />) : arr.map(el =>  <Skeleton/>)}
                    </Billboard>
                    {/* Feedbacks */}
                    {visiblesFeedbacks?.map(f => (
                        <div className="feedback">
                            <span>{f.text}</span>
                            <h4>{f.author}</h4>
                        </div>
                    ))}
                    {/* Fin Feedbacks */}
                    <Linked to='/comingsoon'>
                        <Labels>Coming Soon</Labels>                        
                    </Linked>
                    <ComingSoon>
                        {releaseList.length > 0 ? movieList.filter(movie => !movie.onBillboard).map(movie => <MovieCard isAdmin={admin} props={movie} id={movie._id} />) : arr.map(el =>  <Skeleton/>)}
                    </ComingSoon>
                </Movies>
                <StyledAside>
                    <StyledFirstAside><Slider /></StyledFirstAside>
                    <StyledAsidePublicity>
                        Publicity
                    </StyledAsidePublicity>
                </StyledAside>
            </ContMovies>
            <Footer moviesLength={1}/>
        </HomeCont>
    )
}