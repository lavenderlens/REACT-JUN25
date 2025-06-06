import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";
export const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <>
      <h1>MovieList</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.name}
          <button onClick={() => handleRemoveMovie(movie.id)}>
            Delete Movie
          </button>
        </div>
      ))}
    </>
  );
};
