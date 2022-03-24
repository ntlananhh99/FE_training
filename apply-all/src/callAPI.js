import axios from 'axios';
const api = axios.create({
    contentType:'multipart/form-data',
    responseType: 'json',
    baseURL: "https://reqres.in/" 
  });
export default async function  login (payload) {
    return await api.post("/api/login", payload)
    .then((response)=> {return response.data} )
    .then (data=> {return data})
    .catch (error =>{
            return error;
      });   
}
