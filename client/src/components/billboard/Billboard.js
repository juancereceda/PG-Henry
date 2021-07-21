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

  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getGenres());
  }, [dispatch]);

  function HandleIndex(caller) {
    const option = caller.target.value;
    switch (option) {
      case "→":
        if (
          index <
          Math.ceil(
            filtredMovies.filter((movie) => movie.onBillboard).length /
              moviesPerPage
          ) -
            1
        ) {
          setIndex(index + 1);
        }
        break;
      case "←":
        if (index > 0) {
          setIndex(index - 1);
        }
        break;
      default:
        return null;
    }
  }

  return (
    <StyledBillboard>
      <StyledHeader>
        <GenreFilter setIndex={setIndex} />
        <StyledTitle>Billboard Movies</StyledTitle>
        <StyledPagination>
          <StyledIndexChanger
            type="button"
            value="←"
            onClick={HandleIndex}
            className="plus"
          />
          <p>{index + 1}</p>
          <StyledIndexChanger
            type="button"
            value="→"
            onClick={HandleIndex}
            className="minus"
          />
        </StyledPagination>
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
      <Footer
        moviesLength={filtredMovies.filter((movie) => movie.onBillboard).length}
      />
    </StyledBillboard>
  );
}
