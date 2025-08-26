import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {HeadProvider} from 'react-head'
import './index.css'
import { Layout } from './components/Layout/Layout.tsx'
import { Inicio } from './pages/Inicio/Inicio.tsx'
import { Agendar } from './pages/Agendar/Agendar.tsx'
import { TerminosCondiciones } from './pages/TerminosCondiciones/TerminosCondiciones.tsx'
import { PoliticasPrivacidad } from './pages/PoliticasPrivacidad/PoliticasPrivacidad.tsx'
import { RegisterUser } from './pages/RegisterUser/RegisterUser.tsx'
import { LoginUser } from './pages/LoginUser/LoginUser.tsx'

const router = createBrowserRouter([
  {
     path:'/',
     element:<Layout />,
     children:[
      {index:true,element:<Inicio />},
      {path:'inicio',element:<Inicio />},
      {path:'agendar',element:<Agendar />},
      {path:'terminos-condiciones',element:<TerminosCondiciones />},
      {path:'politicas-privacidad',element:<PoliticasPrivacidad />},
     ]

  },
  {
    path:'/login-user',
    element:<LoginUser />
  },
  

  {
    path:'/register-user',
    element:<RegisterUser />
  }
],{
  basename:'/calcularai/'
})

createRoot(document.getElementById('root')!).render(
  <HeadProvider>
        <RouterProvider router={router} />
  </HeadProvider>
)
