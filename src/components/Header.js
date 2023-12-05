import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
const Header = () => { 

    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const dispatch=useDispatch()

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
        }).catch((error) => {
            navigate('/error')
            // An error happened.
          });
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
    
    return (<div className="absolut w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
        <img className="w-44"
            src={LOGO}
            alt="logo" />
        {user && (<div className="flex p-2">
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
