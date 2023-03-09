import { Link } from '../AppBar/AppBar.styled';

export const Navigation = (params) => {
    return (
        <nav>
        <Link to='/'>Home</Link>   
         <Link to='/movies'>Movies</Link>   
      </nav>
  )
}
