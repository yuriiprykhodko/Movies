import { useEffect,useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {API} from '../services/API';


export const Movies = () => {
  const [movies, setMovies] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams('');
  const search = searchParams.get("search");
    const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  useEffect(() => {
    if (search === null) {
      return;
    } 
    API.getSerchMovie(search).then(setMovies)
  }, [search])

  return (
        <div>
        <form autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input type="text" name="search" />
          
        <button type="submit">Search</button>
        </form>
       {movies && <ul>
                {movies && movies.map((movie) =>
                    <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                     </li>
                 )}
            </ul>}
        </div>
  )
}
