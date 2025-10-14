import { useState, useEffect } from "react";

interface Props {
    onBack: () => void;
    onSiguiente: () => void;
}

const pasos = [
    "Tensiora Aplication va a pedirte los datos",
    "Me llamo Rocket y estoy para ayudarte",
    "En solo 3 pasos vas a poder automatizar tu organizacion",
    "Con Mistral IA y gpt vas a poder elegir diferentes diseños de IA",
    "Si elegiste solo Rocket v1 vas a poder personalizar los chatbot",


]



export const StepTwo = ({ onBack, onSiguiente }: Props) => {





    /* pasos */

    const [tiposPasos, setTipoPasos] = useState<string>(pasos[0]);





    useEffect(() => {
        const interval = setInterval(() => {
            setTipoPasos(pasos[Math.floor(Math.random() * pasos.length)]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);





    return (
        <>
            <section className="p-4 border rounded shadow mb-4">
          
                <p>Esta es la segunda ventana.</p>
                <button onClick={onBack} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
                    Volver
                </button>
                <button onClick={onSiguiente} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Siguiente
                </button>
            </section>


        </>

    )
}