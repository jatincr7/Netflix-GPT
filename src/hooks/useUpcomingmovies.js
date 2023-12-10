import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
 import { addUpcomigMovies } from "../utils/moviesSlice";


const useUpcomingMovies = () => {
  const dispatch = useDispatch()
  const useUpcomingMovies=useSelector(store=>store.movies.upcomingMovies)
const getUpcomingMovies = async() => { 
  const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?&page=1", API_OPTIONS);
    const json = await data.json()
  dispatch(addUpcomigMovies(json.results))
  
  
}
useEffect(() => { 
  !useUpcomingMovies && getUpcomingMovies();
}, [])
     
 }

export default useUpcomingMovies;