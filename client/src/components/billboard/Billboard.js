import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList, getGenres } from "../../actions/movies";
import {
  StyledTitle,
  StyledBillboard,
  StyledAside,
  StyledPagination,
  StyledIndexChanger,
} from "./Billboard-styles";
import {
  StyledFirstAside,
  StyledSecondAside,
  StyledAsidePublicity,
} from "./Aside-styles";
import BillboardCard from "./BillboardCard";
import { Link } from "react-router-dom";
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
      <GenreFilter />
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
      <StyledAside>
        <StyledFirstAside>
          <Slider />
        </StyledFirstAside>
        <StyledSecondAside>
          <Link>
            <p>Memories</p>
            <img
              src="https://image.flaticon.com/icons/png/512/86/86511.png"
              alt=""
            />
          </Link>
        </StyledSecondAside>
        <StyledAsidePublicity>Publicidad</StyledAsidePublicity>
      </StyledAside>
      {filtredMovies.length > 0
        ? filtredMovies
            .filter((movie) => movie.onBillboard)
            .slice(index * moviesPerPage, index * moviesPerPage + moviesPerPage)
            .map((movie) => <BillboardCard props={movie} key={movie._id} />)
        : skeletons.map((el) => <BillboardSkeleton />)}
      <Footer marginTop="120%" />
    </StyledBillboard>
  );
}
