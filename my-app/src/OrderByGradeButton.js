import './OrderBy.css'

export default function OrderByGradeButton(props) {

    const sortBystr = function(){
        props.sortMovies("int");
    }

    return (
        <button onClick={sortBystr}>Sortera i betygs ordning</button>
    );
};