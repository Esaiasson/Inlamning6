import { useRef } from "react";
import './Movie.css'

export default function Movie(props) {
  const deleteRef = useRef()

  const DeleteMovie = function(){
    const title = deleteRef.current.id
    console.log(title)
    props.removeMovieFromList(title)

  }


  const starImage = function(rating) {
    const stars = []
    for(let i = 0; i < rating; i++){
      stars.push(<img src="./star.png" alt="star" />)
    }
    return stars;
  }
  return (
    <li className="movie">
        <p>{props.title}</p>
        <div className="image_box">
          {starImage(props.rating)}
          <img id={props.title} src="delete.png" ref={deleteRef} alt="delete" className="delete" onClick={DeleteMovie}/>
        </div>
    </li> 
  );
}
