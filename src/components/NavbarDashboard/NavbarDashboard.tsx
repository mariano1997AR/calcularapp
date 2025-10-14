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
                    <p className='logo-dashboard text-2xl'>Calcular AI </p>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M1703 4861 c-142 -52 -239 -169 -263 -318 -6 -32 -10 -201 -10 -375
l0 -317 -262 -3 c-243 -3 -266 -5 -303 -24 -55 -28 -102 -100 -110 -167 -3
-28 -5 -547 -3 -1153 l3 -1101 30 -49 c23 -37 44 -56 84 -76 l55 -28 253 0
253 0 0 -307 c0 -170 5 -335 10 -368 21 -131 105 -242 228 -302 l57 -28 1175
0 1175 0 60 29 c75 37 159 120 190 188 13 29 29 82 34 118 14 82 15 3866 2
3957 -19 132 -105 249 -226 309 l-60 29 -1160 2 c-1111 2 -1162 2 -1212 -16z
m2348 -204 c24 -13 58 -43 74 -66 29 -41 30 -47 33 -167 l4 -124 -1261 0
-1261 0 0 113 c0 88 4 121 19 153 19 42 65 85 111 103 16 6 429 10 1131 10
l1106 1 44 -23z m109 -2112 l0 -1555 -1260 0 -1260 0 0 130 0 130 518 0 c572
0 559 -1 626 66 59 59 56 -6 56 1237 l0 1144 -23 44 c-16 29 -40 54 -72 74
l-48 30 -529 3 -528 3 0 124 0 125 1260 0 1260 0 0 -1555z m-1525 5 l0 -1095
-835 0 -835 0 -3 1098 -2 1097 837 -2 838 -3 0 -1095z m1523 -1869 c-3 -103
-5 -112 -33 -152 -16 -23 -50 -53 -74 -66 l-45 -23 -1117 2 -1117 3 -44 30
c-67 47 -88 98 -88 217 l0 98 1261 0 1261 0 -4 -109z"/>
                            <path d="M2675 4557 c-17 -14 -28 -36 -32 -63 -5 -36 -1 -46 25 -75 l30 -34
201 0 201 0 27 28 c22 22 28 37 28 73 0 38 -5 50 -28 70 -28 24 -31 24 -227
24 -192 0 -200 -1 -225 -23z"/>
                            <path d="M1173 3436 l-28 -24 -3 -248 c-2 -175 0 -256 9 -276 24 -59 13 -58
653 -58 l586 0 32 29 33 29 3 243 c2 171 0 251 -9 271 -25 60 2 58 -651 58
l-597 0 -28 -24z m1077 -291 l0 -115 -455 0 -455 0 0 115 0 115 455 0 455 0 0
-115z"/>
                            <path d="M1174 2636 c-26 -26 -34 -42 -34 -71 0 -29 8 -45 34 -71 38 -38 77
-44 126 -19 37 19 50 43 50 90 0 47 -13 71 -50 90 -49 25 -88 19 -126 -19z"/>
                            <path d="M1731 2643 c-37 -38 -47 -74 -31 -114 52 -125 234 -65 199 67 -12 43
-41 66 -93 71 -40 5 -48 2 -75 -24z"/>
                            <path d="M2303 2660 c-61 -25 -74 -120 -24 -171 41 -41 98 -41 143 0 28 25 33
36 33 76 0 40 -5 51 -33 76 -34 30 -75 37 -119 19z"/>
                            <path d="M1177 2236 c-52 -48 -46 -124 13 -164 102 -69 218 72 131 159 -39 39
-105 41 -144 5z"/>
                            <path d="M1727 2232 c-52 -54 -41 -134 23 -167 68 -35 127 -5 154 78 8 25 -17
81 -45 101 -38 26 -101 21 -132 -12z"/>
                            <path d="M2279 2231 c-65 -65 -20 -181 71 -181 61 0 117 66 106 124 -17 84
-117 116 -177 57z"/>
                            <path d="M1203 1846 c-34 -15 -63 -61 -63 -98 0 -39 36 -86 72 -96 106 -28
183 88 111 168 -33 36 -76 45 -120 26z"/>
                            <path d="M1750 1842 c-50 -24 -70 -83 -46 -133 32 -69 115 -84 168 -31 52 51
38 135 -27 167 -42 19 -52 19 -95 -3z"/>
                            <path d="M2305 1845 c-40 -20 -57 -50 -57 -98 1 -89 112 -134 175 -71 55 54
40 141 -28 170 -43 17 -52 17 -90 -1z"/>
                            <path d="M2817 689 c-9 -5 -24 -24 -33 -41 -22 -43 -11 -90 28 -123 29 -24 38
-27 95 -23 71 4 107 29 117 79 7 37 -15 93 -42 108 -26 14 -141 14 -165 0z"/>
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
                            <Link to='/registro-organizacion'>Registro Organizacion</Link>
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