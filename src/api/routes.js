let URL  = "https://api.aayushh.com/api";
//URL  = "http://localhost:8080/api";

const API = {
  //User
  visit: URL + "/visited",
  signin: URL + "/signin",
  auth: `${URL}/auth`,
  message: `${URL}/message`,
  like: `${URL}/like`,
  getLikes: `${URL}/get-likes`
 }

export { URL , API };