
import {  post, authPost} from './request';
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
  like: function({email, pid, id}) {
    return post(API.like, {email, pid, id});
  }
};

