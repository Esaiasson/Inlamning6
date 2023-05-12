import Movie from "./Movie";
import OrderByAlphaButton from "./OrderByAlphaButton"; 
import OrderByGradeButton from "./OrderByGradeButton"
import './Movies.css'


export default function Movies(props) {
    return (
    <div> 
        <h2>Tillagda filmer</h2>
        <ul>
            {props.movies.map(movie => (
                <Movie title={movie.title} key={movie.title} rating={movie.rating} removeMovieFromList={props.removeMovieFromList}/>
            ))}
        </ul>
        <OrderByAlphaButton sortMovies={props.sortMovies} />
        <OrderByGradeButton sortMovies={props.sortMovies} />
    </div> 
  );
}




