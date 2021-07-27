import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList, getGenres } from "../../actions/movies";
import {
  StyledTitle,
  StyledBillboard,
  StyledAside,
  StyledPagination,
  Btn,
  StyledHeader,
  BillboardContainer,
} from "./Billboard-styles";
import { StyledFirstAside } from "./Aside-styles";
import BillboardCard from "./BillboardCard";
import Footer from "../footer/Footer";
import GenreFilter from "../GenreFilter/GenreFilter";
import Slider from "../comboSlider/slider";
import BillboardSkeleton from "./BillboardSkeletons";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import CouponSlider from "../promotionSlider/Slider";

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
  const numMoviesOnBill = filtredMovies.filter(
    (movie) => movie.onBillboard
  ).length;

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
  });

  function HandlePrevIndex() {
    index > 0 && setIndex(index - 1);
  }
  function HandleNextIndex() {
    index < Math.ceil(numMoviesOnBill / moviesPerPage) - 1 &&
      setIndex(index + 1);
  }
  return (
    <BillboardContainer>
      <div className="btn-container">
        <GenreFilter setIndex={setIndex} />
        <div className="sorting-btns">
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
        </div>
      </div>
      <StyledBillboard>
        <StyledHeader>
          <StyledTitle>Billboard Movies</StyledTitle>
        </StyledHeader>
        <StyledAside>
          <StyledFirstAside>
            <Slider />
          </StyledFirstAside>
          <StyledFirstAside>
            <CouponSlider />
          </StyledFirstAside>
        </StyledAside>
        {filtredMovies.length > 0
          ? filtredMovies
              .filter((movie) => movie.onBillboard)
              .slice(
                index * moviesPerPage,
                index * moviesPerPage + moviesPerPage
              )
              .map((movie) => <BillboardCard props={movie} key={movie._id} />)
          : skeletons.map((el) => <BillboardSkeleton />)}
        {numMoviesOnBill > 3 ? (
          <StyledPagination>
            {index > 0 ? (
              <img
                src="https://res.cloudinary.com/juancereceda/image/upload/v1627326026/left-arrow_2_j8ulxt.png"
                alt="prev"
                onClick={HandlePrevIndex}
                className="plusminus enabledIndex"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/juancereceda/image/upload/v1627408215/left-arrow_3_iyjdb6.png"
                alt="prev"
                className="plusminus"
              />
            )}
            <p>{index + 1}</p>
            {index < Math.ceil(numMoviesOnBill / moviesPerPage) - 1 ? (
              <img
                src="https://res.cloudinary.com/juancereceda/image/upload/v1627325985/right-arrow_2_euvjym.png"
                alt="next"
                onClick={HandleNextIndex}
                className="plusminus enabledIndex"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/juancereceda/image/upload/v1627408523/right-arrow_3_xwzmj1.png"
                alt="next"
                className="plusminus"
              />
            )}
          </StyledPagination>
        ) : null}
        <Footer
          moviesLength={
            filtredMovies.filter((movie) => movie.onBillboard).length
          }
        />
      </StyledBillboard>
    </BillboardContainer>
  );
}
