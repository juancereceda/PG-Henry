import React, { useEffect, useState } from 'react';
import StyledContainer from './styles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { updateMovie } from '../../../actions/movies';

function EditMovie() {
    const params = useParams();
    const [movieDetail, setMovieDetail] = useState({
        title: "",
        date: "",
        poster: "",
        description: "",
        genre: "",
        shows: [],
        cast: "",
        trailer: "",
        rated: "",
        runtime: "",
        director: "",
    });
    const ChangeInput = (e) => {
        setMovieDetail({
            ...movieDetail,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateMovie(movieDetail, params.id)
        await swal(`${movieDetail.title}`, `Edited succesfully`, "success", {
            buttons: false,
            timer: 2000,
        });
    }
    //Efecto para traer el detalle de la pelicula
    useEffect(() => {
        const fetchMovieDetail = async () => {
            const response = await axios.get(`http://localhost:3001/movies/${params.id}`);
            const date = new Date(response.data.date)
            response.data.date = date.toISOString().split('T')[0]
            setMovieDetail(response.data);
        }
        fetchMovieDetail();

    }, [params.id])


    return (
        <StyledContainer>
            <form
                className="postMovieForm"
                onChange={(e) => ChangeInput(e)}
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className="formInputContainer">
                    <div>
                        <h4>Movie Title</h4>
                        <input
                            placeholder="Movie title"
                            type="text"
                            name="title"
                            value={movieDetail.title}
                        />
                    </div>
                    <div>
                        <h4>Poster URL</h4>
                        <input
                            placeholder="Poster URL"
                            type="text"
                            name="poster"
                            value={movieDetail.poster}
                        />
                    </div>
                </div>
                <div className="formInputContainer">
                    <div>
                        <h4>Release date</h4>
                        <input
                            placeholder="Release date"
                            type="date"
                            name="date"
                            value={movieDetail.date}
                        />
                    </div>
                    <div>
                        <h4>Trailer URL</h4>
                        <input
                            placeholder="Trailer URL"
                            type="text"
                            name="trailer"
                            value={movieDetail.trailer}
                        />
                    </div>
                </div>
                <div className="formInputContainer">
                    <div>
                        <h4>Cast</h4>
                        <input
                            placeholder="Cast"
                            type="text"
                            name="cast"
                            value={movieDetail.cast}
                        />
                    </div>
                    <div>
                        <h4>Runtime</h4>
                        <input
                            placeholder="Runtime"
                            type="text"
                            name="runtime"
                            value={movieDetail.runtime}
                        />
                    </div>
                </div>
                <div className="formInputContainer">
                    <div>
                        <h4>Director</h4>
                        <input
                            placeholder="Director"
                            type="text"
                            name="director"
                            value={movieDetail.director}
                        />
                    </div>
                    <div>
                        <h4>Genre</h4>
                        <input
                            placeholder="Genre"
                            type="text"
                            name="genre"
                            value={movieDetail.genre}
                        />
                    </div>
                </div>
                <div className="formInputContainer">
                    <div>
                        <h4>Rated</h4>
                        <input
                            placeholder="Rated"
                            type="text"
                            name="rated"
                            value={movieDetail.rated}
                        />
                    </div>
                    <div>
                        <h4>Rating IMDb</h4>
                        <input
                            placeholder="Rating"
                            type="text"
                            name="IMDb"
                            value={movieDetail.IMDb}
                        />
                    </div>
                </div>
                <div className="formInputContainer">
                    <div>
                        <h4>Description</h4>
                        <textarea
                            placeholder="Description"
                            name="description"
                            value={movieDetail.description}
                        />
                    </div>
                </div>
                <div className="formInputContainer">
                    <button className="postMovieButton" type="submit">
                        Edit Movie
                    </button>
                </div>
            </form>
        </StyledContainer>
    )
}

export default EditMovie;