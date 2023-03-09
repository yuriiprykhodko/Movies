 import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {API} from'../services/API';

export const Reviews = (params) => {
    const [reviews,setReviews]=useState()
    const { movieId} = useParams();
    

    useEffect(() => {
        API.getReviews(movieId).then(setReviews)
        
    }, [movieId])
//console.log(reviews)
    return (
      <> 
            <div>Reviews</div>
            <ul>
                {reviews && reviews.results.map(r => <li key={r.id}>
                    <h5>{r.author}</h5>
                    <p>{r.content}</p>
                 </li>)}
                
            </ul>
        </>
  )
}
