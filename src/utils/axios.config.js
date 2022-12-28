import axios from "axios"

let URL
switch(process.env.REACT_APP_ENVIRONMENT){
    case "DEVELOPMENT":
    URL="https://moon-tech-6c99.onrender.com";
     break;

    case "PRODUCTION":
    URL="https://moon-tech-6c99.onrender.com";

    break;
    default:
     URL="https://moon-tech-6c99.onrender.com"




}


const instance = axios.create({
    baseURL: URL,
  });
export default instance;
