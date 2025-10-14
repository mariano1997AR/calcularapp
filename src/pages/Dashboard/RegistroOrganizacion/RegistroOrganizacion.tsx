import './RegistroOrganizacion.css'
import { useState, useEffect } from 'react';
import { StepOne } from '../../Configuracion/StepOne'// Make sure this path is correct and the file exists
import { StepTwo } from '../../Configuracion/StepTwo';
import { StepThree } from '../../Configuracion/StepThree';
import { NavbarDashboard } from '../../../components/NavbarDashboard/NavbarDashboard';
import { useNavigate } from 'react-router-dom';
import { getProtected } from '../../../apis/server';


export const RegistroOrganizacion = () => {
    const [loader, setLoader] = useState<boolean>(true);
    const [step, setStep] = useState<number>(1);
    const [message, setMessage] = useState<string>("");
    const [user, setUser] = useState<string>("");

    const navigate = useNavigate();

    //loader 
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    //enviar datos al servidor donde por medio jwt  validamos el token
    useEffect(() => {
        const token = localStorage.getItem('token')!;
        getProtected(token)
            .then(res => {
                const { message, user } = res.data;
                setMessage(message)
                setUser(user);
            })
            .catch(() => {
                localStorage.removeItem('token');
                navigate('/login');
            });
    }, [navigate]);

    const handleFinish = () => {
        alert('Formulario completado');
        setStep(1);
    }





    return (
        <>
            <section className="container-registro-organizacion">
                <NavbarDashboard user={user} message={message} />
                {loader ? <header><svg className="svg-container-carga" width="60" height="60" viewBox="0 0 50 50"><g fill="black" strokeWidth="2"><rect x="10" y="10" width="10" height="30"><animate attributeName="height" values="30;20;30" dur="1s" repeatCount="indefinite"></animate></rect><rect x="25" y="10" width="10" height="30"><animate attributeName="height" values="30;10;30" dur="1s" repeatCount="indefinite"></animate></rect><rect x="40" y="10" width="10" height="30"><animate attributeName="height" values="30;25;30" dur="1s" repeatCount="indefinite"></animate></rect></g></svg></header> :
                    <section className="container-capas">
                        <article className="container-pasos mx-3 mt-10 mb-4">
                            {step === 1 && <StepOne onNext={() => setStep(2)} />}
                            {step === 2 && <StepTwo onBack={() => setStep(1)} onSiguiente={() => setStep(3)} />}
                            {step === 3 && <StepThree onBack={() => setStep(2)} onFinish={handleFinish} />}
                        </article>

                    </section>
                }
            </section>
        </>
    )
}   