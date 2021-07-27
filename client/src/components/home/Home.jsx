import React, { useEffect, useState } from 'react';
import { HomeCont, ContMovies, Movies, Billboard, ComingSoon, Labels, Linked, TestimonialCards } from './Styles';
import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from "../../actions/movies";
import { getVisiblesFeedbacks } from "../../actions/feedbacks";
import Footer from '../footer/Footer'
import Slider from '../comboSlider/slider';
import { isAdmin } from '../../actions/users';
import Skeleton from './HomeSkeletons'
import {
    StyledAside,
} from "../billboard/Billboard-styles";
import {
    StyledFirstAside,
} from "../billboard/Aside-styles";
import TestimonialCard from 'material-testimonial-card';

/* export default function Home() {
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movieList);
    const visiblesFeedbacks = useSelector(state => state.visiblesFeedbacks);
    const releaseList = useSelector(state => state.movieList);
    let [admin, setAdmin] = useState(null);
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(i); */
    
import CouponSlider from '../promotionSlider/Slider'


export default function Home() {
    const dispatch = useDispatch();
    const visiblesFeedbacks = useSelector(state => state.visiblesFeedbacks);
    let movieList = useSelector(state => state.movieList);
    const releaseList = useSelector(state => state.movieList);
    let [admin, setAdmin] = useState(null);
    let arr = [];
  for (let i = 0; i < 7; i++) {
    arr.push(i);
  }

    useEffect(() => {
        dispatch(getMovieList())
        dispatch(getVisiblesFeedbacks())
    }, [dispatch]);

    // Efecto para saber si el user es admin al montar el componente
    useEffect(() => {
        let verifyAdmin = async () => {
            const authorized = await isAdmin();
            setAdmin(authorized)
        }
        verifyAdmin();
    }, [])

    //order Rating
    const [order] = useState(null);

    movieList = movieList.sort(function (a, b) {
        if (a.IMDb > b.IMDb) {
        return order === "Ascending" ? 1 : order === "Descending" ? -1 : 0;
        }
        if (a.IMDb < b.IMDb) {
        return order === "Ascending" ? -1 : order === "Descending" ? 1 : 0;
        }
        return 0;
    })

    return (
        <HomeCont>
            <ContMovies>
                <Movies>
                    <Linked to='/billboard'>
                        <Labels>Billboard</Labels>
                    </Linked>
                    <Billboard>
                        {movieList.length > 0 ? movieList.filter(movie => movie.onBillboard).map(movie => <MovieCard isAdmin={admin} props={movie} id={movie._id} />) : arr.map(el => <Skeleton />)}
                    </Billboard>
                    {/* Feedbacks */}
                    <TestimonialCards>
                    {
                        visiblesFeedbacks?.map(f => (
                            <TestimonialCard
                            className='testimonialcard'
                            name={f.author}
                            content={f.text}
                            />
                        ))
                    }
                    </TestimonialCards>
                    {/* Fin Feedbacks */}
                    <Linked to='/comingsoon'>
                        <Labels>Coming Soon</Labels>
                    </Linked>
                    <ComingSoon>
                        {releaseList.length > 0 ? movieList.filter(movie => !movie.onBillboard).map(movie => <MovieCard isAdmin={admin} props={movie} id={movie._id} />) : arr.map(el => <Skeleton />)}
                    </ComingSoon>
                </Movies>
                <StyledAside>
                    <StyledFirstAside><Slider /></StyledFirstAside>
                    <StyledFirstAside>
                        <CouponSlider/>
                    </StyledFirstAside>
                </StyledAside>
            </ContMovies>
            <Footer moviesLength={1} />
        </HomeCont>
    )
}