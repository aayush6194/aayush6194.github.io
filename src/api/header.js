function header() {
  return { "Content-Type": "application/json" };
}

function authHeader() {
  let authtoken = localStorage.getItem("token")? localStorage.getItem("token"): null;
  return { "Content-Type": "application/json", token: authtoken };
}

export { header , authHeader };