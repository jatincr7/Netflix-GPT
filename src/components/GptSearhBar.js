

import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addgptMovieResult } from "../utils/gptSlice"
import lang from "../utils/languageConstant" 
import openai from '../utils/openai.js'


const GptSearchBar =  () => { 
    const langKey = useSelector((store) => store.config.language)
    const searchText = useRef(null)
    const dispatch=useDispatch()

    const searchTMDBMovies = async (movie) => { 
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json = await data.json()
        return json
    }
    


    const hanleGptSearchClick = async () => { 
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query " + searchText.current.value + ". only give me names of 5 movies, comma seprated.like the Example Result given ahead . Example Result :Gadar,Sholay,Don,Golmal,Koi Mil Gya ";
        console.log(searchText.current.value)
         // Make a call OPENAI's API and get movie suggestions
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if (!gptResult.choices) { 
       
        }

        const gptMovies = gptResult.choices[0]?.message?.content.split(",")
    
    
        const promiseArray = gptMovies.map((movie) => searchTMDBMovies(movie));
        
        const tmdbResult = await Promise.all(promiseArray);
        console.log(tmdbResult)
        dispatch(addgptMovieResult({moviesName:gptMovies,moviesResult: tmdbResult }));
        
         
         

        
    }


    return (<div className="pt-[10%]  flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12"   onClick={((e)=>e.preventDefault())} >
            <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey]?.gptSearchPlaceHolder} ref={searchText}  />
            <button className="py-2 px-2 bg-red-700 col-span-3 m-4 text-white rounded-lg"
           onClick={hanleGptSearchClick}   
            >{lang[langKey]?.search}</button>
        </form>
        
    </div>)
}
export default GptSearchBar