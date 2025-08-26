import './LoginUser.css';
import { NavbarLogin } from './NavbarLogin/NavbarLogin';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { login } from '../../apis/server'; 
import './LoginUser.css';
import logoCalcularAi from '../../assets/presentacion/calcularAI-logo-mejorado.webp';
import { Title } from 'react-head';

export const LoginUser = () => {


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
            <Title>Ingreso App | Calcular AI</Title>
            <NavbarLogin />
            <main className='container-ingresar-calcularaiapp'>
                <section className="flex-container-iniciar-sesion py-2">
                    <section className="flex-item-left-sesion" >
                        <img
                            src={logoCalcularAi}
                            alt="imagen de calcular ai"
                            loading='lazy'
                            className='imagen-calcularai-app'

                        />
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
                                <p className="py-2 pt-2 mb-3">¿Aún no eres usuario? </p><Link className="registrarse" to='/register-user'>Registrate</Link>
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
                            <Link className="mb-5 recuperar-contrasenia" to='/recuperar-contrasenia'>¿Olvidaste tu contraseña?</Link>
                        </form>

                    </section>
                </section>
            </main>

        </>
    )
}