import './Agendar.css';
import { CalendlyWidget } from '../../components/CalendlyWidget/CalendlyWidget';
import { Title,Meta } from 'react-head';
import { FooterPage } from '../../components/FooterPage/FooterPage';
import { NavbarAgenda } from './NavbarAgenda/NavbarAgenda';


export const Agendar = () => {
    return (
        <>
            <Title>Agendar | Calcular AI</Title>
            <Meta name="keywords" content="agendar turnos con calcular AI," />
            <Meta name='description' content='sitio para agendar turnos para obtener información sobre calcular AI y como puede potenciar el negocio' />
            <Meta property='og:title' content='Inicio | Calcular AI' />
            <Meta property='og:description' content='Es el inicio de Calcular AI' />
            <Meta property='og:type' content='website' />
            <NavbarAgenda />
            <section className="container-calendario">
                <section className="flex-left-item-informacion-calendario">
                    <article>
                        <h1 className="text-3xl font-bold mb-6 text-center oscuro-logo">Reservá una reunion</h1>
                        <p className="py-3 text-2xl">
                            Hola, ¿cómo estás? Te habla Mariano Andres Martinotti de <strong>Tensiora Sales</strong>
                        </p>
                        <p className="py-3 text-2xl">
                           Me dedico a conectar negocios con productos en donde puedan elegir el mejor proveedor para sus necesidades.
                        </p>
                        <p className="py-3 text-2xl">
                            Me gustaría coordinar una breve reunión (presencial o virtual) para contarte cómo podemos ayudarte a optimizar el mantenimiento de tus instalaciones y reducir costos a largo plazo.
                        </p>
                        <p className="py-3 text-2xl">
                            ¿Qué día y horario te resultaría cómodo para agendarla?
                        </p>
                    </article>
                </section>
                <section className="flex-right-item-calendario">
                    <article>
                        <CalendlyWidget />
                    </article>
                </section>
            </section>
            <FooterPage />


        </>
    )
}