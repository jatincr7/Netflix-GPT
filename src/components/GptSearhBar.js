import { getSelectionRange } from "@testing-library/user-event/dist/utils"
import { useSelector } from "react-redux"
import lang from "../utils/languageConstant" 


const GptSearchBar = () => { 
    const langKey = useSelector((store) => store.config.language)
    
    return (<div className="pt-[10%]  flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey]?.gptSearchPlaceHolder}  />
            <button className="py-2 px-2 bg-red-700 col-span-3 m-4  text-white rounded-lg">{lang[langKey]?.search}</button>
        </form>
        
    </div>)
}
export default GptSearchBar