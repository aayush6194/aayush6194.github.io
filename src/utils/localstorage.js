const IS_BROWSER = typeof window !== "undefined";

// Safely get a value from localStorage
export function safeGetLocalStorage(key) {
  if (IS_BROWSER && window.localStorage) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error(`Error getting key "${key}" from localStorage:`, error);
    }
  }
  return null; // Return null if not in the browser or an error occurs
}

// Safely set a value in localStorage
export function safeSetLocalStorage(key, value) {
  if (IS_BROWSER && window.localStorage) {
    try {
      localStorage.setItem(key, value);
      return true; // Return true if the value is set successfully
    } catch (error) {
      console.error(`Error setting key "${key}" in localStorage:`, error);
    }
  }
  return false; // Return false if not in the browser or an error occurs
}
