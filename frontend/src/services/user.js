import axios from "axios";

// Get list of all users
export const getUsers = async() => {
    return await axios.get("http://localhost:8000/api/users")
    .then(response => { return response.data });
}

// Create new user
export const setUser = async(userData) => {
  return await axios.post("http://localhost:8000/api/users", userData)
  .then(response => { return response.data });
}
  