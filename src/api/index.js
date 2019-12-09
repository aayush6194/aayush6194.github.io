
import {  post, authPost, getParam} from './request';
import { API } from './routes';

export default {
  //User Route
  visited: function({email}) {
    return post(API.visited, {email});
  },
  signin: function({email, fname, lname, id, photo}) {
    return post(API.signin, {email, fname, lname, id, photo});
  },
  auth: function(){
    return authPost(API.auth,{});
  },
  message: function({name, email, subject, message}) {
    return post(API.message, {name, email, subject, message});
  },
  like: function({pid, user}) {
    return post(API.like, {user, pid});
  },
  getLikes: function(pid) {
    return getParam(API.getLikes, pid);
  }
};

