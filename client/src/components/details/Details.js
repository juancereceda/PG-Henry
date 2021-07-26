import {useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieById, clearMovie, updateShow} from '../../actions/movies';
import{ isAdmin } from '../../actions/users';
import {sendToProducts} from'../../actions/products';
import {Box, Container, Btn, Grid, Poster, SubH2, Title, Trailer, Rated, H4, ArrowDown, Show,Inp, Confirm, Label, DelBtn, ShowBox, Edit} from './styled';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
import swal from "sweetalert";
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
    },[dispatch, id, state.movieDetail])
  
    useEffect(() => {
        let verifyAdmin = async () => {
            const authorized = await isAdmin();
            setAdmin(authorized)
        }
        verifyAdmin();
    },[])

  function handleShow(e){    
    e.preventDefault()
    const day= e.target.id.split(', ')

    setState({
      ...state,
      confirm: true
     })
    
    const elemento = movieDetail.shows.filter(el => el.date.slice(5, 10) === day[0])[0]
    if(elemento.day === "Tuesday" || elemento.day === "Wednesday") elemento.price = elemento.price*0.7
    const info ={
        title: movieDetail.title,
        price: parseInt(elemento.price),
        time: day[1],
        day: elemento.day,
        date: elemento.date.slice(0, 10),
        parking: elemento.time.filter(e => Object.keys(e)[0] === day[1])[0][day[1]]
    } 
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
  const [showModalRelease, setShowModalRelease] = useState(false);
  const openModalRelease = () =>{
    setShowModalRelease(prev => !prev)
  }
  const [showModalIMDb, setShowModalIMDb] = useState(false);
  const openModalIMDb = () =>{
    setShowModalIMDb(prev => !prev)
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
  
  async function handleShowCancel(e){
    let iD = e.target.id.split(', ');
    let date = iD[0];
    let time = iD[1];
    let movie_title = movieDetail.title;
    const option = await swal({
      text: "Are you sure you want to cancel/restore this show?",
      buttons: true
    })
    if (option) {
      updateShow(movie_title, date, time)
      await swal("Editing show...", {
        icon: "success",
        buttons: false,
        timer: 1500,
      });
      dispatch(getMovieById(id))
    }
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
          <Poster src={movieDetail.poster}/><br></br>
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
            <H4>Runtime 
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
            </H4>
            <Label>{movieDetail.runtime}</Label><br></br>
        
            <H4>Rated
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
            </H4>
            <Label>{movieDetail.rated}</Label><br></br>
          </Rated> 

          <Rated> 
            <H4>Release date
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
            </H4>
            <Label>{movieDetail.date}</Label><br></br>

            <H4>Rating IMDb
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
            </H4>
            <Label>{movieDetail.IMDb}</Label><br></br>
          </Rated> 
        </div>

       <Show>                   
          {(!admin && movieDetail.onBillboard? (<Btn onClick={handleRender}>Get Tickets<ArrowDown size='35'/></Btn>):null) || 
          (admin? (<Btn onClick={handleRender}>Edit Shows<ArrowDown size='35'/></Btn>):null)}
          {state.render ? (<div className="showDiv">{movieDetail.shows ? (movieDetail.shows.map(el=>             
            { 
              if((counter < 7 && el.date.slice(0, 4) >= currentDate.slice(0, 4) && el.date.slice(5, 7) === currentDate.slice(5, 7) && el.date.slice(8, 10) >= currentDate.slice(8, 10)) || 
                 (counter < 7 && el.date.slice(0, 4) >= currentDate.slice(0, 4) && el.date.slice(5, 7) > currentDate.slice(5, 7))){
                   counter++
              return (
                  <ShowBox>
                    <span className='showSpan'>{el.day.concat(', '.concat(el.date.slice(5, 10)))}</span>
                    {el.time.map(e =>
                      {if (e.cancelled === true) return (
                        <div>                          
                          {admin? <Inp type= 'button' id={el.date.slice(5, 10).concat(', ').concat(Object.keys(e)[0])} onClick= {e =>handleShow(e)} value={Object.keys(e)[0]}/> : null}
                          {admin? <DelBtn id={el.date.concat(', ').concat(Object.keys(e)[0])} onClick={e =>handleShowCancel(e)}>Restore</DelBtn> : null}
                        </div> 
                        )
                        else if (e.cancelled === false) return(
                        <div>
                          <Inp type= 'button' id={el.date.slice(5, 10).concat(', ').concat(Object.keys(e)[0])} onClick= {e =>handleShow(e)} value={Object.keys(e)[0]}/> 
                          {admin? <DelBtn id={el.date.concat(', ').concat(Object.keys(e)[0])} onClick={e =>handleShowCancel(e)}>Cancel</DelBtn> : null}
                        </div>
                        )
                        return null  
                      }                                                                
                    )}
                 </ShowBox> 

              )            
            }
            return null
            }
          )):<h2>No Shows</h2>}</div>) : null}
        {state.confirm ? (<Link to ='/products'><Confirm>Confirm</Confirm></Link>):null}
         </Show>

        <SubH2>Director
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
          </SubH2><br></br> 
        <Box>
          {movieDetail.director}
        </Box><br></br>

        <SubH2>Cast
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
          </SubH2><br></br> 
        <Box>
          {movieDetail.cast}
        </Box><br></br>

        <SubH2>Genre
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
          </SubH2><br></br>
        <Box>
          {movieDetail.genre}
        </Box><br></br>
    </Grid>)}
    <br/>
    <br/>
    <br/>
    <br/>
    </Container> 
  )
}

export default MovieDetail