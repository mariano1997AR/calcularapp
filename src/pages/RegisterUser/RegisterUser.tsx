import { NavbarLogin } from '../LoginUser/NavbarLogin/NavbarLogin';
import './RegisterUser.css';
import{ useState } from "react";
import { Title } from 'react-head';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import registrartePuerto from '../../assets/presentacion/calcularAI-logo-mejorado.webp'
import './RegisterUser.css'




const codigoPorPais = [
    { code: '+54', name: 'Argentina' },
    { code: '+55', name: 'Brasil' },
    { code: '+598', name: 'Uruguay' },
]


export const RegisterUser = ()=>{
      const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        pass: ''
    });

    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        telefono: '',
        pass: ''
    });

    const [prefix, setPrefix] = useState<string>('');
    const [checked,setChecked] = useState<boolean>(false);

    const handleChangeChecked = (e:React.ChangeEvent<HTMLInputElement>)=>{
         setChecked(e.target.checked);
    }



    const validate = () => {
        let valid = true;

        const newErrors = {
            nombre: '',
            email: '',
            telefono: '',
            pass: ''
        }

        //Valida nombre: solo letras y espacios
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido';
            valid = false;

        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.nombre)) {
            newErrors.nombre = 'Solo letras y espacios en blanco';
            valid = false;
        }

        // Valida email con expresion regular

        if (!formData.email.trim()) {
            newErrors.email = 'El correo es requerido';
            valid = false;
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = 'Formato de correo no válido';
            valid = false;
        }

        //Validar password
        if (!formData.pass) {
            newErrors.pass = 'La contraseña es requerida';
            valid = false;
        } else if (formData.pass.length < 8 ||
            !/[A-Z]/.test(formData.pass) ||
            !/[a-z]/.test(formData.pass) ||
            !/\d/.test(formData.pass) ||
            !/[!@#$%^&*]/.test(formData.pass)
        ) {
            newErrors.pass = 'Debe ser segura (8 + ca)';
            valid = false;
        }

        //Valida el telefono
        if (formData.telefono && !/^\d{6,}$/.test(formData.telefono)) {
            newErrors.telefono = 'El telefono es requerido';
            valid = false;
        } else if (!/^\d+$/.test(formData.telefono)) {
            newErrors.telefono = 'Formato no valido';
            valid = false;
        }

        setErrors(newErrors);
        return valid;

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const telefonoCompleto = `${prefix}${formData.telefono}`;

        setFormData(prev => ({
            ...prev,
            telefono: telefonoCompleto
        }));

        if (!validate()) return;


        console.log(telefonoCompleto);

        try {
            const res = await fetch('http://localhost:3000/registeruser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),

            });

            const result = await res.json();
            console.log('Respuesta del servidor: ', result);

            toast.success('Datos enviados correctamente', {
                autoClose: 3000,
            })
        } catch (error) {
            console.error('Error al enviar datos: ', error);
        }



    };

  
    
    return(
        <>
            <Title> Registro Usuario | Calcular AI</Title>
            <NavbarLogin />
            <main className="flex-container-register">

                <section className="flex-item-left-register">
                    <img
                        src={registrartePuerto}
                        alt="Imagen ilustrativa de un albañil donde gracias a LabureYA pudo conseguir su trabajo"
                        className="img-left-sesion"
                        loading="lazy"
                    />
                </section>
                <section className="flex-item-right-register mx-5">
                    <form className="mx-5" onSubmit={handleSubmit} >
                        <p className=" text-center">¿Aún no eres un usuario?</p>
                        <p className="text-center">Ingresas los datos para registrarte</p>
                        <article className="input-box-register">
                            <input
                                type="text"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Pablo Perez"
                                name="nombre"
                                required
                                className={`
                                    border p-2 rounded
                                    input-register
                                    placeholder-claro
                                 
                                  `}
                            />
                            <FontAwesomeIcon className="i" icon={faUser} />
                            {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}
                        </article>
                        <article className="input-box-register">
                            <input
                                type="password"
                                placeholder="Elija tu contraseña"
                                value={formData.pass}
                                onChange={handleChange}
                                name="pass"
                                required
                                className={`
                                    border p-2 rounded
                                    input-register
                                    placeholder-claro
                                  `}
                            />
                            <FontAwesomeIcon className="i" icon={faKey} />
                            {errors.pass && <p style={{ color: 'red' }}>{errors.pass}</p>}
                        </article>
                        <article className="input-box-register">
                            <input
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Pablo@gmail.ccom"
                                name="email"
                                required
                                className={`
                                    border p-2 rounded
                                    input-register
                                    placeholder-claro
                                  `}
                            />

                            <FontAwesomeIcon className="i" icon={faEnvelope} />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </article>
                        <article className="input-box-register">
                            <section>
                                <select value={prefix} onChange={e => setPrefix(e.target.value)} className="input-telefono" >
                                    {codigoPorPais.map((c) => (
                                        <option key={c.code} value={c.code} className="opcion-pais">
                                            ({c.code})
                                        </option>
                                    ))}


                                </select>
                                <input
                                    type="text"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    placeholder="123456789"
                                    name="telefono"
                                    required
                                    className={`
                                        input-tel
                                        
                                        input-register
                                    
                                    
                                      `}
                                />

                            </section>
                            {errors.telefono && <p style={{ color: 'red' }}>{errors.telefono}</p>}

                        </article>
                        <article className="mb-1 py-1 ">
                            <p className="py-2 pt-2 mb-4">Si ya tienes usuario</p><Link className="iniciar-sesion-btn" style={{border:'2px solid black ',color:'#333'}} to='/login-user'>Inicia Sesión</Link>
                        </article>

                        <article className="my-3">
                            <input
                                type="checkbox"
                                id="aceptar-terminos"
                                checked={checked}
                                onChange={handleChangeChecked}
                                className="mr-2"
                                required

                            />
                            <label htmlFor="aceptar-terminos" className="px-2">
                                 Acepto los terminos y condiciones
                            </label>
                        </article>

                        <input type="submit" className="btn-send pb-2" name="enviar" id="button" value="Enviar" />

                        {/* contenedor de toast (modal para el alert de que  se enviaron los datos correctamente) */}

                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            pauseOnHover
                            draggable
                            theme="dark"


                        />
                    </form>

                </section>
            </main>
        
        </>
    )
}