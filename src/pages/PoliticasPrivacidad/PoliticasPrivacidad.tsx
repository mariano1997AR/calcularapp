import './PoliticasPrivacidad.css';
import { Title, Meta } from 'react-head';


export const PoliticasPrivacidad = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    return (
        <>

            <Title>Politicas de Privacidad | Quantum System</Title>
            <Meta name="description" content="Politicas de privacidad para los clientes de tensiora automatic por los servicios prestados." />
            <section className="container-politica-privacidad" >
                <section className='container-politicas'>
                    <article className='terminos-condiciones'>
                        <p className='terminos-privacidad text-center'><u>POLITICAS DE PRIVACIDAD</u></p>
                        <p className='pb-3'><b>Última actualizacion:</b> {day}/{month}/{year}</p>
                        <p>
                            En Quantum, nos comprometemos a proteger la privacidad y la seguridad de la información personal de nuestros clientes, visitantes y usuarios. Esta política explica cómo recopilamos, utilizamos y protegemos sus datos.
                        </p>
                    </article>
                    <article className='pb-3 py-3'>
                        <p><b>1. Información que recopilamos</b></p>
                        <p>Podemos recopilar la siguiente información:</p>
                        <ul>
                            <li>Nombre y Apellido</li>
                            <li>Datos de contacto (correo electrónico, teléfono,dirección)</li>
                            <li>Información de facturación y pago</li>
                            <li>Datos enviados voluntariamente a través de formularios o encuestas</li>
                        </ul>
                    </article>
                    <article className='pb-3'>
                        <p><b>2. Uso de la información</b></p>
                        <p>
                            Utilizamos la inforamción para:
                        </p>
                        <ul>
                            <li>Proporcionar y mejorar nuestros servicios</li>
                            <li>Responder consultas y solicitudes</li>
                            <li>Procesar pagos y facturación</li>
                            <li>Enviar comunicaciones relacionadas con nuestros servicios, promociones o avisos legales</li>
                        </ul>
                    </article>
                    <article className='pb-3'>
                        <p><b>3. Protección de datos</b></p>
                        <p>
                            Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra accesos no autorizados, pérdidas o alteraciones.
                        </p>
                    </article>
                    <article className='pb-3'>
                        <p><b>4. Compartir información con terceros</b></p>
                        <p>
                            No vendemos, alquilamos ni cedemos su información personal.
                            Podemos compartir datos solo cuando sea necesario para:
                        </p>
                        <ul>
                            <li>Cumplir con obligaciones legales</li>
                            <li>Procesar pagos a través de plataformas seguras</li>
                            <li>Ejecutar servicios contratados con proveedores confiables</li>
                        </ul>
                    </article>
                    <article className='pb-3'>
                        <p><b>5. Derechos del usuario</b></p>
                        <p>Usted puede: </p>
                        <ul>
                            <li>Acceder a sus datos personales</li>
                            <li>Solicitar la rectificación o eliminación</li>
                            <li>Mercado Pago</li>
                            <li>Retirar su consentimeinto en cualquier momento</li>
                        </ul>
                    </article>
                    <article className='pb-3'>
                        <p><b>6. Cambios en esta politica</b></p>
                        <p>
                            Podemos actualizar esta política de privacidad cuando sea necesario. La fecha de última actualización será siempre visible.

                        </p>
                    </article>

                </section>


            </section>

        </>
    )
}