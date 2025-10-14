import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/',  
  withCredentials: true,
  headers: {    
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },    
});


export const obtenerUsuarios = () => API.get('/users')
export const login = (user:string,pass:string) => API.post('/auth', {user,pass })
export const getProtected = (token:string)=>API.get('/protected',{
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export async function verificadorUsuario(user:string):Promise<{ existe: boolean }> {
    try {
        const response = await API.post('/verificar-usuario', { user });
        return response.data; // Devuelve la respuesta del servidor
    } catch (error) {
        console.error('Error al verificar el usuario:', error);
        throw error; // Lanza el error para que pueda ser manejado por el llamador
    }
}
