
const Movie = (props) => {
  const capitalizeFirstLetter = props.movie.Type.charAt(0).toUpperCase() + props.movie.Type.slice(1);
  return (
    <>
      <h2>{props.movie.Title}</h2>
      <img src={props.movie.Poster} alt="The release poster of a movie" />
      <div className="typeAndYearContainer">
      <p> {capitalizeFirstLetter} ({props.movie.Year})</p>
      </div>
    </>
  )
}

export default Movie;