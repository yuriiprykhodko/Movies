//import { PageHeading } from "components/AppBar/AppBar.styled";
import { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import {API} from '../services/API';


export const Home = (params) => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        API.getTrending().then(setMovies);
        
    }, [])
    
    return (
        <>
            <ul>
                {movies && movies.map((movie) =>
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}state={{ from: location }}>{movie.title}</Link>
                     </li>
                 )}
            </ul>
        </>
  )
}
