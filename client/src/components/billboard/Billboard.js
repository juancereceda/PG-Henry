import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList, getGenres } from "../../actions/movies";
import {
  StyledTitle,
  StyledBillboard,
  StyledAside,
  StyledPagination,
  StyledIndexChanger,
  Btn,
} from "./Billboard-styles";
import {
  StyledFirstAside,
  StyledAsidePublicity,
} from "./Aside-styles";
import BillboardCard from "./BillboardCard";
import Footer from "../footer/Footer";
import GenreFilter from "../GenreFilter/GenreFilter";
import Slider from "../comboSlider/slider";
import BillboardSkeleton from "./BillboardSkeletons";
import { BiSortDown, BiSortUp } from "react-icons/bi";
//import Order from "../order/Order";

export default function Billboard() {
  const dispatch = useDispatch();
  let movieList = useSelector((state) => state.movieList);
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

  const [order, setOrder] = useState(null);

  movieList = movieList.sort(function (a, b) {
    if (a.IMDb > b.IMDb) {
      return order === "Ascending" ? 1 : order === "Descending" ? -1 : 0;
    }
    if (a.IMDb < b.IMDb) {
      return order === "Ascending" ? -1 : order === "Descending" ? 1 : 0;
    }
    return 0;
  })
  
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
    <div>
      <Btn
        className="sorting"
        onClick={() => {
          setOrder(order !== "Descending" ? "Descending" : null);
        }}
      >
      <BiSortDown size="30" />
        Rating 
      </Btn>
      <Btn
        className="sorting"
        onClick={() => {
          setOrder(order !== "Ascending" ? "Ascending" : null);
        }}
      >
        Rating
      <BiSortUp size="30" />
      </Btn>
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
          <StyledAsidePublicity>Publicidad</StyledAsidePublicity>
          {/* <Order /> */}
        </StyledAside>
        {filtredMovies.length > 0
          ? filtredMovies
              .filter((movie) => movie.onBillboard)
              .slice(index * moviesPerPage, index * moviesPerPage + moviesPerPage)
              .map((movie) => <BillboardCard props={movie} key={movie._id} />)
          : skeletons.map((el) => <BillboardSkeleton />)}
        <Footer marginTop="120%" />
      </StyledBillboard>
    </div>
  );
}
