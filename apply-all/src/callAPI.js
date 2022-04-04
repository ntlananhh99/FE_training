import axios from 'axios';

const api = axios.create({
  contentType: 'multipart/form-data',
  responseType: 'json',
  baseURL: "https://reqres.in/"
});

const login = async (payload) => {
  return await api.post("/api/login", payload)
    .then((response) => {
      return response.data
    })
    .then(data => {
      return data
    })
    .catch(error => {
      return error;
    });
}

const getUsers = async () => {
  return await api.get("/api/users?page=2")
    .then(response => response.data)
    .catch(err =>
      console.log(err.statusText));
}

export default (login, getUsers);