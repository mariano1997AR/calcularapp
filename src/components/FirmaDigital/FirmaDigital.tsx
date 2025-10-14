import { useRef, useState, useEffect } from 'react';
import './FirmaDigital.css';

type Props = {
    setFirma: (firma: string) => void;
}



export const FirmaDigital: React.FC<Props> = ({ setFirma }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [drawing, setDrawing] = useState(false);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        setDrawing(true);
        draw(e);
    };

    const endDrawing = () => {
        setDrawing(false);
        if (canvasRef.current) {
            setFirma(canvasRef.current.toDataURL('image/png'));
        }
    };

    const draw = (e: any) => {
        if (!drawing || !canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        let rect = canvasRef.current.getBoundingClientRect();
        let x, y;

        if (e.touches) {
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    const clearCanvas = () => {
        if (!canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setFirma('');
    };

    useEffect(() => {
        // Inicializa el canvas
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    }, []);






    return (
        <section className='container-firma-digital'>
            <h2 className='text-center text-xl mb-2'>Firma Digital</h2>
            <div className='signature-wrapper'>
                <canvas
                    ref={canvasRef}
                    className='canvas'
                    width={500}
                    height={200}
                    style={{ border: '1px solid #ccc', touchAction: 'none' }}
                    onMouseDown={startDrawing}
                    onMouseUp={endDrawing}
                    onMouseMove={draw}
                    onMouseLeave={endDrawing}
                    onTouchStart={startDrawing}
                    onTouchEnd={endDrawing}
                    onTouchMove={draw}
                />
            </div>
            <section>
                <button className='btn' onClick={clearCanvas}>Limpiar Firma</button>
            
            </section>

        </section>
    )
}