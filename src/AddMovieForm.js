import { useRef } from "react";
import './AddMovieForm.css'

export default function AddMovieForm(props) {
  const titleRef = useRef()
  const ratingRef = useRef()

  const addMovie = () => {
    if(ratingRef.current.value === ""){
      alert("Du måste ange ett betyg")
    }
    if(titleRef.current.value === ""){
      alert("Du måste skriva en titel")
    }
    if(titleRef.current.value !== "" && ratingRef.current.value !== ""){
      const movie = {
        title: titleRef.current.value,
        rating: ratingRef.current.value
      }
      titleRef.current.value = ""
      ratingRef.current.value = ""
      props.AddMovieToList(movie)
    }
  };

  return (
    <div className="movie_form">
      <h2>Lägg till en film</h2>
      <div className="input_fields">
        <label for="name">Sökterm</label>
        <input type="text" id="name" ref={titleRef}></input>
        <label for="rating">Betyg</label>
        <select id="rating" name="rating" ref={ratingRef}>
            <option disabled selected value="">Välj</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
      </div>
      <input type="submit" value="Spara film" onClick={addMovie}></input>
    </div>
  );
}
