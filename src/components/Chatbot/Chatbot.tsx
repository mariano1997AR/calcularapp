import './Chatbot.css';
import { useState, useRef, useEffect } from 'react';
import type { Msg } from '../../types/types';




export const Chatbot = ({ setMostrarChatbot }: { setMostrarChatbot: (c: boolean) => void }) => {
    const [messages, setMessages] = useState<Msg[]>([]);
    const [input, setInput] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false); //visible 



    //Manejar seleccion de opcion clickeada
    const handleOptionClick = (option: string) => {
        setMessages((prev) => [...prev, { from: "user", text: option }]);
        sendMessages(option);
    }


    //scroll 
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);


    //Mensaje de bienvenida cuando se monta el componente 

    useEffect(() => {
        if (visible && messages.length === 0) {
            setMessages([
                {
                    from: "Rocket",
                    text: "👋 ¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
                },
            ]);
        }
    }, [visible])

    const sendMessages = async (text: string) => {
        if (!input.trim()) return;

        // 1. Muestra mensaje del usuario
        setInput("");
        setIsTyping(true); //activa el mensaje de "escribiendo..."

        try {
            // 2. Envía al backend
            const res = await fetch("https://rocketbot-bbpz.onrender.com/asistente", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });
            const data = await res.json();

            // 3. Muestra respuesta del bot
            const botMessage: Msg = {
                from: "Rocket",
                text: data.reply,
                options: data.options,
            };

            setMessages((prev) => [...prev, botMessage])
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    from: "Rocket",
                    text: "No pude conectar al servidor. Intentelo de nuevo"
                },
            ]);
        } finally {
            setIsTyping(false); //oculta el mensaje de "escribiendo..."
        }

    };

    if (!visible) {
        return (
            <section >
                <button
                    onClick={() => {
                        setVisible(true)
                        setMostrarChatbot(true)
                    }}
                    className="  "
                >
                    <svg className='asistente-virtual' xmlns="http://www.w3.org/2000/svg" version="1.0" width="40.000000pt" height="40.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                            <meta name="Producer" content="Online-Convert" /></metadata>
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M2425 5103 c-195 -70 -304 -232 -293 -438 9 -172 125 -324 292 -381 l46 -16 0 -254 0 -254 -752 0 c-837 0 -833 0 -967 -66 -88 -43 -201 -150 -248 -234 -67 -119 -76 -162 -81 -411 l-4 -226 -88 -5 c-74 -5 -97 -10 -149 -38 -76 -41 -134 -104 -161 -178 -20 -53 -21 -71 -18 -401 l3 -346 30 -53 c64 -117 175 -182 310 -182 l75 0 0 -197 c0 -230 12 -302 66 -413 89 -181 312 -329 497 -330 l37 0 0 -315 0 -316 26 -25 c54 -55 59 -52 609 316 l500 335 1035 5 c827 4 1043 8 1075 19 213 71 376 249 420 456 10 48 15 133 15 268 l0 197 75 0 c135 0 246 65 310 182 l30 53 3 346 c3 330 2 348 -18 401 -27 74 -85 137 -161 178 -52 28 -75 33 -149 38 l-88 5 -4 226 c-5 201 -8 233 -27 291 -72 207 -242 362 -446 405 -58 12 -199 15 -822 15 l-753 0 0 254 0 254 46 16 c112 38 204 122 256 232 23 50 31 84 35 147 12 187 -79 342 -245 420 -59 28 -79 32 -167 34 -77 3 -112 -1 -150 -14z m235 -184 c158 -71 198 -263 82 -391 -53 -59 -104 -82 -182 -82 -106 0 -195 64 -235 168 -45 117 26 269 146 312 53 19 138 16 189 -7z m1583 -1368 c127 -50 232 -172 261 -300 14 -61 16 -188 16 -1029 0 -601 -4 -979 -10 -1013 -25 -132 -119 -251 -247 -312 l-68 -32 -1040 -5 -1040 -5 -42 -22 c-23 -12 -227 -146 -455 -297 l-413 -276 -5 243 -5 244 -28 36 c-38 50 -78 69 -170 78 -193 19 -352 163 -387 348 -14 73 -14 1949 0 2022 22 115 110 239 208 292 108 59 13 56 1762 54 l1605 -2 58 -24z m-3823 -1331 l0 -420 -64 0 c-72 0 -115 22 -153 79 -23 33 -23 38 -23 338 0 241 3 310 14 331 31 60 90 92 169 92 l57 0 0 -420z m4454 387 c66 -51 66 -52 66 -390 0 -300 0 -305 -23 -338 -38 -57 -81 -79 -153 -79 l-64 0 0 421 0 421 69 -4 c56 -3 75 -9 105 -31z" />
                            <path d="M1460 2899 c-278 -46 -435 -360 -309 -617 126 -258 484 -318 688 -114 223 223 141 602 -153 710 -64 24 -155 32 -226 21z m194 -208 c119 -63 164 -208 103 -328 -64 -125 -215 -174 -336 -108 -88 48 -131 122 -131 224 0 113 74 207 187 237 61 16 115 8 177 -25z" />
                            <path d="M3513 2900 c-127 -19 -253 -111 -312 -228 -134 -265 27 -577 321 -623 231 -36 455 130 487 361 40 294 -204 534 -496 490z m184 -206 c83 -40 133 -121 133 -219 0 -98 -45 -173 -131 -220 -121 -66 -272 -17 -336 108 -59 117 -18 258 94 324 82 48 149 50 240 7z" />
                            <path d="M2073 1856 c-22 -19 -28 -32 -28 -65 0 -35 7 -47 48 -89 64 -65 142 -110 240 -140 71 -22 101 -25 227 -25 126 0 156 3 227 25 98 30 176 75 240 140 41 42 48 54 48 89 0 52 -38 89 -91 89 -27 0 -46 -10 -93 -54 -97 -89 -254 -131 -409 -109 -114 17 -181 46 -252 108 -71 64 -110 72 -157 31z" />
                        </g>
                    </svg>

                </button>



            </section>
        )
    }


    return (
        <>
            <div className=" flex flex-col  shadow rounded completo">
                {/* Barra superior */}
                <section className="barrera-superior  flex justify-between items-center  text-white px-4 py-2 " >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <metadata>
                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                <meta name="Producer" content="Online-Convert" /></metadata>
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000" stroke="none">
                                <path d="M2467 5070 c-98 -25 -190 -102 -235 -198 -24 -50 -27 -70 -27 -157 0 -89 3 -106 27 -155 38 -77 107 -143 184 -177 l64 -27 0 -168 0 -168 -858 0 c-577 0 -878 -4 -917 -11 -119 -22 -215 -93 -264 -198 -23 -49 -26 -71 -29 -173 l-4 -118 -101 0 c-86 0 -110 -4 -152 -24 -59 -27 -108 -74 -135 -131 -20 -40 -20 -63 -20 -961 l0 -920 26 -52 c27 -55 79 -103 138 -127 24 -10 70 -15 140 -15 l104 0 4 -123 c3 -108 7 -128 30 -173 36 -69 69 -106 126 -142 81 -53 139 -62 394 -62 l228 0 0 -354 0 -355 26 -20 c15 -12 39 -21 53 -21 17 0 266 138 677 375 l649 375 895 0 c986 0 965 -1 1062 62 57 36 90 73 126 142 23 45 27 65 30 174 l4 122 104 0 c70 0 116 5 140 15 59 24 111 72 138 127 l26 52 0 920 c0 898 0 921 -20 961 -27 57 -76 104 -135 131 -42 20 -66 24 -152 24 l-101 0 -4 118 c-3 102 -6 124 -29 173 -49 105 -145 176 -264 198 -39 7 -340 11 -917 11 l-858 0 0 168 0 168 64 27 c77 34 146 100 184 177 24 49 27 66 27 155 0 87 -3 107 -27 157 -34 72 -104 143 -174 175 -62 28 -182 39 -247 23z m173 -182 c67 -35 103 -86 108 -156 7 -98 -47 -173 -145 -203 -78 -23 -173 23 -214 103 -31 61 -23 144 17 195 36 46 105 83 154 83 20 0 56 -10 80 -22z m1794 -1063 c22 -11 54 -37 70 -58 l31 -39 3 -1296 c1 -714 0 -1312 -3 -1330 -8 -42 -59 -100 -110 -123 -38 -18 -92 -19 -960 -19 l-920 0 -590 -340 c-324 -187 -590 -340 -591 -340 -2 0 -4 141 -6 314 l-3 314 -24 26 -24 26 -286 0 c-257 0 -290 2 -326 19 -47 22 -89 64 -104 104 -8 20 -11 433 -11 1324 0 1421 -4 1327 59 1387 60 58 -40 55 1936 53 1798 -2 1820 -2 1859 -22z m-4024 -1420 l0 -945 -89 0 c-103 0 -133 16 -151 78 -14 51 -14 1683 0 1734 18 62 48 78 151 78 l89 0 0 -945z m4503 925 c15 -12 31 -38 37 -58 14 -51 14 -1683 0 -1734 -18 -62 -48 -78 -151 -78 l-89 0 0 945 0 945 89 0 c74 0 93 -3 114 -20z" />
                                <path d="M1507 3150 c-62 -16 -138 -59 -192 -111 -182 -172 -180 -460 4 -633 199 -185 528 -138 668 95 133 223 44 510 -193 621 -56 26 -80 31 -158 34 -50 2 -108 -1 -129 -6z m198 -177 c56 -19 121 -79 150 -138 28 -57 27 -166 -2 -221 -60 -114 -187 -175 -300 -145 -199 54 -267 298 -124 441 75 75 175 98 276 63z" />
                                <path d="M3397 3150 c-197 -50 -339 -246 -324 -450 12 -175 115 -317 277 -382 79 -31 230 -31 313 1 109 43 206 140 247 248 83 215 -16 457 -226 555 -56 26 -80 31 -158 34 -50 2 -108 -1 -129 -6z m195 -176 c151 -51 221 -234 142 -374 -87 -155 -289 -184 -413 -59 -105 105 -106 264 0 370 72 73 173 97 271 63z" />
                                <path d="M1962 1797 c-25 -27 -29 -82 -8 -113 20 -27 193 -108 299 -138 264 -76 543 -51 800 72 109 51 127 69 127 122 0 80 -74 102 -165 50 -134 -76 -281 -113 -455 -113 -174 0 -321 37 -455 113 -65 37 -113 39 -143 7z" />
                            </g>
                        </svg>

                    </span>
                    <button onClick={() => {
                        setVisible(false);
                        setMostrarChatbot(false);
                    }} className="text-white hover:text-red-300 chat-activo">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <metadata>
                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                <meta name="Producer" content="Online-Convert" /></metadata>
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000" stroke="none">
                                <path d="M479 5097 c-19 -12 -42 -38 -51 -57 -17 -33 -18 -172 -18 -2480 0 -2308 1 -2447 18 -2480 9 -19 32 -45 51 -57 l34 -23 1516 0 c1504 0 1516 0 1549 20 20 13 41 38 53 65 19 42 19 66 17 524 -3 467 -4 480 -24 507 -54 72 -129 92 -203 52 -82 -44 -81 -39 -81 -475 l0 -383 -1310 0 -1310 0 0 2250 0 2250 1310 0 1310 0 0 -383 c0 -436 -1 -431 81 -475 74 -40 149 -20 203 52 20 27 21 40 24 507 2 458 2 482 -17 524 -12 27 -33 52 -53 65 -33 20 -45 20 -1549 20 l-1516 0 -34 -23z" />
                                <path d="M3680 3491 c-39 -21 -80 -89 -80 -133 0 -16 6 -43 13 -61 8 -18 134 -155 281 -304 l268 -273 -1084 -2 c-1030 -3 -1084 -4 -1113 -21 -54 -33 -70 -65 -70 -137 0 -72 16 -104 70 -137 29 -17 83 -18 1120 -21 l1089 -2 -281 -283 c-246 -246 -282 -287 -289 -320 -13 -71 31 -154 94 -178 34 -13 88 -11 125 5 18 8 215 198 454 437 456 459 445 445 428 537 -6 32 -59 90 -428 461 -239 239 -436 429 -454 437 -45 19 -102 17 -143 -5z" />
                            </g>
                        </svg>
                    </button>
                </section>

                {/* Mensajes */}
                <div className="flex-1 overflow-auto p-4 space-y-2 bg-gray-50 " >
                    {messages.map((m, i) => (
                        <div
                            key={i}
                            className={`p-2 rounded w-fit ${m.from === "user"
                                ? "bg-blue-200 self-end"
                                : "bg-gray-500 self-start"
                                }`}


                        >
                            <div className="parrafo-mensaje" style={{ color: 'white' }}>{m.from}: {m.text}</div>

                            {/* Mostrar opciones si las tiene */}
                            {m.options && m.options.length > 0 && (
                                <div className="options">
                                    {m.options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionClick(opt)}
                                            className="option-button"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {isTyping && (
                        <div className="p-2 rounded bg-gray-200 w-fit animate-pulse self-start">
                            ✍️ Escribiendo...
                        </div>
                    )}



                    <div ref={messagesEndRef} />
                </div>

                {/* dato de entrada */}
                <div className="p-2 flex bg-white border-t">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key == "Enter" && input.trim()) {
                                e.preventDefault();
                                setMessages((prev) => [...prev, { from: "user", text: input.trim() }]);
                                sendMessages(input.trim());
                            }
                        }}
                        placeholder="Escribe tu mensaje..."

                        className="flex-1 border rounded px-3 py-2"
                        autoFocus={false}
                    />
                    <button
                        onClick={() => sendMessages(input.trim())}
                        className="ml-2 mx-2 px-4 py-2 bg-zinc-700 text-white rounded  btn-conversar-bot"

                    >
                        conversar
                    </button>
                </div>
            </div>

        </>
    )
}