import AddMovieForm from './AddMovieForm.js'
import Movies from './Movies.js';
import { useState } from "react";
import './App.css'

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Film1",
      rating: "5"
    }
  ])

  function AddMovieToList(movie){
    movie = {
        title: movie.title,
        rating: movie.rating
      }

    setMovies([...movies, movie])
  }

  function removeMovieFromList(title){
    setMovies(movies.filter((item) => item.title !== title))
  }

  function sortMovies(by){
    const sorted_list = [...movies]
    if(by === "str"){
      sorted_list.sort((a,b)  => a.title.localeCompare(b.title));
    } 
    if(by === "int"){
      sorted_list.sort((a,b)  => a.rating.localeCompare(b.rating)).reverse();
    }
    setMovies(sorted_list)
  }

  return (
    <div className="App">
      <h1>Min Filmlista</h1>
      <AddMovieForm AddMovieToList={AddMovieToList}/>
      <Movies movies={movies} removeMovieFromList={removeMovieFromList} sortMovies={sortMovies}/>
    </div>
  );
}

export default App;
