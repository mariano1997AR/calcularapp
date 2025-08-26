import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import './NavbarDashboard.css';

interface DashboardNavbarProps {
    user: string;
    message: string;
}

export const NavbarDashboard: React.FC<DashboardNavbarProps> = ({ user, message }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    return (
        <>
            <nav className="navbar-container mb-4" style={{ borderBottomColor: '#4A4947' }}>
                <header className="logo flex items-center gap-2">
                    <p className='logo-dashboard text-2xl'>Comex</p>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25.000000pt" height="25.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                            <meta name="Producer" content="Online-Convert" /></metadata>
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M2412 4606 c-76 -19 -189 -78 -248 -130 -111 -98 -189 -259 -200 -414 -20 -263 153 -514 411 -599 109 -35 257 -38 360 -6 317 100 496 441 394 754 -62 191 -223 344 -415 393 -74 19 -226 20 -302 2z m293 -116 c114 -39 198 -103 258 -193 131 -200 107 -439 -62 -608 -195 -195 -484 -195 -682 1 -152 150 -187 353 -96 544 60 124 155 208 285 253 89 30 214 31 297 3z" />
                            <path d="M2516 4368 c-9 -12 -16 -39 -16 -60 0 -26 -4 -38 -14 -38 -25 0 -75 -50 -85 -86 -22 -79 25 -142 150 -203 43 -21 74 -42 74 -51 0 -8 -17 -23 -37 -33 -35 -17 -41 -17 -92 -3 -68 20 -81 20 -100 0 -39 -38 -2 -95 69 -108 33 -7 35 -9 35 -46 0 -45 20 -70 59 -70 38 0 51 17 51 66 0 40 3 44 42 66 60 33 91 82 85 135 -7 64 -37 96 -135 145 -65 33 -87 49 -87 64 0 17 7 19 90 19 50 0 96 4 103 8 17 11 15 62 -3 80 -8 9 -33 18 -55 22 -39 7 -40 7 -40 49 0 23 -5 47 -12 54 -20 20 -65 14 -82 -10z" />
                            <path d="M4165 4492 c-78 -16 -95 -131 -25 -167 36 -19 54 -19 89 0 49 25 63 91 29 138 -15 20 -64 35 -93 29z" />
                            <path d="M959 4476 c-155 -55 -207 -243 -101 -366 46 -55 101 -79 175 -80 94 0 173 47 208 125 25 55 25 154 0 203 -55 105 -176 156 -282 118z m159 -141 c26 -29 32 -43 32 -81 0 -39 -5 -51 -34 -80 -29 -29 -41 -34 -79 -34 -130 0 -171 173 -54 226 48 22 97 11 135 -31z" />
                            <path d="M1784 3643 c-273 -144 -504 -364 -659 -628 -121 -206 -136 -293 -48 -283 25 3 35 17 88 120 33 64 86 155 117 201 133 194 353 389 554 490 64 33 84 52 84 82 0 23 -32 55 -56 55 -6 0 -42 -16 -80 -37z" />
                            <path d="M3265 3630 c-31 -34 -13 -63 67 -110 269 -158 481 -387 624 -672 52 -104 55 -108 87 -108 72 0 74 41 9 170 -144 286 -349 511 -626 684 -95 60 -132 68 -161 36z" />
                            <path d="M2405 3340 c-586 -83 -1024 -583 -1025 -1170 -1 -579 428 -1079 997 -1165 665 -100 1270 355 1353 1019 77 608 -327 1172 -932 1302 -86 18 -308 26 -393 14z m105 -315 l0 -205 -195 0 -194 0 12 28 c80 176 177 295 292 355 89 46 85 56 85 -178z m207 169 c99 -57 222 -215 273 -349 l10 -25 -190 0 -190 0 0 206 0 206 28 -7 c15 -3 46 -17 69 -31z m-545 -61 c-51 -62 -104 -152 -141 -239 l-29 -69 -142 -3 c-134 -2 -140 -2 -131 16 18 34 176 178 250 226 57 38 210 115 229 116 2 0 -14 -21 -36 -47z m832 8 c106 -48 206 -118 304 -214 50 -50 92 -94 92 -99 0 -4 -62 -8 -137 -8 l-138 1 -57 117 c-31 64 -75 141 -97 170 -58 74 -58 74 33 33z m-1044 -434 c0 -2 -9 -43 -19 -92 -19 -88 -34 -190 -46 -327 l-7 -68 -199 0 c-158 0 -199 3 -199 13 0 8 7 56 16 108 18 105 69 256 109 324 l26 45 159 0 c88 0 160 -1 160 -3z m550 -242 l0 -245 -256 0 -255 0 6 58 c3 31 8 82 11 112 6 68 31 198 51 268 l14 52 215 0 214 0 0 -245z m557 150 c24 -93 53 -287 53 -356 l0 -39 -250 0 -250 0 0 245 0 245 212 -2 212 -3 23 -90z m440 50 c50 -89 100 -254 118 -392 l7 -53 -201 0 -201 0 0 44 c0 88 -39 341 -66 429 -5 16 5 17 157 15 l163 -3 23 -40z m-1613 -607 c3 -29 8 -82 11 -118 6 -65 41 -258 51 -285 5 -13 -18 -15 -161 -15 l-166 0 -40 85 c-42 90 -82 230 -93 328 l-6 57 199 0 200 0 5 -52z m616 -183 l0 -235 -217 2 -218 3 -17 65 c-18 64 -41 213 -53 338 l-6 62 256 0 255 0 0 -235z m610 198 c-1 -62 -27 -243 -50 -341 l-22 -92 -214 0 -214 0 0 235 0 235 250 0 250 0 0 -37z m504 -20 c-11 -98 -51 -238 -93 -328 l-40 -85 -164 0 -164 0 24 103 c12 56 28 162 35 235 l12 132 198 0 198 0 -6 -57z m-1604 -583 c29 -79 101 -203 151 -262 l40 -47 -43 15 c-113 39 -265 141 -369 246 -112 113 -115 108 54 108 l145 0 22 -60z m490 -150 c0 -240 5 -230 -88 -184 -96 48 -216 190 -278 330 -13 30 -24 57 -24 59 0 3 88 5 195 5 l195 0 0 -210z m490 198 c0 -22 -90 -180 -133 -237 -63 -82 -184 -170 -234 -171 -10 0 -13 49 -13 210 l0 210 190 0 c145 0 190 -3 190 -12z m400 -8 c-17 -31 -140 -152 -200 -197 -66 -48 -143 -92 -224 -128 l-59 -26 25 33 c57 74 91 132 139 233 l51 105 139 0 c136 0 139 -1 129 -20z" />
                            <path d="M605 2760 c-192 -35 -358 -159 -437 -327 -44 -92 -58 -157 -58 -263 0 -175 51 -301 170 -420 231 -232 592 -239 828 -15 78 73 123 144 159 247 21 60 26 92 26 183 1 97 -3 120 -29 195 -66 187 -197 318 -381 379 -71 24 -205 34 -278 21z m249 -130 c165 -56 285 -196 322 -374 34 -161 -23 -327 -152 -446 -244 -222 -618 -144 -763 160 -32 66 -36 86 -39 172 -4 78 0 110 17 166 80 263 360 410 615 322z" />
                            <path d="M462 2498 c-28 -28 -12 -67 83 -204 52 -75 95 -141 95 -146 0 -4 -24 -8 -54 -8 -61 0 -86 -16 -86 -55 0 -39 25 -55 86 -55 51 0 54 -1 54 -25 0 -24 -3 -25 -60 -25 -48 0 -61 -4 -70 -19 -29 -55 3 -91 78 -91 51 0 52 -1 52 -29 0 -34 20 -53 57 -53 30 0 53 25 53 59 0 21 4 23 56 23 73 0 94 12 94 53 0 47 -15 57 -87 57 -61 0 -63 1 -63 25 0 24 3 25 56 25 73 0 94 12 94 53 0 47 -15 57 -87 57 -41 0 -63 4 -63 12 0 6 47 74 105 150 58 76 105 144 105 151 0 27 -31 57 -60 57 -26 0 -40 -14 -116 -115 -48 -63 -88 -115 -89 -115 -1 0 -26 35 -56 78 -91 133 -108 152 -138 152 -15 0 -32 -5 -39 -12z" />
                            <path d="M4320 2760 c-221 -41 -389 -186 -464 -400 -26 -75 -30 -98 -29 -195 0 -91 5 -123 26 -183 36 -103 81 -174 159 -247 191 -181 475 -214 708 -82 123 69 238 221 275 363 19 74 19 232 0 304 -67 253 -285 430 -546 444 -46 3 -104 1 -129 -4z m198 -115 c176 -42 312 -167 363 -337 17 -56 21 -88 17 -166 -3 -87 -7 -105 -41 -175 -94 -199 -310 -316 -514 -278 -270 50 -453 310 -399 567 57 275 316 450 574 389z" />
                            <path d="M4420 2493 c-71 -25 -129 -71 -169 -134 -36 -58 -36 -58 -84 -59 -67 0 -87 -13 -87 -55 0 -40 20 -55 74 -55 29 0 36 -4 36 -20 0 -17 -7 -20 -39 -20 -46 0 -71 -20 -71 -59 0 -40 17 -51 80 -51 57 0 57 0 75 -41 42 -91 170 -169 281 -169 48 0 56 3 66 25 18 40 -2 73 -49 80 -78 12 -112 26 -154 65 l-44 39 82 1 c73 0 84 2 97 22 21 30 20 44 -4 68 -17 17 -33 20 -115 20 -88 0 -95 1 -95 20 0 19 7 20 100 20 96 0 100 1 117 26 15 24 15 29 2 53 -14 24 -20 26 -93 29 -55 2 -76 6 -74 15 7 21 98 76 136 82 74 12 83 16 94 40 8 19 8 31 0 50 -10 22 -18 25 -64 25 -29 -1 -73 -8 -98 -17z" />
                            <path d="M1036 1594 c-26 -26 -19 -56 44 -180 230 -453 641 -768 1146 -876 97 -20 135 -23 339 -23 254 1 337 13 527 76 409 136 776 457 964 843 24 49 44 100 44 112 0 29 -25 54 -55 54 -23 0 -65 -41 -65 -64 0 -7 -28 -62 -63 -123 -230 -403 -596 -669 -1057 -769 -122 -27 -478 -27 -600 0 -210 45 -428 140 -597 259 -199 140 -401 381 -504 602 -23 50 -47 93 -53 97 -19 13 -54 9 -70 -8z" />
                            <path d="M4599 946 c-165 -59 -211 -268 -85 -384 54 -50 101 -65 181 -60 117 7 196 87 203 205 6 85 -16 141 -74 192 -65 57 -149 74 -225 47z m121 -111 c45 -23 70 -62 70 -111 0 -35 -6 -49 -34 -78 -29 -31 -40 -36 -79 -36 -58 0 -113 43 -123 95 -9 48 21 105 66 127 43 22 63 22 100 3z" />
                            <path d="M609 921 c-37 -37 -38 -79 -3 -120 20 -25 34 -31 64 -31 72 0 113 60 85 127 -26 61 -97 72 -146 24z" />
                        </g>
                    </svg>

                </header>

                {/* Aparece de forma en PC pero no en dispositivos */}
                {/* dividirlo en componente NavbarPC */}
                <ul className="menu-links desaparece-dispositivo aparece-PC">
                    <li className="linea-bottom py-1">{message}</li>

                    <li className="nav-item dropdown desaperecer-dashboard py-1">
                        {loading ? <svg fill='black' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="15.000000pt" height="15.000000pt"><rect x="1" y="4" width="6" height="14" opacity="1"><animate id="spinner_aqiq" begin="0;spinner_xVBj.end-0.25s" attributeName="y" dur="0.75s" values="1;5" fill="freeze" /><animate begin="0;spinner_xVBj.end-0.25s" attributeName="height" dur="0.75s" values="22;14" fill="freeze" /><animate begin="0;spinner_xVBj.end-0.25s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" /></rect><rect x="9" y="4" width="6" height="14" opacity=".4"><animate begin="spinner_aqiq.begin+0.15s" attributeName="y" dur="0.75s" values="1;5" fill="freeze" /><animate begin="spinner_aqiq.begin+0.15s" attributeName="height" dur="0.75s" values="22;14" fill="freeze" /><animate begin="spinner_aqiq.begin+0.15s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" /></rect><rect x="17" y="4" width="6" height="14" opacity=".3"><animate id="spinner_xVBj" begin="spinner_aqiq.begin+0.3s" attributeName="y" dur="0.75s" values="1;5" fill="freeze" /><animate begin="spinner_aqiq.begin+0.3s" attributeName="height" dur="0.75s" values="22;14" fill="freeze" /><animate begin="spinner_aqiq.begin+0.3s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" /></rect></svg> : <a className="nav-link dropdown-toggle mb-2 py-1" role="button" data-bs-toggle="dropdown"> {user} <FontAwesomeIcon icon={faUser} /></a>}

                    </li>
                    <section className="dropdown">
                        <button className="dropbtn">Herramientas</button>
                        <section className="dropdown-content">
                            <Link to='/registro-ingresos-egresos'>Registro Ingresos</Link>
                            <a href="#">Link 1</a>
                            <a href="#">Link 1</a>

                        </section>

                    </section>
                    <li className="linea-bottom py-1">Salir <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={handleLogout} className='salir'></FontAwesomeIcon></li>




                </ul>

                {/* Aparece en dispositivos pero no en pc (solo a partir de 1060px) */}
                {/* dividirlo en componentes en NavbarResponsive */}
                <ul className="nav-links-responsive-aparece desaparece-PC ">
                    <section className="dropdown dropend">
                        <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown">
                            {user} <FontAwesomeIcon icon={faUser} />
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item " href="#">Normal</a></li>

                        </ul>
                    </section>

                    <li className="linea-bottom py-1">Salir <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={handleLogout} className='salir'></FontAwesomeIcon></li>

                </ul>

            </nav>


        </>
    )
}