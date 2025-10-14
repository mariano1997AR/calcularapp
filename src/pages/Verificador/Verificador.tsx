import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { verificadorUsuario } from "../../apis/server"


export const Verificador = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const verificar = async () => {
            const user = localStorage.getItem('user')!;
            if (!user) {
                navigate('/dashboard');
                return;
            }

            try {
                const respuesta = await verificadorUsuario(user);
                if (respuesta.existe) {
                    navigate('/dashboard');
                } else {
                    navigate('/registro-organizacion');
                }
            } catch (error) {
                console.error('Error al verificar el usuario:', error);
                navigate('/login-user');
            }
        };
        verificar();
    }, [navigate]);

    return (
        <>
            <section className="container-verificador">
                  <p>Verificando usuario...</p>
            </section>
        </>
    )
}
