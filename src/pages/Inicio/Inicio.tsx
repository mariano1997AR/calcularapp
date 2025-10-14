import './Inicio.css';
import { useState, useEffect, useRef } from 'react';
import arca from '../../assets/brands/arca-brand1.webp'
import bcra from '../../assets/brands/bcra-actualizada-400x400.webp'
import logoCalcularAI from '../../assets/presentacion/calcularAI-logo-mejorado.webp'
import python from '../../assets/brands/Python-Logo-400x400.webp';
import mistralAI from '../../assets/brands/MistralAI-400x400.webp';
import excelLogo from '../../assets/brands/excel-logo-400x400.webp';
import { Contacto } from '../Contacto/Contacto';
import { Title, Meta } from 'react-head';
import marcasuiza from '../../assets/brands/marca-suiza-mejorado.webp'


const frases = [
    "Bienvenido a CalcularAI",
    "Más que contabilidad, soluciones digitales para tu negocio",
    "Tu socio contable en la nube",
    "Donde la contabilidad se encuentra con la tecnología",
    "Simplificamos tus finanzas, potenciamos tu empresa",
    "Trabajamos con transparencia, responsabilidad y pasión por lo que hacemos.",

]

const brands = [
    arca,
    bcra,
    python,
    mistralAI,
    excelLogo

]



