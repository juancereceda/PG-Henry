import {useParams} from 'react-router-dom';
import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getMovieById, clearMovie, updateShow} from '../../actions/movies';
import{ isAdmin } from '../../actions/users';
import {sendToProducts} from'../../actions/products';
import {Box, Container, Btn, Grid, Poster, SubH2, Title, Trailer, Rated, H4, ArrowDown, Show,Inp, Confirm, Label, DelBtn, ShowBox} from './styled';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import swal from "sweetalert";

function MovieDetail(){
 const dispatch = useDispatch();
 const movieDetail = useSelector(state => state.movieDetail);
//  const usersList = useSelector(state=>state.users);
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
    const day= e.target.id.split(', ')

    setState({
      ...state,
      confirm: true
     })
    
    const elemento = movieDetail.shows.filter(el => el.date.slice(5, 10) === day[0])[0]
    if(elemento.day === "Twesday" || elemento.day === "Wednesday") elemento.price = elemento.price*0.7
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
     {typeof movieDetail=== 'object' && (<Grid>
        <div>
           <Title>{movieDetail.title}</Title><br></br>
           <Poster src={movieDetail.poster}/><br></br>
        </div>
        <Trailer> 
            <ReactPlayer
              url={movieDetail.trailer}
               width ='90%'
               height ='100%'
               playing
               volume= '0.7'
         />
         </Trailer>
         <div>               
           <SubH2>Descripción</SubH2><br></br>
           <Box>{movieDetail.description}</Box><br></br>
           <Rated> 
             <H4>Runtime</H4><br></br> 
             <Label>{movieDetail.runtime}</Label>
             <H4>
                <label>Rated</label><br></br>
             </H4>
             <Label>{movieDetail.rated}</Label><br></br>
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
         <SubH2>Director</SubH2><br></br> 
         <Box>{movieDetail.director}</Box><br></br>
         <SubH2>Cast</SubH2><br></br> 
         <Box>{movieDetail.cast}</Box><br></br>
         <SubH2>Genre</SubH2><br></br> 
         <Box>{movieDetail.genre}</Box><br></br>
        
     </Grid>)}
     <br/>
     <br/>
     <br/>
     <br/>
     </Container> 
  )
}

// function mapDispatchToProps(dispatch) {
//   return {
//       isAdmin: ()=>{dispatch(isAdmin())}
//   };
// }



export default MovieDetail