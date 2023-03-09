
import { Credits } from "pages/Credits";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
//import { NotFound } from "pages/NotFound";
import { Reviews } from "pages/Reviews";
import { Routes,Route } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Container } from "./AppBar/AppBar.styled";

export const App = () => {
  return (
   
     <Container>
        <AppBar />
        <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} >
        <Route path='credits' element={<Credits />} />
        <Route path='reviews' element={<Reviews />} />          
          </Route>
         <Route path="*" element={<Home />} />
        </Routes>
        
      </Container>
    
  );
};
