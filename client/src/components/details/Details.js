import {useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieById, clearMovie} from '../../actions/movies';
import{ isAdmin } from '../../actions/users';
import {sendToProducts} from'../../actions/products';
import {Box, Container, Btn, Grid, Poster, SubH2, Title, Trailer, Rated, H4, ArrowDown, Show,Inp, Confirm, Label, Edit } from './styled';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import ModalTitle from './modal/ModalTitle';
import ModalPoster from './modal/ModalPoster';
import ModalTrailer from './modal/ModalTrailer'
import ModalDescription from './modal/ModalDescription';
import ModalRuntime from './modal/ModalRuntime';
import ModalDirector from './modal/ModalDirector';
import ModalCast from './modal/ModalCast';
import ModalRated from './modal/ModalRated';
import ModalGenre from './modal/ModalGenre';
import ModalRelease from './modal/ModalRelease';
import ModalIMDb from './modal/ModalIMDb';


function MovieDetail(){
  const dispatch = useDispatch();
  const movieDetail = useSelector(state => state.movieDetail);
  const[admin, setAdmin] = React.useState(null);
  const[state, setState]=React.useState({
    render:false,
    confirm:false,
  })
  let counter = 0;
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  
  const currentDate = yyyy + '-' + mm + '-' + dd + 'T00:00:00.000Z'

  const {id}= useParams();
    useEffect(()=>{
     dispatch(getMovieById(id))

      return()=>{
        dispatch(clearMovie())
      }
    },[dispatch, id])
  
    useEffect(() => {
        let verifyAdmin = async () => {
            const authorized = await isAdmin();
            setAdmin(authorized)
        }
        verifyAdmin();
    },[])

  function handleShow(e){    
    e.preventDefault()
    const day= e.target.value.split(', ')

    setState({
      ...state,
      confirm: true
     })
    
    const elemento = movieDetail.shows.filter(el => el.date.slice(5, 10) === day[0])[0]
    const info ={
        title: movieDetail.title,
        price: parseInt(elemento.price),
        time: day[1],
        day: elemento.day,
        date: elemento.date.slice(0, 10),
        parking: elemento.time.filter(e => Object.keys(e)[0] === day[1])[0][day[1]]
    } 
    console.log(info)
    dispatch(sendToProducts(info))    
  }

  function handleRender(e){
   e.preventDefault()
   setState({
     ...state,
     render: true
    })
  }

  const [showModalTitle, setShowModalTitle] = useState(false);
  const openModalTitle = () =>{
    setShowModalTitle(prev => !prev)
  }
  const [showModalPoster, setShowModalPoster] = useState(false);
  const openModalPoster = () =>{
    setShowModalPoster(prev => !prev)
  }
  const [showModalTrailer, setShowModalTrailer] = useState(false);
  const openModalTrailer = () =>{
    setShowModalTrailer(prev => !prev)
  }
  const [showModalDescription, setShowModalDescription] = useState(false);
  const openModalDescription = () =>{
    setShowModalDescription(prev => !prev)
  }
  const [showModalRuntime, setShowModalRuntime] = useState(false);
  const openModalRuntime = () =>{
    setShowModalRuntime(prev => !prev)
  }
  const [showModalRated, setShowModalRated] = useState(false);
  const openModalRated = () =>{
    setShowModalRated(prev => !prev)
  }
  const [showModalDirector, setShowModalDirector] = useState(false);
  const openModalDirector = () =>{
    setShowModalDirector(prev => !prev)
  }
  const [showModalCast, setShowModalCast] = useState(false);
  const openModalCast = () =>{
    setShowModalCast(prev => !prev)
  }
  const [showModalGenre, setShowModalGenre] = useState(false);
  const openModalGenre = () =>{
    setShowModalGenre(prev => !prev)
  }
  const [showModalRelease, setShowModalRelease] = useState(false);
  const openModalRelease = () =>{
    setShowModalRelease(prev => !prev)
  }
  const [showModalIMDb, setShowModalIMDb] = useState(false);
  const openModalIMDb = () =>{
    setShowModalIMDb(prev => !prev)
  }

  return(
    <Container>
    {typeof movieDetail === 'object' && (<Grid>
      <div> 
          <Title>
          {(admin? 
            (<Edit>
              <img
                className="edit"
                onClick={openModalTitle}
                alt=""
                src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
              />
            </Edit>):null)}
            <ModalTitle showModalTitle={showModalTitle} setShowModalTitle={setShowModalTitle} />
            {movieDetail.title}
          </Title><br></br>

          <div>
          <Poster src={movieDetail.poster}/><br></br>
          {(admin? 
            (<Edit>
              <img
                className="edit"
                onClick={openModalPoster}
                alt=""
                src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
              />
            </Edit>):null)}
            <ModalPoster showModalPoster={showModalPoster} setShowModalPoster={setShowModalPoster} />
          </div>
      </div>

      <Trailer> 
      {(admin? 
        (<Edit>
          <img
            className="edit"
            onClick={openModalTrailer}
            alt=""
            src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
          />
        </Edit>):null)}
        <ModalTrailer showModalTrailer={showModalTrailer} setShowModalTrailer={setShowModalTrailer} />
        <ReactPlayer
          url={movieDetail.trailer}
          width ='90%'
          height ='100%'
          playing
          volume= '0.7'
        />
      </Trailer>

        <div>               
          <SubH2>Description</SubH2><br></br>
          {(admin? 
          (<Edit>
            <img
              className="edit"
              onClick={openModalDescription}
              alt=""
              src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
            />
          </Edit>):null)}
          <ModalDescription showModalDescription={showModalDescription} setShowModalDescription={setShowModalDescription} />
          <Box>{movieDetail.description}</Box><br></br>
          
          <Rated> 
            <H4>Runtime</H4><br></br> 
            <Label>{movieDetail.runtime}</Label>
            {(admin? 
            (<Edit>
              <img
                className="edit"
                onClick={openModalRuntime}
                alt=""
                src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
              />
            </Edit>):null)}
            <ModalRuntime showModalRuntime={showModalRuntime} setShowModalRuntime={setShowModalRuntime} />
        
            <H4>
              <label>Rated</label><br></br>
            </H4>
            <Label>{movieDetail.rated}</Label><br></br>
            {(admin? 
            (<Edit>
              <img
                className="edit"
                onClick={openModalRated}
                alt=""
                src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
              />
            </Edit>):null)}
            <ModalRated showModalRated={showModalRated} setShowModalRated={setShowModalRated} />
          </Rated> 
          <Rated> 
            <H4>Release date</H4><br></br> 
            <Label>{movieDetail.date}</Label>
            {(admin? 
            (<Edit>
              <img
                className="edit"
                onClick={openModalRelease}
                alt=""
                src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
              />
            </Edit>):null)}
            <ModalRelease showModalRelease={showModalRelease} setShowModalRelease={setShowModalRelease} />
        
            <H4>
              <label>Rating IMDb</label><br></br>
            </H4>
            <Label>{movieDetail.IMDb}</Label><br></br>
            {(admin? 
            (<Edit>
              <img
                className="edit"
                onClick={openModalIMDb}
                alt=""
                src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
              />
            </Edit>):null)}
            <ModalIMDb showModalIMDb={showModalIMDb} setShowModalIMDb={setShowModalIMDb} />
          </Rated> 
        </div>

        <div>                   
        {(!admin && movieDetail.onBillboard? (<Btn onClick={handleRender}>Get Tickets<ArrowDown size='35'/></Btn>):null) || 
        (admin? (<Btn onClick={handleRender}>set shows<ArrowDown size='35'/></Btn>):null)}
        {state.render ? (<label>{movieDetail.shows ? (movieDetail.shows.map(el=>             
          { 
            if((counter < 7 && el.date.slice(0, 4) >= currentDate.slice(0, 4) && el.date.slice(5, 7) === currentDate.slice(5, 7) && el.date.slice(8, 10) >= currentDate.slice(8, 10)) || 
                (counter < 7 && el.date.slice(0, 4) >= currentDate.slice(0, 4) && el.date.slice(5, 7) > currentDate.slice(5, 7))){
                  counter++
            return (
              <div>
                <Show>
                  {el.time.map(e =>
                      <Inp type= 'button' onClick= {handleShow} value={el.date.slice(5, 10).concat(', ').concat(Object.keys(e)[0])}/>            
                  )}
                </Show> 
              </div>
            )            
          }
          return null
          }
        )):<h2>No Shows</h2>}</label>) : null}
        {state.confirm ? (<Link to ='/products'><Confirm>Confirm</Confirm> </Link>):null}
        </div>

        <SubH2>Director</SubH2><br></br> 
        {(admin? 
          (<Edit>
            <img
              className="edit"
              onClick={openModalDirector}
              alt=""
              src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
            />
          </Edit>):null)}
          <ModalDirector showModalDirector={showModalDirector} setShowModalDirector={setShowModalDirector} />
        <Box>{movieDetail.director}</Box><br></br>

        <SubH2>Cast</SubH2><br></br> 
        {(admin? 
          (<Edit>
            <img
              className="edit"
              onClick={openModalCast}
              alt=""
              src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
            />
          </Edit>):null)}
          <ModalCast showModalCast={showModalCast} setShowModalCast={setShowModalCast} />
        <Box>{movieDetail.cast}</Box><br></br>

        <SubH2>Genre</SubH2><br></br>
        {(admin? 
          (<Edit>
            <img
              className="edit"
              onClick={openModalGenre}
              alt=""
              src="https://res.cloudinary.com/juancereceda/image/upload/v1625795867/edit_3_qmb0hj.png"
            />
          </Edit>):null)}
          <ModalGenre showModalGenre={showModalGenre} setShowModalGenre={setShowModalGenre} />
        <Box>{movieDetail.genre}</Box><br></br>
    </Grid>)}
    <br/>
    <br/>
    <br/>
    <br/>
    </Container> 
  )
}

export default MovieDetail