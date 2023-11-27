import { useState } from "react"
import Header from "./Header"
const Login = () => { 
    const [isSignInForm, setIsignInForm] = useState(true)
    const toggleSignInForm = () => { 
        setIsignInForm(!isSignInForm)
    }
    return (<div>
        <Header />
        <div className="absolute">
        <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"

        />
        </div>
        <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
            <h1 className="font-bold  text-3xl py-4">{isSignInForm ? "Sign In " : "Sign Up"}</h1>
            { !isSignInForm && <input type="text" placeholder="Enter your Full Name" className="p-4 my-4 w-full bg-gray-700" />}

            <input type="text" placeholder="Enter your email addrress" className="p-4 my-4 w-full bg-gray-700" />
            <input type="password" placeholder="Enter your  password" className="p-4 my-4 w-full bg-gray-700" />
            <button className="p-4 my-6 bg-red-700  w-full rounded-lg">{isSignInForm ? "Sign In":"Sign Up" }</button>
            <p clasName="py-4"  onClick={toggleSignInForm}> { isSignInForm ?"New to Netflix ? Sign Up  Now":"Already  registered Sign In Now "} </p>
        </form>
        
    </div>)
}
export default Login