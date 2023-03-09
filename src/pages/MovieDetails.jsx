import { PageHeading } from "components/AppBar/AppBar.styled";
import { useEffect, useState } from "react";
import { Link, useParams,Outlet } from "react-router-dom";
import {API} from '../services/API';

export const MovieDetails = () => {
    const [movie,setMovie]=useState()
    const { movieId } = useParams();
    

    useEffect(() => {
        API.getMovie(movieId).then(setMovie)
        
    }, [movieId])

    return (
        <> 
            {movie && <div>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
                <PageHeading>{movie.title}</PageHeading>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                {movie.genres.map(gen=>gen.name)}.
                <hr />
                <h4>Additional information</h4>
               <ul>
                    <li>
                        <Link to='credits'>Credits</Link>
                </li>
                    <li>
                        <Link to='reviews'>Reviews</Link>
                </li>
                </ul>
                <hr />
                <Outlet />
            </div>}
        </>
  )
}