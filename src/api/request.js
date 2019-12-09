import { authHeader , header } from './header';

function get(url) {
  return fetch(url, { method: 'GET', mode: 'cors',headers: header() })
    .then(response => response.json());
}
function getParam(url, param ) {
  return fetch(url + "/"+param, { method: 'GET', headers: header() })
    .then(response => response.json());
}

function authGet(url, param ) {
  return fetch(url + param, { method: 'GET', headers: authHeader() })
    .then(response => response.json());
}

function post(url, body) {
    return fetch(url, { method: 'POST',mode: 'cors', headers: header(), body: JSON.stringify(body) })
      .then(response => response.json());
}

function authPost(url, body) {
  return fetch(url, { method: 'POST', mode: 'cors',headers: authHeader(), body: JSON.stringify(body) })
  .then(response => response.json());
}

function authPut(url, body) {
  return fetch(url, { method: 'PUT', headers: authHeader(), body: JSON.stringify(body) })
  .then(response => response.json());
}

export { get, authGet, post, authPost, authPut , getParam};