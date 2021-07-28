import React, { useEffect, useState } from 'react';
import { HomeCont, ContMovies, Movies, Billboard, ComingSoon, Labels, Linked, TestimonialCards, ContCar } from './Styles';
import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from "../../actions/movies";
import { getVisiblesFeedbacks } from "../../actions/feedbacks";
import Footer from '../footer/Footer'
import Slider from '../comboSlider/slider';
import { isAdmin } from '../../actions/users';
import Skeleton from './HomeSkeletons'
import {
    StyledAside, StyledBillboard
} from "../billboard/Billboard-styles";
import {
    StyledFirstAside,
} from "../billboard/Aside-styles";
import TestimonialCard from 'material-testimonial-card';
import Carousel from 'react-elastic-carousel'
import { ComingSoonContainer } from '../billboard/Billboard-styles';

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

    const breakPoints = [
        { width: 500, itemsToShow: 1},
        { width: 500, itemsToShow: 2},
        { width: 500, itemsToShow: 3},
        { width: 500, itemsToShow: 4},
        { width: 500, itemsToShow: 5},
        { width: 500, itemsToShow: 6},
    ]

    return (
        <ComingSoonContainer>
            <StyledBillboard>
                <StyledAside>
                    <StyledFirstAside>
                        <Slider />
                    </StyledFirstAside>
                    <StyledFirstAside>
                        <CouponSlider />
                    </StyledFirstAside>
                </StyledAside>
                <ContCar>
                <Linked to='/billboard'>
                    <Labels>Billboard</Labels>
                </Linked>
                <Carousel breakPoints={breakPoints}>
                    {movieList.length > 0 ? movieList.filter(movie => movie.onBillboard).map(movie => <MovieCard isAdmin={admin} props={movie} id={movie._id} />) : arr.map(el => <Skeleton />)}
                </Carousel>
                </ContCar>
                <ContCar>
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
                </ContCar>
                <ContCar>
                <Linked to='/comingsoon'>
                    <Labels>Coming Soon</Labels>
                </Linked>
                <Carousel breakPoints={breakPoints}>
                    {releaseList.length > 0 ? movieList.filter(movie => !movie.onBillboard).map(movie => <MovieCard isAdmin={admin} props={movie} id={movie._id} />) : arr.map(el => <Skeleton />)}
                </Carousel>
                </ContCar>
            <Footer moviesLength={1} />
        </StyledBillboard>
    </ComingSoonContainer>
    )
}