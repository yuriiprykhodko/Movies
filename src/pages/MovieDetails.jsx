import { PageHeading } from "components/AppBar/AppBar.styled";
import { Suspense, useEffect, useState } from "react";
import { Link, useParams,Outlet, useLocation } from "react-router-dom";
import {API} from '../services/API';

export const MovieDetails = () => {
    const [movie,setMovie]=useState()
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/Home";
    
    useEffect(() => {
        API.getMovie(movieId).then(setMovie)
        
    }, [movieId])

    return (
        <> 
            {movie && <div>
                <Link to={backLinkHref}>Go back</Link>
                <hr />
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
                      <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                    </Suspense>
            </div>}
        </>
  )
}