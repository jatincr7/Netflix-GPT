import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => { 

    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
   
    

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView())
     }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
        }).catch((error) => {
            navigate('/error')
            // An error happened.
          });
    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
     }

    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL:photoURL
                }))
                navigate('/browse')
            
              // ...
            } else {
              // User is signed out
              // ...
                dispatch(removeUser())
                navigate('/')
                
      
            }
        });
        //Unsubscribe when component unmounts 
        return () => unsubscribe();
      
  },[])
    
    return (<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
        <img className="w-44"
            src={LOGO}
            alt="logo" />
        { user && (<div className="flex p-2">
           {  showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white "  onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang) =>
                <option key={lang.identifier} value={lang.identifier}>{lang.name }</option>
            )}
            </select>)}

            
            <button   onClick={handleGptSearch}  className="py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white">
                { showGptSearch ?"Homepage":"Show GPT Search" }</button>
            <img
                className="w-12 h-12"
                alt="user-icon"
                src={user?.photoURL}
            />
            <button className="font-bold text-white"
                onClick={handleSignOut}
            
            >(Sign Out)</button>
            
        </div>)}
    </div>)
}
export default Header
