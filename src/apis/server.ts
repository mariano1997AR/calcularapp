import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:3000/',  
  withCredentials: true,
  headers: {    
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },    
});


export const login = (user:string,pass:string) => API.post('/auth', {user,pass })
export const getProtected = (token:string)=>API.get('/protected',{
    headers: {
        'Authorization': `Bearer ${token}`
    }
})