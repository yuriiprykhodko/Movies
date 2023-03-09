import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {API} from '../services/API';

export const Credits = (params) => {
    const [credits,setCredits]=useState()
    const { movieId } = useParams();
    

    useEffect(() => {
        API.getCredits(movieId).then(setCredits)
        
    }, [movieId])

    // console.log(credits)
    
    return (
      <div> 
            <h4> Credits</h4>
            <ul>
                {credits && credits.cast.map(c => <li key={c.cast_id}>
                    {c.profile_path !== null && <img src={`https://image.tmdb.org/t/p/w200/${c.profile_path}`} alt={c.name} /> }
                    <p>{c.name}</p>
                 </li>)}
                
            </ul>
           
        </div>
  )
}
