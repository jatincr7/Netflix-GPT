
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer.js'
import SecondaryContainer from './SecondaryConatiner.js'
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingmovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';




const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
      </div>
    )
  
}

export default Browse;
