import './TerminosCondiciones.css';
import { Title, Meta } from 'react-head';


export const TerminosCondiciones = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    return (
        <>
            <Title>Términos y condiciones | Tensiora Automatic</Title>
            <Meta name="description" content="Términos y condiciones de uso para los clientes de tensiora automatic por los servicios prestados." />
            <section className="container-politica-privacidad" >
                <section className='container-politicas'>
                    <article className='terminos-condiciones'>
                        <p className='terminos-privacidad text-center'><u>TÉRMINOS Y CONDICIONES DE USO</u></p>
                        <p className='pb-3'><b>Última actualizacion:</b> {day}/{month}/{year}</p>
                        <p>Bienvenido/a a Mantech Soluciones. Al utilizar nuestros servicios, aceptás los siguientes términos y condiciones. Por favor, leé atentamente esta información.</p>
                    </article>
                    <article className='pb-3 py-3'>
                        <p><b>1. Sobre la empresa</b></p>
                        <p> <strong>Mantech Soluciones</strong> es una empresa dedicada a brindar servicios de mantenimiento preventivo, correctivo y técnico para hogares, oficinas y empresas. Nos comprometemos a ofrecer un servicio profesional, eficiente y seguro.
                        </p>
                    </article>
                    <article className='pb-3'>
                        <p><b>2. Ámbito de servicio</b></p>
                        <p>Actualmente ofrecemos nuestros servicios en Ciudad Autónoma de Buenos Aires (CABA) y en Provincia de Buenos Aires. Para zonas fuera de este alcance, la disponibilidad está sujeta a evaluación y costos adicionales.

                        </p>
                    </article>
                    <article className='pb-3'>
                        <p><b>3. Solicitud de servicios</b></p>
                        <ul>
                            <li>Los servicios deben solicitarse mediante nuestros canales oficiales: WhatsApp, formulario web o contacto telefónico.</li>
                            <li>Una vez confirmada la visita técnica o trabajo, el cliente acepta el presupuesto acordado y los tiempos estimados.
                            </li>
                        </ul>
                    </article>
                    <article className='pb-3'>
                        <p><b>4. Garantía</b></p>
                        <ul>
                            <li>Todos nuestros trabajos incluyen una garantía que varía según el tipo de servicio. Por lo general, la garantía mínima es de 30 días.</li>
                            <li>La garantía no cubre fallas ocasionadas por mal uso, manipulación por terceros, cortes de energía o condiciones externas.</li>
                        </ul>
                    </article>
                    <article className='pb-3'>
                        <p><b>5. Formas de pago</b></p>
                        <p>Aceptamos los siguientes métodos:
                        </p>
                        <ul>
                            <li>Efectivo</li>
                            <li>Transferencia bancaria</li>
                            <li>Mercado Pago</li>
                            <li>Tarjeta de crédito o débito (según disponibilidad)</li>
                        </ul>
                    </article>
                    <article className='pb-3'>
                        <p><b>6. Cancelaciones y reprogramaciones</b></p>
                        <ul>
                            <li>Se puede cancelar o reprogramar una visita con al menos 12 horas de anticipación sin costo.</li>
                            <li>Cancelaciones fuera de ese plazo pueden generar un cargo por desplazamiento.</li>
                        </ul>
                    </article>
                    <article className='pb-3'>
                        <p><b>7. Limitación de responsabilidad </b></p>
                        <p>
                            Mantech Soluciones no será responsable por daños colaterales que excedan el alcance del servicio contratado o por intervenciones realizadas por terceros luego de nuestro trabajo.
                        </p>
                    </article>
                    <article className='pb-3'>
                        <p><b>8. Modificaciones</b></p>
                        <p>
                            Nos reservamos el derecho a modificar estos términos en cualquier momento. Los cambios serán publicados en esta misma sección.
                        </p>
                    </article>
                </section>


            </section>

        </>
    )
}