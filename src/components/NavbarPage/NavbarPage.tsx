import './NavbarPage.css';
import { NavbarPC } from '../NavbarPC/NavbarPC';
import { NavbarPhone } from '../NavbarPhone/NavbarPhone';


export const NavbarPage = () => {
    return (
        <>
            <nav className=" mb-4">
              

                {/* Aparece de forma en PC pero no en dispositivos */}
                {/* dividirlo en componente NavbarPC */}
                <section>
                    <NavbarPC />
                </section>

                {/* Aparece en dispositivos pero no en pc (solo a partir de 1060px) */}
                {/* dividirlo en componentes en NavbarResponsive */}

                <section className='aparecer-responsive'>
                    <NavbarPhone />
                </section>


            </nav>

        </>
    )
}