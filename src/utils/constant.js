

export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_AVTAR = "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
        
    },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"
export  const SUPPORTED_LANGUAGE = [
    { identifier: 'english', name: "English" },
    { identifier: 'hindi', name: "hindi" },
    { identifier: 'french', name: "french" },
    { identifier: 'spanish', name: "spanish" }

   


]
export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY