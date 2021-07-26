import React, { useEffect, useState, useRef } from 'react';
import StyledContainer from './StylesModal';
import { useParams } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import { useSpring, animated } from 'react-spring';
import { updateMovie } from '../../../actions/movies';
import { Title } from '../styled';
import { getMovieById } from '../../../actions/movies';


function ModalTitle({ showModalTitle, setShowModalTitle }) {

    const dispatch = useDispatch();
    const params = useParams();
    const [movie, setMovie] = useState({
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
        IMDb: "",
    });
    const ChangeInput = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateMovie(movie, params.id)
        await swal(`${movie.title}`, `Edited succesfully`, "success", {
            buttons: false,
            timer: 2000,
        });
        dispatch(getMovieById(params.id))
    }
    //Efecto para traer el detalle de la pelicula
    useEffect(() => {
        const fetchMovieDetail = async () => {
            const response = await axios.get(`http://localhost:3001/movies/${params.id}`);
            const date = new Date(response.data.date)
            response.data.date = date.toISOString().split('T')[0]
            setMovie(response.data);
        }
        fetchMovieDetail();

    }, [params.id])
    //click outside the form
    const modalRef = useRef()
    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModalTitle(false);
        }
    }

    const animation = useSpring({
        config: {
            duration: 300
        },
        opacity: showModalTitle ? 1 : 0,
        transform: showModalTitle ? `translateY(0%)` : `translateY(-100%)`
    })

    return (
        <div>
            {showModalTitle ?
            <StyledContainer ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                <form
                className="postMovieForm"
                onChange={(e) => ChangeInput(e)}
                onSubmit={(e) => handleSubmit(e)}
                >
                    <div>
                        <button
                        className="close"
                        onClick={() => setShowModalTitle(prev => !prev)}
                        > X
                        </button>
                    </div> 
                    <div className="formInputContainer">
                        <div>
                            <Title>Movie Title</Title>
                            <input
                            placeholder="Movie title"
                            type="text"
                            name="title"
                            value={movie.title}
                            />
                        </div>
                    </div>
                    <div className="formInputContainer">
                        <button className="postMovieButton" type="submit">
                            Edit Title
                        </button>
                    </div>
                </form>
                </animated.div>
            </StyledContainer>: null}
        </div>  
    );
}

export default ModalTitle