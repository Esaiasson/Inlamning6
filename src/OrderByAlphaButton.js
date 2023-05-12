import './OrderBy.css'

export default function OrderByAlphaButton(props) {

    const sortByalpha = function(){
        props.sortMovies("str");
    }

    return (
        <button onClick={sortByalpha}>Sortera i alfabetisk ordning</button>
    );
};