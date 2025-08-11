import './NavbarPC.css';
import { Link } from 'react-router-dom';


export const NavbarPC = ()=>{
    return(
        <>
          <ul className="menu-links desaparece-dispositivo aparece-PC">
                <li className="linea-bottom py-1 mx-3"><a href="#caracteristicas" className='a'>Caracteristicas</a></li>
                <li className="nav-item dropdown mx-3">
                    <a className="nav-link dropdown-toggle mb-2 py-1" role="button" data-bs-toggle="dropdown">Contacto</a>
                    <ul className="dropdown-menu mt-4">
                        <li><a href="#contacto-nosotros" className="dropdown-item item-link-menu">Nosotros</a></li>
                        <li><a href="#contacto-contactar" className="dropdown-item item-link-menu">Contacto</a></li>

                    </ul>
                    
                </li>
                 <li className="linea-bottom py-1 mx-3"><a href="#servicios" className='a'>Servicios</a></li>
                 <li className="linea-bottom py-1 mx-3"><Link to='/agendar' className="a" >Agendar</Link></li>

           
            </ul>

        
        </>
    )
}