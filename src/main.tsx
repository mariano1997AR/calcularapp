import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {HeadProvider} from 'react-head'
import './index.css'
import { Layout } from './components/Layout/Layout.tsx'
import { Inicio } from './pages/Inicio/Inicio.tsx'
import { Agendar } from './pages/Agendar/Agendar.tsx'
import { TerminosCondiciones } from './pages/TerminosCondiciones/TerminosCondiciones.tsx'
import { PoliticasPrivacidad } from './pages/PoliticasPrivacidad/PoliticasPrivacidad.tsx'
import { GeneradorComprobantes } from './pages/GeneradorComprobantes/GeneradorComprobantes.tsx'

const router = createBrowserRouter([
  {
     path:'/',
     element:<Layout />,
     children:[
      {index:true,element:<Inicio />},
      {path:'inicio',element:<Inicio />},
   
      {path:'terminos-condiciones',element:<TerminosCondiciones />},
      {path:'politicas-privacidad',element:<PoliticasPrivacidad />},
      {path:'generar-comprobantes',element:<GeneradorComprobantes />}
     ]

  },
  {
   path:'/agendar',
   element:<Agendar />
  },

],{
  basename:'/calcularapp/'
})

createRoot(document.getElementById('root')!).render(
  <HeadProvider>
        <RouterProvider router={router} />
  </HeadProvider>
)
