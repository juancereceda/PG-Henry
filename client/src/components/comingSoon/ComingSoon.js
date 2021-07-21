import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../../actions/movies";
import { StyledBillboard, StyledAside } from "../billboard/Billboard-styles";
import {
  StyledFirstAside,
  StyledAsidePublicity,
} from "../billboard/Aside-styles";
import ComingSoonCard from "./comingSoonCard/ComingSoonCard";
import Footer from "../footer/Footer";
import Slider from '../comboSlider/slider'


export default function ComingSoon() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);

  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  return (
    <StyledBillboard>
      {/* <StyledTitle>Coming Soon</StyledTitle> */}
      <StyledAside>
        <StyledFirstAside>
          <Slider />
        </StyledFirstAside>
        <StyledAsidePublicity>Publicidad</StyledAsidePublicity>
      </StyledAside>
        {movieList 
            .filter((movie) => !movie.onBillboard)
            .map((movie) =><ComingSoonCard props={movie} key={movie._id} />)}
      <Footer marginTop="120%" />
    </StyledBillboard>
  );
}
