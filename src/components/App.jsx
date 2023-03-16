
import { Credits } from "pages/Credits";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
//import { NotFound } from "pages/NotFound";
import { Reviews } from "pages/Reviews";
//import { lazy } from "react";
import { Routes,Route } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";

//const MyComponent = lazy(() => import('./MyComponent'))
// const Credits = lazy(() => import('pages/Credits'));
   
   //const Home = lazy(() => import("../pages/Home"));
//   const MovieDetails = lazy(() => import("pages/MovieDetails"));
//   const Movies = lazy(() => import("pages/Movies"));
// const Reviews = lazy(() => import("pages/Reviews"));
  
export const App = () => {

  return (
      <Routes> 
        <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={<MovieDetails />} >
        <Route path='credits' element={<Credits />} />
        <Route path='reviews' element={<Reviews />} />          
          </Route>
          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
  );
};
