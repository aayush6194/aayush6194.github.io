import { safeGetLocalStorage } from "../utils/localstorage";

function header() {
  return { "Content-Type": "application/json" };
}

function authHeader() {
  let authtoken = safeGetLocalStorage('token');
  return { "Content-Type": "application/json", token: authtoken };
}

export { header , authHeader };