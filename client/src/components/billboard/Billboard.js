import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList, getGenres } from "../../actions/movies";
import {
  StyledTitle,
  StyledBillboard,
  StyledAside,
  StyledPagination,
  StyledIndexChanger,
  StyledHeader,
} from "./Billboard-styles";
import { StyledFirstAside, StyledAsidePublicity } from "./Aside-styles";
import BillboardCard from "./BillboardCard";
import Footer from "../footer/Footer";
import GenreFilter from "../GenreFilter/GenreFilter";
import Slider from "../comboSlider/slider";
import BillboardSkeleton from "./BillboardSkeletons";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Billboard() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const genre = useSelector((state) => state.genre);
  const filtredMovies = movieList.filter((movie) =>
    movie.genre.includes(genre)
  );
  const moviesPerPage = 3;
  let skeletons = [];
  for (let i = 0; i < moviesPerPage; i++) {
    skeletons.push(i);
  }

  const [index, setIndex] = useState(0);
  const numMoviesOnBill = filtredMovies.filter((movie) => movie.onBillboard).length
  
  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getGenres());
  }, [dispatch]);

  function HandleIndex(caller) {
    const option = caller.target.value;
    option ===  "→" ?
      index < Math.ceil(numMoviesOnBill / moviesPerPage) - 1 && 
        setIndex(index + 1)      
    :
    option === "←" &&
        index > 0 &&
          setIndex(index - 1) 
  }

  return (
    <StyledBillboard>
      <StyledHeader>
        <GenreFilter setIndex={setIndex} />
        <StyledTitle>Billboard Movies</StyledTitle>        
      </StyledHeader>
      <StyledAside>
        <StyledFirstAside>
          <Slider />
        </StyledFirstAside>
        <StyledAsidePublicity>Publicidad</StyledAsidePublicity>
      </StyledAside>
      {filtredMovies.length > 0
        ? filtredMovies
            .filter((movie) => movie.onBillboard)
            .slice(index * moviesPerPage, index * moviesPerPage + moviesPerPage)
            .map((movie) => <BillboardCard props={movie} key={movie._id} />)
        : skeletons.map((el) => <BillboardSkeleton />)}
        <StyledPagination>
          {/* <StyledIndexChanger
            type="button"
            onClick={HandleIndex}
            className="plus"
          /> */}
          <StyledIndexChanger onClick={HandleIndex} className="plus" value="←">
            <FaAngleLeft />
          </StyledIndexChanger>
          <p>{index + 1}</p>
          {/* <StyledIndexChanger
            type="StyledIndexChanger"
            onClick={HandleIndex}
            className="minus"
          /> */}
          <StyledIndexChanger onClick={HandleIndex} className="minus" value="→">
            <FaAngleRight />
          </StyledIndexChanger>
          <span> Page {index + 1} / {Math.ceil(numMoviesOnBill / moviesPerPage)}</span>
        </StyledPagination>
      <Footer
        moviesLength={filtredMovies.filter((movie) => movie.onBillboard).length}
      />
    </StyledBillboard>
  );
}
