
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer.js'
import SecondaryContainer from './SecondaryConatiner.js'
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingmovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from  './GptSearch.js'
import { useSelector } from 'react-redux';




const Browse = () => {
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearch)
  
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()
  return (
    <div>
      <Header />
      {showGptSearchView ? (<GptSearch />) : (<>
        <MainContainer />
      <SecondaryContainer/>
        
      </>)}
     
    
      </div>
    
    )
  
}

export default Browse;
