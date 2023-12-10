import { useSelector } from "react-redux"
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
    const {moviesResult, moviesName } = useSelector((store) => store.gpt)
    
    if (!moviesName) return null 
    return (<div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
            {moviesName.map((movie,index) =>
            (<MovieList
                key={movie}
                title={movie}
                movies={moviesResult[index].results} />))}
            
       </div> 
    </div>)
}
export  default GptMovieSuggestion