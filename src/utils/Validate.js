 export const checkValidateData = (email,password) => { 
    const isValidEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    if (!isValidEmail) return "Email is Invalid"
    if(!isPasswordValid) return "Password is not valid"
    return null 
}
