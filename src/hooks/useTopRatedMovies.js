import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addTopRatedMovies } from "../utils/moviesSlice";


 const useTopRatedMovies =()=>{
     const dispatch = useDispatch()
const fetchTopRatedMovies = async() => { 
  const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?&page=1'", API_OPTIONS);
  const json = await data.json()
  dispatch(addTopRatedMovies(json.results))
  
  
}
useEffect(() => { 
    fetchTopRatedMovies();
}, [])
     
 }

export default useTopRatedMovies;