export const Inicio = () => {
    const [fraseActual, setFraseActual] = useState<string>(frases[0]);
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const carouselRef = useRef<any>(null);


    useEffect(() => {
        const interval = setInterval(() => {
            setFraseActual(frases[Math.floor(Math.random() * frases.length)]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()


    }, []);



    useEffect(() => {
        const scrollCarousel = () => {
            if (carouselRef.current) {
                carouselRef.current.scrollleft += 1;
                if (carouselRef.current.scrollleft >= carouselRef.current.scrollWidth / 2) {
                    carouselRef.current.scrollleft = 0;
                }
            }
        };

        const interval = setInterval(scrollCarousel);
        return () => clearInterval(interval);

    }, [])


    return (
        <>
            <Title>Inicio | Tensiora Sales</Title>
            <Meta name="keywords" content="Contabilidad digital, Asesoría contable inteligente, Gestión fiscal automatizada,Auditoría con inteligencia artificial,Declaraciones impositivas automáticas, Planificación fiscal optimizada, soluciones digitales, Control financiero inteligente, Automatización contable,sistemas de gestión, automatización, bots,Análisis financiero predictivo" />
            <Meta name='description' content='Somos una consultora contable innovadora que integra inteligencia artificial para optimizar la gestión financiera, la planificación fiscal y la toma de decisiones estratégicas. Ofrecemos soluciones inteligentes para automatizar procesos, reducir errores y maximizar la eficiencia de pymes, autónomos y organizaciones, brindando un servicio ágil, preciso y personalizado.' />
            <Meta property='og:title' content='Inicio | Calcular AI' />
            <Meta property='og:description' content='Es el inicio de Calcular AI' />
            <Meta property='og:type' content='website' />
            <main className='container-inicio'>





                {/* caracteristicas principales de calcular AI */}

                <section>
                    <section className='desaparecer-pc aparecer-phone'>
                        <h1 className='text-center oscuro-logo py-2 mx-2'>Bienvenidos  </h1>
                        <p className="text-center parrafo-presentacion-phone ">
                            <strong> {fraseActual}</strong>
                        </p>
                    </section>
                    <section>
                        <article ref={ref} className={`zoom-animado py-4 ${visible ? 'visible' : ''}`} id="caracteristicas-aplicacion-calcularai">
                            <h2 className='text-center titulo-caracteristica oscuro-logo' >Productos</h2>

                            <article>
                                <p className='parrafo-caracteristicas py-2'>
                                    Productos a tu medida, con la mejor calidad y al mejor precio.
                                </p>
                            </article>
                            <article>
                                <article className='container-card-caracteristica py-4'>
                                    <article className='cards'>
                                        <article className='svg-container'>
                                            <a href="https://drive.google.com/file/d/1rV_S3WUzViGHInLqvP4Lg1nUAqxI_jBg/view?usp=sharing" target='_blank' download>
                                                <img src={marcasuiza} alt="catologo de la marca suiza" />
                                            </a>

                                        </article>
                                        <h4 className='text-2xl py-2 text-center subtitulo-caracteristicas'>Marca Suiza</h4>
                                        <p className='text-sm parrafo-automatizado'>
                                            Elige los productos de  <strong>suiza</strong> para tu negocio, calidad y confianza garantizadas.

                                        </p>
                                    </article>
                                    <article className='cards'>
                                        <article className='svg-container'>
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                                <metadata>
                                                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                                                    <meta name="Producer" content="Online-Convert" /></metadata>
                                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                                    <path d="M3031 5109 c-42 -13 -109 -79 -671 -659 -438 -453 -440 -455 -440 -497 0 -41 4 -47 176 -223 163 -166 176 -182 162 -198 -29 -32 -59 -104 -69 -162 -23 -143 46 -280 175 -348 97 -51 267 -31 342 39 l21 20 175 -181 c174 -180 175 -180 219 -180 43 0 46 2 141 102 54 57 98 96 98 88 1 -42 23 -167 46 -260 30 -121 76 -238 129 -329 40 -68 151 -192 197 -218 l28 -17 0 -123 0 -123 -60 0 c-103 0 -100 10 -100 -320 0 -267 1 -281 20 -300 11 -11 29 -20 40 -20 20 0 20 -7 20 -560 l0 -560 80 0 80 0 0 560 0 560 480 0 480 0 0 -560 0 -560 80 0 80 0 0 560 c0 553 0 560 20 560 11 0 29 9 40 20 19 19 20 33 20 300 0 330 3 320 -100 320 l-60 0 0 88 c0 49 36 484 80 967 44 483 80 902 80 931 0 35 -6 58 -17 72 -10 11 -163 146 -339 300 -209 182 -332 282 -350 286 -16 3 -147 20 -292 37 l-263 33 -251 258 c-137 142 -266 267 -285 279 -41 26 -156 35 -212 18z m136 -176 c11 -10 175 -178 363 -373 189 -195 399 -411 466 -480 l123 -125 -134 -140 -133 -139 -40 28 c-60 41 -108 55 -192 55 -77 1 -129 -15 -190 -59 -18 -13 -44 -20 -71 -20 -42 0 -47 -3 -181 -138 -135 -135 -138 -139 -138 -181 0 -43 4 -48 117 -163 l117 -118 -77 -78 -78 -77 -172 178 c-213 220 -211 219 -311 129 -36 -33 -80 -64 -97 -67 -96 -21 -179 48 -179 149 0 62 12 89 67 147 39 42 48 57 48 88 0 35 -12 50 -174 219 -95 99 -172 184 -171 189 1 8 382 402 773 801 201 205 218 216 264 175z m982 -599 l134 -16 281 -245 c155 -136 287 -251 294 -258 10 -9 -1 -169 -63 -846 -52 -582 -75 -880 -75 -982 l0 -147 -400 0 -400 0 0 84 0 84 80 -5 80 -6 0 85 0 85 -60 6 c-196 17 -353 188 -434 473 -30 104 -56 258 -56 329 0 93 -11 111 -152 252 l-133 133 58 57 57 58 330 -330 330 -330 62 63 63 62 -113 113 -112 112 0 169 0 168 199 203 c114 117 200 213 203 226 2 13 2 34 -1 46 -4 13 -84 104 -180 203 -120 126 -166 179 -150 176 13 -3 84 -13 158 -22z m-423 -785 c34 -33 34 -33 34 -128 l0 -96 -115 115 c-124 124 -128 133 -54 149 50 11 97 -3 135 -40z m1154 -2029 l0 -160 -560 0 -560 0 0 160 0 160 560 0 560 0 0 -160z" />
                                                    <path d="M1195 4800 l-60 -60 203 -203 202 -202 62 63 63 62 -200 200 c-110 110 -202 200 -205 200 -3 0 -32 -27 -65 -60z" />
                                                    <path d="M960 4160 l0 -80 320 0 320 0 0 80 0 80 -320 0 -320 0 0 -80z" />
                                                    <path d="M1335 3780 l-200 -200 63 -62 62 -63 202 202 203 203 -60 60 c-33 33 -62 60 -65 60 -3 0 -95 -90 -205 -200z" />
                                                    <path d="M215 3341 c-22 -10 -54 -34 -72 -52 -68 -72 -63 48 -63 -1609 0 -1657 -5 -1537 63 -1609 18 -18 50 -42 72 -52 38 -18 100 -19 1545 -19 1445 0 1507 1 1545 19 22 10 54 34 72 52 66 70 63 29 63 879 0 757 0 770 -20 790 -19 19 -33 20 -280 20 l-260 0 0 38 c0 50 -49 149 -96 194 -22 20 -65 49 -97 64 -53 24 -68 26 -145 22 -64 -3 -98 -10 -130 -27 -91 -47 -161 -146 -170 -242 l-5 -49 -198 0 -199 0 0 260 c0 247 -1 261 -20 280 -15 15 -33 20 -71 20 -149 0 -247 88 -218 194 22 81 77 116 192 124 125 8 117 -17 117 362 0 307 -1 321 -20 340 -20 20 -33 20 -792 20 -732 0 -775 -1 -813 -19z m1465 -340 l0 -198 -49 -5 c-96 -9 -195 -79 -242 -170 -17 -32 -24 -66 -27 -130 -4 -77 -2 -92 22 -145 15 -32 44 -75 64 -97 45 -47 144 -96 195 -96 l37 0 0 -200 0 -200 -260 0 c-310 0 -293 7 -303 -119 -7 -95 -28 -138 -83 -172 -46 -28 -102 -28 -148 0 -55 34 -76 77 -83 172 -10 126 7 119 -303 119 l-260 0 0 674 c0 476 3 683 11 706 22 60 6 59 752 60 l677 0 0 -199z m957 -1113 c52 -31 73 -75 80 -169 10 -126 -7 -119 303 -119 l260 0 0 -675 c0 -746 1 -732 -60 -754 -23 -8 -230 -11 -706 -11 l-674 0 0 199 0 198 49 5 c95 9 194 78 243 170 20 37 23 58 23 148 0 91 -3 111 -23 149 -51 94 -166 171 -257 171 l-35 0 0 200 0 200 260 0 c310 0 294 -6 302 117 8 114 37 161 115 188 43 15 74 11 120 -17z m-1995 -337 c9 -96 79 -195 170 -242 65 -34 194 -38 270 -9 103 39 186 144 196 251 l5 49 198 0 199 0 0 -260 c0 -310 -6 -294 118 -303 126 -8 192 -62 192 -157 0 -95 -66 -149 -192 -157 -124 -9 -118 7 -118 -303 l0 -260 -674 0 c-476 0 -683 3 -706 11 -61 22 -60 8 -60 754 l0 675 199 0 198 0 5 -49z" />
                                                    <path d="M400 400 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z" />
                                                    <path d="M720 400 l0 -80 400 0 400 0 0 80 0 80 -400 0 -400 0 0 -80z" />
                                                </g>
                                            </svg>

                                        </article>


                                        <h4 className='text-2xl py-2 text-center subtitulo-caracteristicas'>Desarrollo de soluciones personalizadas</h4>
                                        <p className='text-sm parrafo-automatizado'>
                                            crear <strong>software, sistemas o herramientas</strong> diseñadas específicamente para las necesidades únicas del cliente.
                                        </p>
                                    </article>
                                    <article className='cards'>
                                        <article className='svg-container' >
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                                <metadata>
                                                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                                                    <meta name="Producer" content="Online-Convert" /></metadata>
                                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                                    <path d="M1737 4936 c-71 -26 -88 -53 -110 -176 -8 -47 -25 -110 -36 -141 -52 -137 -176 -272 -321 -349 -91 -48 -124 -85 -136 -149 -10 -49 20 -255 62 -421 185 -749 614 -1317 1232 -1633 65 -34 123 -57 142 -57 42 0 206 85 350 181 278 186 510 430 687 724 193 321 326 712 374 1098 19 158 -7 210 -140 277 -207 104 -330 279 -365 519 -9 59 -31 98 -69 121 -31 19 -56 20 -832 20 -643 -1 -807 -4 -838 -14z m1587 -193 c27 -238 227 -505 451 -604 24 -11 47 -24 50 -30 10 -15 -23 -221 -60 -374 -165 -685 -564 -1227 -1118 -1520 l-76 -40 -56 28 c-31 15 -97 52 -147 83 -496 302 -845 795 -1009 1424 -27 105 -69 330 -69 372 0 12 22 29 63 49 151 76 286 212 359 364 39 82 78 216 78 267 l0 28 743 3 c408 1 752 3 763 5 19 2 22 -5 28 -55z" />
                                                    <path d="M1954 4659 c-44 -13 -66 -43 -105 -144 -60 -160 -170 -303 -317 -412 -97 -72 -106 -88 -99 -166 11 -108 53 -259 77 -279 48 -39 130 -9 130 48 0 12 -11 70 -25 130 -13 60 -23 109 -22 109 29 14 120 92 178 152 107 111 182 228 234 366 l18 47 538 0 c459 0 539 -2 539 -14 0 -35 114 -237 177 -315 59 -72 185 -189 237 -218 14 -8 13 -20 -9 -118 -31 -135 -31 -140 0 -170 32 -33 84 -34 112 -2 23 24 73 236 73 305 -1 53 -16 75 -95 130 -166 118 -277 262 -345 450 -14 38 -34 72 -52 87 l-30 25 -591 -1 c-326 0 -606 -5 -623 -10z" />
                                                    <path d="M3000 4051 c-20 -5 -75 -81 -252 -346 -125 -187 -229 -344 -232 -350 -2 -5 -44 28 -92 76 -154 148 -181 169 -214 169 -42 0 -80 -39 -80 -81 0 -29 17 -49 143 -170 233 -224 249 -234 301 -186 14 12 138 192 275 400 218 327 251 383 251 416 0 55 -42 85 -100 72z" />
                                                    <path d="M1644 3470 c-28 -11 -54 -48 -54 -75 0 -33 131 -289 204 -398 167 -249 383 -459 628 -608 114 -69 143 -76 200 -51 26 11 86 46 134 78 309 203 575 518 731 864 48 105 53 150 23 180 -24 24 -91 27 -110 5 -7 -8 -41 -74 -76 -146 -164 -336 -387 -593 -682 -783 l-72 -47 -61 36 c-155 95 -347 262 -463 404 -89 108 -179 252 -250 395 -58 116 -71 136 -98 145 -17 6 -31 11 -32 10 -1 0 -11 -4 -22 -9z" />
                                                    <path d="M92 2569 c-28 -14 -51 -36 -67 -64 l-25 -42 0 -1022 c0 -1102 -3 -1047 52 -1098 54 -51 72 -53 445 -53 316 0 352 2 388 19 45 20 92 70 100 104 2 12 8 40 12 63 l8 41 460 -175 460 -176 110 -3 c99 -4 187 7 875 106 421 61 794 118 830 126 77 19 187 71 250 118 76 57 1055 942 1078 975 52 73 68 202 36 296 -22 64 -100 147 -166 177 -71 31 -183 32 -248 3 -25 -12 -269 -170 -543 -352 -399 -267 -503 -332 -529 -332 -18 0 -63 3 -99 6 l-67 7 -12 73 c-28 176 -154 322 -317 367 -35 10 -263 34 -578 61 -286 25 -543 50 -571 56 -54 11 -256 107 -413 195 -168 94 -325 147 -481 163 l-75 7 -6 122 c-8 147 -30 197 -102 232 -42 20 -58 21 -403 21 -345 0 -361 -1 -402 -21z m738 -158 c6 -12 10 -124 10 -294 0 -263 1 -275 20 -292 29 -26 85 -25 112 3 20 19 23 35 26 125 l4 103 68 -8 c112 -13 238 -55 360 -120 239 -127 377 -195 440 -217 54 -18 161 -30 619 -71 305 -28 569 -54 586 -60 56 -19 122 -67 154 -113 29 -42 69 -162 58 -174 -3 -2 -323 -24 -712 -48 -782 -49 -738 -49 -811 15 -57 50 -127 32 -140 -35 -12 -62 88 -151 196 -174 53 -11 256 -2 950 46 275 19 479 27 670 28 l275 0 510 342 c281 188 524 347 540 353 62 23 146 -14 180 -81 21 -39 19 -108 -4 -144 -29 -48 -1033 -946 -1098 -982 -80 -45 -159 -69 -288 -88 -1119 -163 -1505 -215 -1540 -209 -22 3 -236 81 -475 171 -239 91 -458 174 -487 185 l-52 19 -3 444 c-3 419 -4 444 -22 464 -24 26 -91 29 -118 4 -17 -15 -18 -46 -18 -565 0 -360 -4 -556 -10 -569 -10 -18 -25 -19 -335 -19 -310 0 -325 1 -335 19 -14 27 -14 1915 0 1942 10 18 25 19 335 19 310 0 325 -1 335 -19z" />
                                                    <path d="M435 1114 c-91 -23 -160 -74 -197 -147 -46 -91 -30 -216 39 -296 98 -115 282 -123 391 -18 99 95 109 257 22 367 -51 65 -181 112 -255 94z m91 -170 c71 -34 85 -115 30 -170 -27 -27 -42 -34 -73 -34 -99 0 -147 115 -75 182 44 42 67 46 118 22z" />
                                                </g>
                                            </svg>

                                        </article>
                                        <h4 className='text-2xl py-2 text-center subtitulo-caracteristicas'>Seguridad informática</h4>
                                        <p className='text-sm parrafo-automatizado'>
                                            Vamos a implementar medidas para protegerla contra accesos no autorizados, pérdida de datos, ataques y vulnerabilidades.
                                        </p>
                                    </article>
                                </article>
                            </article>
                        </article>
                    </section>
                </section>



                {/* caracteristicas extensivas  */}

                <section className='container-sector-mas-caracteristicas' >
                    <article className='subtitulo-mas-funcionalidades'>
                        <h4 className='text-center py-2 subtitulo-mas-funcionalidades oscuro-logo' ><b>Características comerciales y de atención al cliente</b></h4>
                        <p className='text-center parrafo-mas-funcionalidades'><strong>Tensiosa Sales</strong> es tu proximo proveedor de productos</p>
                    </article>

                    <article className='container-card-caracteristica py-6 mas-funcionalidad-card'>
                        <article className='cards'>
                            <article className='svg-container'>
                                <svg className='svg-image' version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                                    </metadata>
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M1675 4554 c-467 -222 -856 -412 -862 -421 -10 -13 -13 -280 -13
-1255 0 -1225 0 -1238 20 -1258 20 -20 33 -20 840 -20 l820 0 0 -80 0 -80
-900 0 c-887 0 -900 0 -920 -20 -18 -18 -20 -33 -20 -160 l0 -140 -220 0
c-207 0 -221 -1 -240 -20 -19 -19 -20 -33 -20 -460 0 -427 1 -441 20 -460 19
-19 33 -20 540 -20 507 0 521 1 540 20 19 19 20 33 20 460 0 427 -1 441 -20
460 -19 19 -33 20 -240 20 l-220 0 0 80 0 80 840 0 840 0 0 -80 0 -80 -220 0
c-207 0 -221 -1 -240 -20 -19 -19 -20 -33 -20 -460 0 -427 1 -441 20 -460 19
-19 33 -20 540 -20 507 0 521 1 540 20 19 19 20 33 20 460 0 427 -1 441 -20
460 -19 19 -33 20 -240 20 l-220 0 0 80 0 80 840 0 840 0 0 -80 0 -80 -220 0
c-207 0 -221 -1 -240 -20 -19 -19 -20 -33 -20 -460 0 -427 1 -441 20 -460 19
-19 33 -20 540 -20 507 0 521 1 540 20 19 19 20 33 20 460 0 427 -1 441 -20
460 -19 19 -33 20 -240 20 l-220 0 0 140 c0 127 -2 142 -20 160 -20 20 -33 20
-920 20 l-900 0 0 80 0 80 820 0 c807 0 820 0 840 20 20 20 20 33 20 1258 0
975 -3 1242 -13 1255 -6 9 -395 199 -864 422 -606 288 -861 405 -885 405 -22
-1 -300 -128 -883 -406z m1695 -154 l789 -375 1 -1132 0 -1133 -160 0 -160 0
0 720 0 720 60 0 c100 0 100 1 100 240 0 187 -1 201 -20 220 -20 20 -33 20
-1420 20 -1387 0 -1400 0 -1420 -20 -19 -19 -20 -33 -20 -220 0 -239 0 -240
100 -240 l60 0 0 -720 0 -720 -160 0 -160 0 0 1133 1 1132 792 377 c436 207
800 376 810 375 10 -1 373 -171 807 -377z m470 -960 l0 -80 -1280 0 -1280 0 0
80 0 80 1280 0 1280 0 0 -80z m-160 -320 l0 -80 -1120 0 -1120 0 0 80 0 80
1120 0 1120 0 0 -80z m0 -320 l0 -80 -1120 0 -1120 0 0 80 0 80 1120 0 1120 0
0 -80z m0 -320 l0 -80 -1120 0 -1120 0 0 80 0 80 1120 0 1120 0 0 -80z m0
-320 l0 -80 -1120 0 -1120 0 0 80 0 80 1120 0 1120 0 0 -80z m0 -320 l0 -80
-1120 0 -1120 0 0 80 0 80 1120 0 1120 0 0 -80z m-3200 -1020 c0 -127 2 -142
20 -160 29 -29 79 -25 155 12 l65 32 65 -32 c76 -37 126 -41 155 -12 18 18 20
33 20 160 l0 140 80 0 80 0 0 -320 0 -320 -400 0 -400 0 0 320 0 320 80 0 80
0 0 -140z m1840 0 c0 -127 2 -142 20 -160 29 -29 79 -25 155 12 l65 32 65 -32
c76 -37 126 -41 155 -12 18 18 20 33 20 160 l0 140 80 0 80 0 0 -320 0 -320
-400 0 -400 0 0 320 0 320 80 0 80 0 0 -140z m1840 0 c0 -127 2 -142 20 -160
29 -29 79 -25 155 12 l65 32 65 -32 c76 -37 126 -41 155 -12 18 18 20 33 20
160 l0 140 80 0 80 0 0 -320 0 -320 -400 0 -400 0 0 320 0 320 80 0 80 0 0
-140z"/>
                                        <path d="M2433 4539 c-61 -24 -132 -89 -164 -150 -34 -66 -38 -194 -9 -272 79
-209 369 -267 530 -107 120 121 122 334 6 454 -68 69 -115 89 -221 93 -73 2
-100 -1 -142 -18z m205 -169 c130 -79 74 -280 -78 -280 -85 0 -150 65 -150
150 0 54 27 102 72 130 20 12 51 20 78 20 27 0 58 -8 78 -20z"/>
                                    </g>
                                </svg>

                            </article>
                            <h4 className='text-sm py-2 text-center subtitulo-funcionalidades'>Distribución garantizada</h4>
                            <p className='text-sm parrafo-automatizado'>
                                Realizamos los pedidos y te los entregamos en el menor tiempo posible al distribuidor elegido mediante nuestro sistema de comprobantes.


                            </p>
                        </article>

                        <article className='cards'>
                            <article className='svg-container' >
                                <svg className='svg-image' xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                                        <meta name="Producer" content="Online-Convert" /></metadata>
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M648 4781 c-145 -47 -269 -174 -312 -320 -14 -49 -16 -245 -16 -1902 0 -1785 1 -1849 19 -1908 46 -147 172 -272 320 -315 49 -14 246 -16 1917 -16 1800 0 1864 1 1923 19 172 53 305 210 331 388 13 91 13 1815 0 1906 -27 183 -164 340 -343 392 l-59 17 19 21 c157 177 230 295 291 468 50 141 65 262 60 477 -4 167 -7 191 -26 228 -27 54 -72 80 -147 89 -109 13 -166 50 -210 135 -23 46 -45 139 -45 193 0 44 -29 95 -69 123 l-36 24 -585 0 c-564 0 -586 -1 -615 -20 -16 -10 -37 -29 -46 -41 l-16 -22 -44 26 c-103 59 -56 57 -1203 56 -991 0 -1054 -1 -1108 -18z m2139 -323 c35 -20 73 -63 73 -85 0 -19 -53 -40 -125 -48 -74 -9 -126 -40 -150 -92 -28 -58 -34 -384 -10 -520 37 -206 129 -404 261 -560 l44 -51 0 -1231 0 -1231 -240 0 -240 0 0 523 c0 448 -2 531 -16 578 -43 148 -168 274 -315 320 -53 17 -93 19 -309 19 -216 0 -256 -2 -309 -19 -147 -46 -272 -172 -315 -320 -14 -47 -16 -130 -16 -579 l0 -524 -177 4 c-158 3 -182 5 -213 24 -48 28 -78 75 -85 137 -3 29 -5 840 -3 1802 3 1729 3 1750 23 1784 25 42 62 71 106 81 19 5 473 7 1009 7 904 -2 977 -3 1007 -19z m1287 -40 c44 -157 153 -295 285 -361 41 -21 82 -37 92 -37 21 0 22 -7 19 -135 -7 -339 -236 -644 -684 -913 l-106 -64 -106 64 c-237 142 -433 313 -537 470 -91 137 -131 252 -146 418 -10 112 -5 160 17 160 8 0 48 16 88 35 134 65 246 204 290 363 l17 62 377 0 377 0 17 -62z m-620 -1762 c162 -93 170 -96 226 -96 56 0 64 3 228 97 l113 65 182 -4 c144 -3 188 -7 212 -20 43 -23 74 -59 85 -99 6 -21 10 -373 10 -919 0 -546 -4 -898 -10 -919 -11 -40 -42 -76 -85 -99 -27 -15 -93 -17 -622 -20 l-593 -3 0 1041 0 1040 71 0 c69 0 74 -2 183 -64z m-1465 -921 c44 -26 70 -62 81 -111 5 -21 10 -252 10 -511 l0 -473 -320 0 -321 0 3 498 c3 476 4 498 23 531 25 42 62 70 106 81 19 5 113 8 209 7 155 -2 179 -4 209 -22z" />
                                        <path d="M1512 3980 c-48 -30 -72 -75 -72 -140 0 -65 24 -110 72 -140 30 -18 51 -20 248 -20 197 0 218 2 248 20 48 30 72 75 72 140 0 65 -24 110 -72 140 -30 18 -51 20 -248 20 -197 0 -218 -2 -248 -20z" />
                                        <path d="M1032 3340 c-48 -30 -72 -75 -72 -140 0 -65 24 -110 72 -140 30 -18 51 -20 248 -20 197 0 218 2 248 20 48 30 72 75 72 140 0 65 -24 110 -72 140 -30 18 -51 20 -248 20 -197 0 -218 -2 -248 -20z" />
                                        <path d="M1992 3340 c-48 -30 -72 -75 -72 -140 0 -65 24 -110 72 -140 30 -18 51 -20 248 -20 197 0 218 2 248 20 48 30 72 75 72 140 0 65 -24 110 -72 140 -30 18 -51 20 -248 20 -197 0 -218 -2 -248 -20z" />
                                        <path d="M1032 2700 c-48 -30 -72 -75 -72 -140 0 -65 24 -110 72 -140 30 -18 51 -20 248 -20 197 0 218 2 248 20 48 30 72 75 72 140 0 65 -24 110 -72 140 -30 18 -51 20 -248 20 -197 0 -218 -2 -248 -20z" />
                                        <path d="M1992 2700 c-48 -30 -72 -75 -72 -140 0 -65 24 -110 72 -140 30 -18 51 -20 248 -20 197 0 218 2 248 20 48 30 72 75 72 140 0 65 -24 110 -72 140 -30 18 -51 20 -248 20 -197 0 -218 -2 -248 -20z" />
                                        <path d="M3919 4065 c-21 -11 -159 -170 -326 -374 -2 -3 -34 25 -71 61 -82 80 -96 88 -164 88 -97 0 -158 -61 -158 -158 0 -29 6 -65 14 -80 17 -32 282 -295 313 -311 31 -16 119 -14 152 4 27 14 445 505 469 552 7 12 12 46 12 75 0 99 -61 158 -160 158 -30 -1 -67 -7 -81 -15z" />
                                        <path d="M3592 2220 c-48 -30 -72 -75 -72 -140 0 -65 24 -110 72 -140 30 -18 51 -20 248 -20 197 0 218 2 248 20 48 30 72 75 72 140 0 65 -24 110 -72 140 -30 18 -51 20 -248 20 -197 0 -218 -2 -248 -20z" />
                                        <path d="M3592 1580 c-48 -30 -72 -75 -72 -140 0 -65 24 -110 72 -140 30 -18 51 -20 248 -20 197 0 218 2 248 20 48 30 72 75 72 140 0 65 -24 110 -72 140 -30 18 -51 20 -248 20 -197 0 -218 -2 -248 -20z" />
                                    </g>
                                </svg>

                            </article>
                            <h4 className='text-2xl py-2 text-center subtitulo-funcionalidades'>Garantía en los productos</h4>
                            <p className='text-sm parrafo-automatizado'>
                                El pedido que realices a traves de Tensiora Sales va a estar garantizado por la empresa fabricante o distribuidora del producto.
                            </p>
                        </article>

                        <article className='cards'>
                            <article className='svg-container' >
                                <svg className='svg-image' version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                                    </metadata>
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M2375 5038 c-479 -276 -1051 -526 -1590 -696 -88 -28 -207 -66 -264
-84 -162 -51 -146 34 -146 -766 0 -703 4 -800 45 -1037 133 -779 534 -1452
1170 -1964 184 -149 377 -272 580 -370 183 -89 274 -116 390 -116 116 0 207
27 390 116 436 211 859 563 1159 964 358 477 562 1004 623 1609 9 83 13 335
13 798 0 668 0 677 -21 705 -21 29 -36 35 -354 133 -510 158 -1114 420 -1607
698 -210 119 -200 118 -388 10z m309 -227 c487 -276 1167 -565 1709 -726 l127
-38 0 -599 c0 -467 -3 -631 -15 -744 -61 -581 -273 -1102 -631 -1554 -155
-196 -452 -468 -689 -631 -168 -116 -412 -241 -547 -280 l-78 -23 -77 23
c-136 39 -380 164 -548 280 -237 163 -534 435 -689 631 -358 452 -570 973
-631 1554 -12 113 -15 277 -15 744 l0 599 128 38 c563 168 1226 449 1712 728
63 37 117 66 119 67 1 0 58 -31 125 -69z"/>
                                        <path d="M1734 4226 c-74 -74 -26 -186 79 -186 63 0 106 45 107 112 0 39 -5
52 -31 77 -25 26 -39 31 -76 31 -38 0 -50 -5 -79 -34z"/>
                                        <path d="M1475 4130 c-16 -4 -102 -34 -190 -67 -88 -33 -224 -82 -303 -108
-194 -64 -182 -41 -182 -348 0 -255 4 -280 52 -305 50 -26 99 -19 137 19 l31
31 0 188 0 188 53 17 c88 29 460 166 488 181 15 7 34 30 44 50 40 85 -36 175
-130 154z"/>
                                        <path d="M3454 3566 c-28 -7 -71 -24 -95 -39 -24 -14 -291 -273 -594 -576
l-549 -551 -216 214 c-146 145 -230 220 -261 234 -241 115 -509 -49 -512 -313
0 -83 14 -132 59 -200 48 -73 709 -728 761 -754 23 -11 73 -26 111 -33 88 -15
178 5 255 56 29 19 359 342 733 718 529 530 688 694 707 734 117 233 -28 498
-283 518 -38 3 -86 0 -116 -8z m178 -255 c15 -17 30 -42 34 -56 17 -69 29 -55
-704 -788 l-697 -697 -46 0 c-35 0 -55 7 -85 29 -67 49 -662 654 -673 684 -16
42 -13 78 9 114 35 59 118 81 170 47 14 -9 138 -129 275 -265 l251 -249 49 0
49 0 601 599 c330 329 609 604 620 610 11 6 42 10 69 8 40 -4 55 -10 78 -36z"/>
                                        <path d="M3732 1658 c-12 -6 -55 -56 -94 -112 -135 -189 -310 -377 -488 -523
-104 -85 -109 -92 -117 -137 -12 -74 36 -126 115 -126 33 0 52 12 153 93 152
125 355 336 469 489 114 152 131 184 123 231 -11 69 -99 116 -161 85z"/>
                                        <path d="M2808 780 c-88 -68 -42 -200 69 -200 38 0 50 5 79 34 26 26 34 42 34
70 0 44 -22 91 -49 106 -33 17 -106 12 -133 -10z"/>
                                    </g>
                                </svg>

                            </article>
                            <h4 className='text-2xl py-2 text-center subtitulo-funcionalidades'>Seguridad en Datos</h4>
                            <p className='text-sm parrafo-automatizado'>
                                No se va a guardar ningun dato sensible de los usuarios, y los datos que se guarden van a estar protegidos.
                            </p>
                        </article>

                    </article>
                </section>


                {/* sector de servicios */}




                {/* sector de preguntas frecuentes */}

                <section id='preguntas-frecuentes'>
                    <article>
                        <h4 className='text-center py-4 subtitulo-preguntas-frecuentes oscuro-logo'>Preguntas frecuentes (FAQ)</h4>
                    </article>
                    <section className='container-preguntas-frecuentes  '>
                        <article>
                            <section className='container-preguntas-frecuentes__icons'>
                                <article className='item-svg-image'>
                                    <svg className='svg-responsive' xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <metadata>
                                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            <meta name="Producer" content="Online-Convert" /></metadata>
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill='black' stroke="none">
                                            <path d="M3175 5105 c-456 -80 -840 -358 -1055 -766 -52 -100 -108 -257 -135 -379 -22 -100 -31 -383 -16 -492 87 -614 538 -1095 1152 -1230 96 -21 128 -23 419 -23 270 0 328 3 403 19 l88 18 197 -195 c145 -143 205 -196 228 -201 39 -9 98 14 113 42 7 14 11 126 11 325 l0 305 63 55 c179 158 329 388 407 624 59 181 73 290 67 501 -6 194 -18 266 -73 432 -138 415 -489 766 -904 904 -197 65 -224 69 -570 72 -236 2 -335 -1 -395 -11z m695 -209 c473 -83 850 -415 989 -871 74 -239 68 -535 -15 -768 -78 -219 -197 -386 -401 -568 l-63 -55 0 -214 0 -215 -127 127 c-71 70 -141 132 -156 138 -23 8 -51 4 -140 -17 -109 -27 -120 -28 -407 -28 -322 0 -378 7 -545 64 -422 147 -743 524 -820 965 -19 112 -19 308 0 418 54 311 216 584 460 773 214 165 431 247 720 269 101 8 422 -4 505 -18z" />
                                            <path d="M3445 4406 c-154 -49 -269 -178 -296 -334 -21 -116 13 -177 97 -177 61 0 91 32 104 108 20 125 93 198 204 205 83 5 145 -25 193 -94 84 -118 25 -271 -125 -328 -87 -34 -107 -48 -135 -99 -20 -39 -22 -55 -22 -210 l0 -169 33 -29 c45 -41 102 -41 143 0 l29 29 0 135 0 135 36 12 c154 51 267 194 283 358 21 213 -95 392 -292 454 -68 21 -192 23 -252 4z" />
                                            <path d="M3502 3035 c-58 -49 -46 -142 24 -171 72 -30 144 15 144 90 -1 91 -100 139 -168 81z" />
                                            <path d="M531 3364 c-244 -65 -422 -232 -502 -469 l-24 -70 0 -915 0 -915 24 -70 c38 -115 87 -193 175 -281 88 -87 154 -130 268 -172 l73 -26 370 -4 370 -3 221 -220 221 -219 50 0 c95 0 111 43 112 297 l1 142 563 3 562 3 73 27 c114 42 180 85 268 172 87 88 130 154 172 268 l26 73 4 446 3 445 -27 27 c-37 38 -110 38 -147 2 l-25 -26 -4 -412 c-4 -384 -6 -416 -25 -467 -36 -97 -62 -140 -128 -205 -65 -65 -107 -92 -205 -128 -53 -20 -77 -21 -660 -25 l-605 -3 -27 -27 c-27 -25 -28 -28 -28 -141 l0 -115 -142 141 -143 141 -390 4 c-423 5 -421 5 -544 67 -57 30 -164 138 -194 198 -66 131 -62 72 -62 1003 0 931 -4 872 62 1003 30 60 137 168 194 198 129 65 98 63 726 67 l572 3 25 26 c37 37 37 109 0 147 l-27 26 -586 -1 c-478 0 -596 -3 -640 -15z" />
                                            <path d="M566 2554 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 777 0 777 0 27 26 c21 21 26 36 26 74 0 38 -5 53 -26 74 l-27 26 -777 0 -777 0 -27 -26z" />
                                            <path d="M566 1994 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 1102 0 1102 0 27 26 c37 38 37 110 0 148 l-27 26 -1102 0 -1102 0 -27 -26z" />
                                            <path d="M566 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 904 0 905 0 29 29 c23 23 29 38 29 71 0 33 -6 48 -29 71 l-29 29 -905 0 -904 0 -27 -26z" />
                                            <path d="M2676 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 21 -21 36 -26 74 -26 38 0 53 5 74 26 21 21 26 36 26 74 0 38 -5 53 -26 74 -21 21 -36 26 -74 26 -38 0 -53 -5 -74 -26z" />
                                        </g>
                                    </svg>
                                </article>
                                <article className='item-info-svg'>
                                    <h4 className='text-center subtitulo-preguntas'>¿Qué diferencia a su estudio contable de uno tradicional</h4>
                                    <p className='parrafo-preguntas-frecuentes'>
                                        Utilizamos inteligencia artificial para automatizar cálculos, detectar errores y generar reportes más precisos y
                                        rápidos, permitiéndote tomar mejores decisiones.
                                    </p>
                                </article>

                            </section>

                        </article>
                        <article >
                            <section className='container-preguntas-frecuentes__icons'>
                                <article className='item-svg-image' >
                                    <svg className='svg-responsive' xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <metadata>
                                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            <meta name="Producer" content="Online-Convert" /></metadata>
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill='black' stroke="none">
                                            <path d="M3175 5105 c-456 -80 -840 -358 -1055 -766 -52 -100 -108 -257 -135 -379 -22 -100 -31 -383 -16 -492 87 -614 538 -1095 1152 -1230 96 -21 128 -23 419 -23 270 0 328 3 403 19 l88 18 197 -195 c145 -143 205 -196 228 -201 39 -9 98 14 113 42 7 14 11 126 11 325 l0 305 63 55 c179 158 329 388 407 624 59 181 73 290 67 501 -6 194 -18 266 -73 432 -138 415 -489 766 -904 904 -197 65 -224 69 -570 72 -236 2 -335 -1 -395 -11z m695 -209 c473 -83 850 -415 989 -871 74 -239 68 -535 -15 -768 -78 -219 -197 -386 -401 -568 l-63 -55 0 -214 0 -215 -127 127 c-71 70 -141 132 -156 138 -23 8 -51 4 -140 -17 -109 -27 -120 -28 -407 -28 -322 0 -378 7 -545 64 -422 147 -743 524 -820 965 -19 112 -19 308 0 418 54 311 216 584 460 773 214 165 431 247 720 269 101 8 422 -4 505 -18z" />
                                            <path d="M3445 4406 c-154 -49 -269 -178 -296 -334 -21 -116 13 -177 97 -177 61 0 91 32 104 108 20 125 93 198 204 205 83 5 145 -25 193 -94 84 -118 25 -271 -125 -328 -87 -34 -107 -48 -135 -99 -20 -39 -22 -55 -22 -210 l0 -169 33 -29 c45 -41 102 -41 143 0 l29 29 0 135 0 135 36 12 c154 51 267 194 283 358 21 213 -95 392 -292 454 -68 21 -192 23 -252 4z" />
                                            <path d="M3502 3035 c-58 -49 -46 -142 24 -171 72 -30 144 15 144 90 -1 91 -100 139 -168 81z" />
                                            <path d="M531 3364 c-244 -65 -422 -232 -502 -469 l-24 -70 0 -915 0 -915 24 -70 c38 -115 87 -193 175 -281 88 -87 154 -130 268 -172 l73 -26 370 -4 370 -3 221 -220 221 -219 50 0 c95 0 111 43 112 297 l1 142 563 3 562 3 73 27 c114 42 180 85 268 172 87 88 130 154 172 268 l26 73 4 446 3 445 -27 27 c-37 38 -110 38 -147 2 l-25 -26 -4 -412 c-4 -384 -6 -416 -25 -467 -36 -97 -62 -140 -128 -205 -65 -65 -107 -92 -205 -128 -53 -20 -77 -21 -660 -25 l-605 -3 -27 -27 c-27 -25 -28 -28 -28 -141 l0 -115 -142 141 -143 141 -390 4 c-423 5 -421 5 -544 67 -57 30 -164 138 -194 198 -66 131 -62 72 -62 1003 0 931 -4 872 62 1003 30 60 137 168 194 198 129 65 98 63 726 67 l572 3 25 26 c37 37 37 109 0 147 l-27 26 -586 -1 c-478 0 -596 -3 -640 -15z" />
                                            <path d="M566 2554 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 777 0 777 0 27 26 c21 21 26 36 26 74 0 38 -5 53 -26 74 l-27 26 -777 0 -777 0 -27 -26z" />
                                            <path d="M566 1994 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 1102 0 1102 0 27 26 c37 38 37 110 0 148 l-27 26 -1102 0 -1102 0 -27 -26z" />
                                            <path d="M566 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 904 0 905 0 29 29 c23 23 29 38 29 71 0 33 -6 48 -29 71 l-29 29 -905 0 -904 0 -27 -26z" />
                                            <path d="M2676 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 21 -21 36 -26 74 -26 38 0 53 5 74 26 21 21 26 36 26 74 0 38 -5 53 -26 74 -21 21 -36 26 -74 26 -38 0 -53 -5 -74 -26z" />
                                        </g>
                                    </svg>
                                </article>
                                <article className='item-info-svg'>
                                    <h4 className='text-center subtitulo-preguntas'>¿La IA reemplaza al contador?</h4>
                                    <p className='parrafo-preguntas-frecuentes'>
                                        No. La IA es una herramienta que potencia nuestro trabajo, pero el análisis, interpretación y asesoramiento
                                        sigue siendo 100% humano y personalizado.
                                    </p>
                                </article>
                            </section>
                        </article>
                    </section>
                    <section className='container-preguntas-frecuentes '>
                        <article>
                            <section className='container-preguntas-frecuentes__icons'>
                                <article className='item-svg-image' >
                                    <svg className='svg-responsive' xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <metadata>
                                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            <meta name="Producer" content="Online-Convert" /></metadata>
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill='black' stroke="none">
                                            <path d="M3175 5105 c-456 -80 -840 -358 -1055 -766 -52 -100 -108 -257 -135 -379 -22 -100 -31 -383 -16 -492 87 -614 538 -1095 1152 -1230 96 -21 128 -23 419 -23 270 0 328 3 403 19 l88 18 197 -195 c145 -143 205 -196 228 -201 39 -9 98 14 113 42 7 14 11 126 11 325 l0 305 63 55 c179 158 329 388 407 624 59 181 73 290 67 501 -6 194 -18 266 -73 432 -138 415 -489 766 -904 904 -197 65 -224 69 -570 72 -236 2 -335 -1 -395 -11z m695 -209 c473 -83 850 -415 989 -871 74 -239 68 -535 -15 -768 -78 -219 -197 -386 -401 -568 l-63 -55 0 -214 0 -215 -127 127 c-71 70 -141 132 -156 138 -23 8 -51 4 -140 -17 -109 -27 -120 -28 -407 -28 -322 0 -378 7 -545 64 -422 147 -743 524 -820 965 -19 112 -19 308 0 418 54 311 216 584 460 773 214 165 431 247 720 269 101 8 422 -4 505 -18z" />
                                            <path d="M3445 4406 c-154 -49 -269 -178 -296 -334 -21 -116 13 -177 97 -177 61 0 91 32 104 108 20 125 93 198 204 205 83 5 145 -25 193 -94 84 -118 25 -271 -125 -328 -87 -34 -107 -48 -135 -99 -20 -39 -22 -55 -22 -210 l0 -169 33 -29 c45 -41 102 -41 143 0 l29 29 0 135 0 135 36 12 c154 51 267 194 283 358 21 213 -95 392 -292 454 -68 21 -192 23 -252 4z" />
                                            <path d="M3502 3035 c-58 -49 -46 -142 24 -171 72 -30 144 15 144 90 -1 91 -100 139 -168 81z" />
                                            <path d="M531 3364 c-244 -65 -422 -232 -502 -469 l-24 -70 0 -915 0 -915 24 -70 c38 -115 87 -193 175 -281 88 -87 154 -130 268 -172 l73 -26 370 -4 370 -3 221 -220 221 -219 50 0 c95 0 111 43 112 297 l1 142 563 3 562 3 73 27 c114 42 180 85 268 172 87 88 130 154 172 268 l26 73 4 446 3 445 -27 27 c-37 38 -110 38 -147 2 l-25 -26 -4 -412 c-4 -384 -6 -416 -25 -467 -36 -97 -62 -140 -128 -205 -65 -65 -107 -92 -205 -128 -53 -20 -77 -21 -660 -25 l-605 -3 -27 -27 c-27 -25 -28 -28 -28 -141 l0 -115 -142 141 -143 141 -390 4 c-423 5 -421 5 -544 67 -57 30 -164 138 -194 198 -66 131 -62 72 -62 1003 0 931 -4 872 62 1003 30 60 137 168 194 198 129 65 98 63 726 67 l572 3 25 26 c37 37 37 109 0 147 l-27 26 -586 -1 c-478 0 -596 -3 -640 -15z" />
                                            <path d="M566 2554 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 777 0 777 0 27 26 c21 21 26 36 26 74 0 38 -5 53 -26 74 l-27 26 -777 0 -777 0 -27 -26z" />
                                            <path d="M566 1994 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 1102 0 1102 0 27 26 c37 38 37 110 0 148 l-27 26 -1102 0 -1102 0 -27 -26z" />
                                            <path d="M566 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 904 0 905 0 29 29 c23 23 29 38 29 71 0 33 -6 48 -29 71 l-29 29 -905 0 -904 0 -27 -26z" />
                                            <path d="M2676 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 21 -21 36 -26 74 -26 38 0 53 5 74 26 21 21 26 36 26 74 0 38 -5 53 -26 74 -21 21 -36 26 -74 26 -38 0 -53 -5 -74 -26z" />
                                        </g>
                                    </svg>
                                </article>
                                <article className='item-info-svg'>
                                    <h4 className='text-center subtitulo-preguntas'>¿Mis datos están seguros?</h4>
                                    <p className='parrafo-preguntas-frecuentes'>
                                        Sí. Cumplimos con políticas de privacidad estrictas y utilizamos cifrado avanzado para proteger la información
                                        de nuestros clientes. No se guarda ningun dato dentro del sitio.
                                    </p>
                                </article>
                            </section>
                        </article>
                        <article>
                            <section className='container-preguntas-frecuentes__icons'>
                                <article className='item-svg-image' >
                                    <svg className='svg-responsive' xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <metadata>
                                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            <meta name="Producer" content="Online-Convert" /></metadata>
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill='black' stroke="none">
                                            <path d="M3175 5105 c-456 -80 -840 -358 -1055 -766 -52 -100 -108 -257 -135 -379 -22 -100 -31 -383 -16 -492 87 -614 538 -1095 1152 -1230 96 -21 128 -23 419 -23 270 0 328 3 403 19 l88 18 197 -195 c145 -143 205 -196 228 -201 39 -9 98 14 113 42 7 14 11 126 11 325 l0 305 63 55 c179 158 329 388 407 624 59 181 73 290 67 501 -6 194 -18 266 -73 432 -138 415 -489 766 -904 904 -197 65 -224 69 -570 72 -236 2 -335 -1 -395 -11z m695 -209 c473 -83 850 -415 989 -871 74 -239 68 -535 -15 -768 -78 -219 -197 -386 -401 -568 l-63 -55 0 -214 0 -215 -127 127 c-71 70 -141 132 -156 138 -23 8 -51 4 -140 -17 -109 -27 -120 -28 -407 -28 -322 0 -378 7 -545 64 -422 147 -743 524 -820 965 -19 112 -19 308 0 418 54 311 216 584 460 773 214 165 431 247 720 269 101 8 422 -4 505 -18z" />
                                            <path d="M3445 4406 c-154 -49 -269 -178 -296 -334 -21 -116 13 -177 97 -177 61 0 91 32 104 108 20 125 93 198 204 205 83 5 145 -25 193 -94 84 -118 25 -271 -125 -328 -87 -34 -107 -48 -135 -99 -20 -39 -22 -55 -22 -210 l0 -169 33 -29 c45 -41 102 -41 143 0 l29 29 0 135 0 135 36 12 c154 51 267 194 283 358 21 213 -95 392 -292 454 -68 21 -192 23 -252 4z" />
                                            <path d="M3502 3035 c-58 -49 -46 -142 24 -171 72 -30 144 15 144 90 -1 91 -100 139 -168 81z" />
                                            <path d="M531 3364 c-244 -65 -422 -232 -502 -469 l-24 -70 0 -915 0 -915 24 -70 c38 -115 87 -193 175 -281 88 -87 154 -130 268 -172 l73 -26 370 -4 370 -3 221 -220 221 -219 50 0 c95 0 111 43 112 297 l1 142 563 3 562 3 73 27 c114 42 180 85 268 172 87 88 130 154 172 268 l26 73 4 446 3 445 -27 27 c-37 38 -110 38 -147 2 l-25 -26 -4 -412 c-4 -384 -6 -416 -25 -467 -36 -97 -62 -140 -128 -205 -65 -65 -107 -92 -205 -128 -53 -20 -77 -21 -660 -25 l-605 -3 -27 -27 c-27 -25 -28 -28 -28 -141 l0 -115 -142 141 -143 141 -390 4 c-423 5 -421 5 -544 67 -57 30 -164 138 -194 198 -66 131 -62 72 -62 1003 0 931 -4 872 62 1003 30 60 137 168 194 198 129 65 98 63 726 67 l572 3 25 26 c37 37 37 109 0 147 l-27 26 -586 -1 c-478 0 -596 -3 -640 -15z" />
                                            <path d="M566 2554 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 777 0 777 0 27 26 c21 21 26 36 26 74 0 38 -5 53 -26 74 l-27 26 -777 0 -777 0 -27 -26z" />
                                            <path d="M566 1994 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 1102 0 1102 0 27 26 c37 38 37 110 0 148 l-27 26 -1102 0 -1102 0 -27 -26z" />
                                            <path d="M566 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 904 0 905 0 29 29 c23 23 29 38 29 71 0 33 -6 48 -29 71 l-29 29 -905 0 -904 0 -27 -26z" />
                                            <path d="M2676 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 21 -21 36 -26 74 -26 38 0 53 5 74 26 21 21 26 36 26 74 0 38 -5 53 -26 74 -21 21 -36 26 -74 26 -38 0 -53 -5 -74 -26z" />
                                        </g>
                                    </svg>
                                </article>
                                <article className='item-info-svg'>
                                    <h4 className='text-center subtitulo-preguntas'>¿Pueden trabajar con empresas y autónomos?</h4>
                                    <p className='parrafo-preguntas-frecuentes'>
                                        Sí. Ofrecemos soluciones adaptadas a PYMEs, profesionales independientes y emprendedores.
                                    </p>
                                </article>
                            </section>
                        </article>
                    </section>

                    {/* sector de preguntas frecuentes */}

                    <section className='container-preguntas-frecuentes '>
                        <article>
                            <section className='container-preguntas-frecuentes__icons'>
                                <article className='item-svg-image' >
                                    <svg className='svg-responsive' xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <metadata>
                                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            <meta name="Producer" content="Online-Convert" /></metadata>
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill='black' stroke="none">
                                            <path d="M3175 5105 c-456 -80 -840 -358 -1055 -766 -52 -100 -108 -257 -135 -379 -22 -100 -31 -383 -16 -492 87 -614 538 -1095 1152 -1230 96 -21 128 -23 419 -23 270 0 328 3 403 19 l88 18 197 -195 c145 -143 205 -196 228 -201 39 -9 98 14 113 42 7 14 11 126 11 325 l0 305 63 55 c179 158 329 388 407 624 59 181 73 290 67 501 -6 194 -18 266 -73 432 -138 415 -489 766 -904 904 -197 65 -224 69 -570 72 -236 2 -335 -1 -395 -11z m695 -209 c473 -83 850 -415 989 -871 74 -239 68 -535 -15 -768 -78 -219 -197 -386 -401 -568 l-63 -55 0 -214 0 -215 -127 127 c-71 70 -141 132 -156 138 -23 8 -51 4 -140 -17 -109 -27 -120 -28 -407 -28 -322 0 -378 7 -545 64 -422 147 -743 524 -820 965 -19 112 -19 308 0 418 54 311 216 584 460 773 214 165 431 247 720 269 101 8 422 -4 505 -18z" />
                                            <path d="M3445 4406 c-154 -49 -269 -178 -296 -334 -21 -116 13 -177 97 -177 61 0 91 32 104 108 20 125 93 198 204 205 83 5 145 -25 193 -94 84 -118 25 -271 -125 -328 -87 -34 -107 -48 -135 -99 -20 -39 -22 -55 -22 -210 l0 -169 33 -29 c45 -41 102 -41 143 0 l29 29 0 135 0 135 36 12 c154 51 267 194 283 358 21 213 -95 392 -292 454 -68 21 -192 23 -252 4z" />
                                            <path d="M3502 3035 c-58 -49 -46 -142 24 -171 72 -30 144 15 144 90 -1 91 -100 139 -168 81z" />
                                            <path d="M531 3364 c-244 -65 -422 -232 -502 -469 l-24 -70 0 -915 0 -915 24 -70 c38 -115 87 -193 175 -281 88 -87 154 -130 268 -172 l73 -26 370 -4 370 -3 221 -220 221 -219 50 0 c95 0 111 43 112 297 l1 142 563 3 562 3 73 27 c114 42 180 85 268 172 87 88 130 154 172 268 l26 73 4 446 3 445 -27 27 c-37 38 -110 38 -147 2 l-25 -26 -4 -412 c-4 -384 -6 -416 -25 -467 -36 -97 -62 -140 -128 -205 -65 -65 -107 -92 -205 -128 -53 -20 -77 -21 -660 -25 l-605 -3 -27 -27 c-27 -25 -28 -28 -28 -141 l0 -115 -142 141 -143 141 -390 4 c-423 5 -421 5 -544 67 -57 30 -164 138 -194 198 -66 131 -62 72 -62 1003 0 931 -4 872 62 1003 30 60 137 168 194 198 129 65 98 63 726 67 l572 3 25 26 c37 37 37 109 0 147 l-27 26 -586 -1 c-478 0 -596 -3 -640 -15z" />
                                            <path d="M566 2554 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 777 0 777 0 27 26 c21 21 26 36 26 74 0 38 -5 53 -26 74 l-27 26 -777 0 -777 0 -27 -26z" />
                                            <path d="M566 1994 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 1102 0 1102 0 27 26 c37 38 37 110 0 148 l-27 26 -1102 0 -1102 0 -27 -26z" />
                                            <path d="M566 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 904 0 905 0 29 29 c23 23 29 38 29 71 0 33 -6 48 -29 71 l-29 29 -905 0 -904 0 -27 -26z" />
                                            <path d="M2676 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 21 -21 36 -26 74 -26 38 0 53 5 74 26 21 21 26 36 26 74 0 38 -5 53 -26 74 -21 21 -36 26 -74 26 -38 0 -53 -5 -74 -26z" />
                                        </g>
                                    </svg>
                                </article>
                                <article className='item-info-svg'>
                                    <h4 className='text-center subtitulo-preguntas'>¿Cómo puedo empezar a trabajar con ustedes?</h4>
                                    <p className='parrafo-preguntas-frecuentes'>
                                        Podés agendar una reunión virtual o presencial, enviarnos tu consulta por WhatsApp.
                                    </p>
                                </article>
                            </section>
                        </article>
                        <article>
                            <section className='container-preguntas-frecuentes__icons'>
                                <article className='item-svg-image' >
                                    <svg className='svg-responsive' xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <metadata>
                                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                                            <meta name="Producer" content="Online-Convert" /></metadata>
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill='black' stroke="none">
                                            <path d="M3175 5105 c-456 -80 -840 -358 -1055 -766 -52 -100 -108 -257 -135 -379 -22 -100 -31 -383 -16 -492 87 -614 538 -1095 1152 -1230 96 -21 128 -23 419 -23 270 0 328 3 403 19 l88 18 197 -195 c145 -143 205 -196 228 -201 39 -9 98 14 113 42 7 14 11 126 11 325 l0 305 63 55 c179 158 329 388 407 624 59 181 73 290 67 501 -6 194 -18 266 -73 432 -138 415 -489 766 -904 904 -197 65 -224 69 -570 72 -236 2 -335 -1 -395 -11z m695 -209 c473 -83 850 -415 989 -871 74 -239 68 -535 -15 -768 -78 -219 -197 -386 -401 -568 l-63 -55 0 -214 0 -215 -127 127 c-71 70 -141 132 -156 138 -23 8 -51 4 -140 -17 -109 -27 -120 -28 -407 -28 -322 0 -378 7 -545 64 -422 147 -743 524 -820 965 -19 112 -19 308 0 418 54 311 216 584 460 773 214 165 431 247 720 269 101 8 422 -4 505 -18z" />
                                            <path d="M3445 4406 c-154 -49 -269 -178 -296 -334 -21 -116 13 -177 97 -177 61 0 91 32 104 108 20 125 93 198 204 205 83 5 145 -25 193 -94 84 -118 25 -271 -125 -328 -87 -34 -107 -48 -135 -99 -20 -39 -22 -55 -22 -210 l0 -169 33 -29 c45 -41 102 -41 143 0 l29 29 0 135 0 135 36 12 c154 51 267 194 283 358 21 213 -95 392 -292 454 -68 21 -192 23 -252 4z" />
                                            <path d="M3502 3035 c-58 -49 -46 -142 24 -171 72 -30 144 15 144 90 -1 91 -100 139 -168 81z" />
                                            <path d="M531 3364 c-244 -65 -422 -232 -502 -469 l-24 -70 0 -915 0 -915 24 -70 c38 -115 87 -193 175 -281 88 -87 154 -130 268 -172 l73 -26 370 -4 370 -3 221 -220 221 -219 50 0 c95 0 111 43 112 297 l1 142 563 3 562 3 73 27 c114 42 180 85 268 172 87 88 130 154 172 268 l26 73 4 446 3 445 -27 27 c-37 38 -110 38 -147 2 l-25 -26 -4 -412 c-4 -384 -6 -416 -25 -467 -36 -97 -62 -140 -128 -205 -65 -65 -107 -92 -205 -128 -53 -20 -77 -21 -660 -25 l-605 -3 -27 -27 c-27 -25 -28 -28 -28 -141 l0 -115 -142 141 -143 141 -390 4 c-423 5 -421 5 -544 67 -57 30 -164 138 -194 198 -66 131 -62 72 -62 1003 0 931 -4 872 62 1003 30 60 137 168 194 198 129 65 98 63 726 67 l572 3 25 26 c37 37 37 109 0 147 l-27 26 -586 -1 c-478 0 -596 -3 -640 -15z" />
                                            <path d="M566 2554 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 777 0 777 0 27 26 c21 21 26 36 26 74 0 38 -5 53 -26 74 l-27 26 -777 0 -777 0 -27 -26z" />
                                            <path d="M566 1994 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 1102 0 1102 0 27 26 c37 38 37 110 0 148 l-27 26 -1102 0 -1102 0 -27 -26z" />
                                            <path d="M566 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 l27 -26 904 0 905 0 29 29 c23 23 29 38 29 71 0 33 -6 48 -29 71 l-29 29 -905 0 -904 0 -27 -26z" />
                                            <path d="M2676 1434 c-21 -21 -26 -36 -26 -74 0 -38 5 -53 26 -74 21 -21 36 -26 74 -26 38 0 53 5 74 26 21 21 26 36 26 74 0 38 -5 53 -26 74 -21 21 -36 26 -74 26 -38 0 -53 -5 -74 -26z" />
                                        </g>
                                    </svg>
                                </article>
                                <article className='item-info-svg'>
                                    <h4 className='text-center subtitulo-preguntas'>¿Trabajan de forma remota?</h4>
                                    <p className='parrafo-preguntas-frecuentes'>
                                        Sí. Gestionamos todo de manera digital para que no tengas que moverte de tu oficina u hogar.
                                    </p>
                                </article>
                            </section>
                        </article>
                    </section>
                </section>

                {/* sector de marcas con que se trabaja */}


                <section className='carousel-container-brand'>
                    <section className='carousel-track' ref={carouselRef}>
                        {[...brands, ...brands].map((brand, index) => (
                            <img key={index} src={brand} alt='Brand Logo' className='brand-logo' />
                        ))}
                    </section>
                </section>



                {/* sector de nosotros  */}

                <section className='py-5' id='contacto-nosotros'>
                    <h4 className='text-center'>Nosotros</h4>
                    <section className='container-nosotros-marca'>
                        <article className='item-flex-left-image-logo desaparecer-phone'>
                            <section className='container-photo'>
                                <img
                                    className='img'
                                    src={logoCalcularAI}
                                    alt="logo de Quantum System "

                                />
                                <section className="overlay">
                                    <article className="text">
                                        <p className='text-center'>
                                            Contamos con un equipo técnico capacitado y en constante formación, enfocado en brindar un servicio de calidad, seguro y personalizado, adaptado a las necesidades de cada cliente.
                                        </p>
                                    </article>
                                </section>
                            </section>
                        </article>
                        <article className='item-flex-right-informacion-empresa mx-2'>
                            <p>
                                En <strong>Tensiora sales </strong> vamos a darte mas productos al mejor precios y calidad del mercado. 
                                Nuestro compromiso es ofrecer soluciones rápidas, eficientes y duraderas para que todo funcione como debe.
                            </p>
                            <p>
                                Contamos con un equipo técnico capacitado y en constante formación, enfocado en brindar un servicio de calidad, seguro y personalizado, adaptado a las necesidades de cada cliente.
                            </p>
                          
                            <h4 className='text-sm py-3'>Nuesta misión</h4>
                            <p>
                                Ser un aliado confiable para nuestros clientes, brindando asesoramiento  profesional en comercio electronico que genere tranquilidad, cumplimiento y crecimiento sostenible.
                            </p>

                            <h4 className=' py-3'>Nuestra visión</h4>

                            <p>
                                Ser una firma que impulse la transformación digital en la competencia de productos, ofreciendo servicios eficientes y adaptados a las necesidades del mercado moderno.
                            </p>
                        </article>
                    </section>
                </section>


                {/* sector de contacto  */}

                <section className='py-5' id='contacto'>
                    <h4 className='text-center'>Contacto</h4>
                    <Contacto />
                </section>







            </main>

        </>
    )
}