
import { authGet, post, authPost, authPut } from './request';
import { API } from './routes';

export default {
  //User Route
  login: function({ email, password }) {
    return post(API.login, { email, password });
  },
  signup: function({email, password, firstName, lastName, username, isStudent}) {
    return post(API.signup, {email, password, firstName, lastName, username, isStudent});
  },
  auth: function(){
    return authPost(API.auth,{});
  }
};

