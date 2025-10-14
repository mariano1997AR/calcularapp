
interface Props {
    onBack: () => void;
    onFinish: () => void;
}




export const StepThree = ({ onBack, onFinish }: Props) => {
    return (
        <>
            <div className="p-4 border rounded shadow">
                <h2 className="text-xl font-bold mb-2">Paso 3</h2>
                <p>Esta es la tercera ventana.</p>
                <div className="mt-4 flex justify-between">
                    <button onClick={onBack} className="px-4 py-2 bg-gray-500 text-white rounded">
                        Volver
                    </button>
                    <button onClick={onFinish} className="px-4 py-2 bg-green-600 text-white rounded">
                        Finalizar
                    </button>
                </div>
            </div>
        </>
    )
}