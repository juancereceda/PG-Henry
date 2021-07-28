import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../../actions/movies";
import {
  StyledBillboard,
  StyledAside,
  Btn,
  ComingSoonContainer,
} from "../billboard/Billboard-styles";
import { StyledFirstAside } from "../billboard/Aside-styles";
import ComingSoonCard from "./comingSoonCard/ComingSoonCard";
import Footer from "../footer/Footer";
import Slider from "../comboSlider/slider";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import CouponSlider from "../promotionSlider/Slider";
import Skeleton from "./comingSoonSkeleton/ComingSoonSkeleton";

export default function ComingSoon() {
  const dispatch = useDispatch();
  let movieList = useSelector((state) => state.movieList);
  const releaseList = useSelector(state => state.movieList);
    let [admin, setAdmin] = useState(null);
    let arr = [];
  for (let i = 0; i < 7; i++) {
    arr.push(i);
  }

  useEffect(() => {
    dispatch(getMovieList());
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

  return (
    <ComingSoonContainer>
      <div className="btn-container">
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
        <StyledAside>
          <StyledFirstAside>
            <Slider />
          </StyledFirstAside>
          <StyledFirstAside>
            <CouponSlider />
          </StyledFirstAside>
        </StyledAside>
        {releaseList.length > 0 ? movieList.filter(movie => !movie.onBillboard).map((movie) => (<ComingSoonCard props={movie} key={movie._id} />)) : arr.map(el => <Skeleton />)}
        {/* {movieList
          .filter((movie) => !movie.onBillboard)
          .map((movie) => (
            <ComingSoonCard props={movie} key={movie._id} />
          ))} */}
        <Footer marginTop="120%" />
      </StyledBillboard>
    </ComingSoonContainer>
  );
}
