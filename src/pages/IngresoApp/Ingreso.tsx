import './Ingreso.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { login } from '../../components/apis/apis';
import { Title, Meta } from 'react-head'
import { useNavigate } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NavbarApp } from './NavbarApp/NavbarApp';
import { FooterApp } from './FooterApp/FooterApp';

export const Ingreso = () => {

    const [user, setUser] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [mostrar, setMostrar] = useState<boolean>(false);


    const navigate = useNavigate();

    const toggleMostrar = () => setMostrar((prev) => !prev);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await login(user, pass);

            localStorage.setItem('token', res.data.token);
            navigate('/dashboard', { replace: true });

        } catch (error) {
            toast.error("Credenciales Incorrectas", {
                className: 'error',
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true
            })
        }
    }
    return (
        <>
            <Title>Ingreso | Calcular AI App</Title>
            <Meta name='description' content='Sitio de ingreso para entrar en la aplicacion de tensiora Electric' />
            <Meta name='keywords' content='login de tensiora electric, entrada de tensiora electric, electricos' />
            <main className='container-ingresar-calcularaiapp'>
                {/* navbar del la aplicacion */}
                <NavbarApp />
        
                <section className="flex-container-iniciar-sesion py-2">
                    <section className="flex-item-left-sesion" >
                        <article>
                            <h1 className='titulo-bienvenida-calcularaiapp-login'>Bienvenidos! A Calcular  <span className='mx-2'>AI</span> App</h1>
                        </article>
                    </section>
                    <section className="flex-item-right-sesion mx-5">
                        <form className="mx-5" onSubmit={handleSubmit} >
                            <p className="contacto">Bienvenido!</p>
                            <p className="text-center ">Ingresa tus datos </p>
                            <article className={`input-box-iniciar-sesion`} >
                                <input
                                    type="text"
                                    placeholder="Usuario"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                    className={`
                                    border p-2 rounded
                                    input-register
                                  
                                  `}
                                />

                                <FontAwesomeIcon className="i" icon={faUser} />
                            </article>
                            <article className="input-box-iniciar-sesion">
                                <input
                                    type={mostrar ? "text" : "password"}
                                    placeholder="Contraseña"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    required
                                    className={`
                                    border p-2 rounded
                                    input-register
                              
                                  `}
                                />
                                <i className="fa-regular fa-envelope"></i>
                                <FontAwesomeIcon className="i" onClick={toggleMostrar} icon={mostrar ? faEyeSlash : faEye} />
                            </article>
                            <article className="mb-2 ">
                                <p className="py-2 pt-2 mb-3">¿Aún no eres usuario? </p><Link className="registrarse"  to='/prestador'>Registrate</Link>
                            </article>

                            <button
                                type="submit"
                                className="btn-send pb-2 mb-3"
                                name="enviar"
                                id="button"


                            >
                                Ingresar

                            </button>
                            <ToastContainer />
                            <Link className="mb-5 recuperar-contrasenia"  to='/recuperar-contrasenia'>¿Olvidaste tu contraseña?</Link>
                        </form>

                    </section>
                </section>
                <FooterApp />
            </main>


        </>
    )
}