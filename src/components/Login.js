import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidateData } from '../utils/Validate.js'
import { auth } from '../utils/firebase.js' 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVTAR } from "../utils/constant";
const Login = () => { 
    const [isSignInForm, setIsignInForm] = useState(true)
    const [errorMesage, setErrorMessage] = useState(null);
    const dispatch=useDispatch()
    const name=useRef(null)
    const email = useRef(null)
    const password=useRef(null)
    const toggleSignInForm = () => { 
        setIsignInForm(!isSignInForm)
    }
    const handleButtonClick = () => { 
        const message = checkValidateData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return;
        // Sign In Sign up form logic 
        if (!isSignInForm) { 
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                  const user = userCredential.user;
                  updateProfile(user,{
                    displayName: name.current.value, photoURL:USER_AVTAR
                  }).then(() => {
                    // Profile updated!
                    const { uid, email, displayName,photoURL } = auth.currentUser
                    dispatch(addUser({
                        uid: uid, email: email,
                        displayName: displayName,
                        photoURL:photoURL
                    }))
                    
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                      
                  });
                
                  console.log(user)
                
              })
              .catch((error) => {
                const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode + '' + errorMessage)
                  
                // ..
              });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
      const user = userCredential.user
     
      console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + '' + errorMessage)
     
  });
            
        }


            
         
        
    }   
    

    return (<div>
        <Header />
        <div className="absolute">
        <img
            src={BG_URL}
        alt="logo"

        />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
            <h1 className="font-bold  text-3xl py-4">{isSignInForm ? "Sign In " : "Sign Up"}</h1>
            { !isSignInForm && <input type="text" placeholder="Enter your Full Name" ref={name} className="p-4 my-4 w-full bg-gray-700" />}

            <input type="text" placeholder="Enter your email addrress" ref={email}
                className="p-4 my-4 w-full bg-gray-700" />
            <input type="password" placeholder="Enter your  password" ref={password}
                className="p-4 my-4 w-full bg-gray-700" />
            <p className="text-red-500 font-bold text-lg py-2">{errorMesage }</p>
            <button className="p-4 my-6 bg-red-700  w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4"  onClick={toggleSignInForm}> { isSignInForm ?"New to Netflix ? Sign Up  Now":"Already  registered Sign In Now "} </p>
        </form>
        
    </div>)
}
export default Login