import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMovieList, getMoviesByGenre } from "../../actions/movies";
import { StyleFilter } from "./styles";

export default function GenreFilter(){
  const dispatch = useDispatch()
  const genreList = useSelector(state => state.moviesGenre)

  useEffect(()=>{
    const getMovies = async () => {
      await dispatch(getMovieList())
      dispatch(getGenres())
    }
    getMovies()
  }, [dispatch])

  function HandleChange(caller) {
    const genre = caller.target.value;
    dispatch(getMoviesByGenre(genre === "Film genre" ? "" : genre))
  }

  return (
    <StyleFilter>
      <select onChange={HandleChange}>
        <option>Film genre</option>
        {
          genreList && genreList.map(elemento => <option key={elemento}>{elemento}</option>)
        }
      </select>
    </StyleFilter>
  )
}