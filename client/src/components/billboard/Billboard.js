import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList, getGenres } from "../../actions/movies";
import { StyledTitle, StyledBillboard, StyledAside, StyledPagination, StyledIndexChanger } from "./Billboard-styles";
import {
  StyledFirstAside,
  StyledAsidePublicity,
} from "./Aside-styles";
import BillboardCard from "./BillboardCard";
import Footer from "../footer/Footer";
import  GenreFilter from "../GenreFilter/GenreFilter";
import Slider from '../comboSlider/slider'

export default function Billboard() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);

  const genre = useSelector(state => state.genre);
  const filtredMovies = movieList.filter(movie => movie.genre.includes(genre))

  const [index, setIndex] = useState(0);


  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getGenres())
  }, [dispatch]);

  function HandleIndex (caller) {
    const option = caller.target.value;
    switch (option){
      case "→":
        if(index < Math.ceil(filtredMovies.filter((movie) => movie.onBillboard).length/3) - 1){
          setIndex(index + 1)
        }
        break
      case "←":
        if(index > 0){
          setIndex(index - 1)
        }
        break
      default: return null;
    }
  }

  return (
    <StyledBillboard>
      <GenreFilter />
      <StyledTitle>Billboard Movies</StyledTitle>
      <StyledPagination>
        <StyledIndexChanger type="button" value="←" onClick={HandleIndex} className="plus"/>
        <p>{index+1}</p>
        <StyledIndexChanger type="button" value="→" onClick={HandleIndex} className="minus"/>
      </StyledPagination>
      <StyledAside>
        <StyledFirstAside>
          <Slider />
        </StyledFirstAside>
        <StyledAsidePublicity>Publicidad</StyledAsidePublicity>
      </StyledAside>
      {filtredMovies.length > 0 ? (
        filtredMovies
        .filter((movie) => movie.onBillboard)
        .slice(index * 3, index * 3 + 3)
        .map((movie) => <BillboardCard props={movie} key={movie._id} />)
        ) : (
          <h2>Error 404!</h2>
        )}
      <Footer marginTop="120%" />
    </StyledBillboard>
  );
}