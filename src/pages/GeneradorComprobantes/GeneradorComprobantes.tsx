import './GeneradorComprobantes.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { generarPDF, type DatosPDF } from '../../utils/generarPDF';
import { FirmaDigital } from '../../components/FirmaDigital/FirmaDigital';

interface FormData {
    nombreEmisor: string;
    nombreEmpresaPedido: string;
    nombreNegocio: string;
    localidad: string;
    direccion: string;
    telefono: string;
    email: string;

}

export const GeneradorComprobantes = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [firma, setFirma] = useState<string>('');

    const onSubmit = (data: FormData) => {
        if (!firma) {
            return;
        }

        const datosPDF: DatosPDF = { ...data, firma };
        generarPDF(datosPDF);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='formulario-contrato'>
            <h1 className='text-center text-2xl'>Comprobante de facturación</h1>
            <input placeholder='Razón social o nombre del emisor' {...register('nombreEmisor', {
                required: 'El campo es obligatorio',
                minLength: { value: 5, message: 'El nombre debe tener al menos 5 caracteres' }
            })} required className='inputs' />
            {errors.nombreEmisor && <span className='error-message'>{errors.nombreEmisor.message}</span>}

            {/* nombre de empresa del pedido */}
            <input placeholder='Nombre de la empresa del pedido' {...register('nombreEmpresaPedido', {
                required: 'El nombre de la empresa es obligatorio',
                minLength: { value: 3, message: 'El nombre de la empresa debe tener al menos 3 caracteres' }
            })} required className='inputs' />
            {errors.nombreEmpresaPedido && <span className='error-message'>{errors.nombreEmpresaPedido.message}</span>}

            {/* Nuevo campo para el nombre del negocio */}
            <input placeholder='Nombre del negocio' {...register('nombreNegocio', {
                required: 'El nombre del negocio es obligatorio',
                minLength: { value: 3, message: 'El nombre del negocio debe tener al menos 3 caracteres' }
            })} required className='inputs' />
            {errors.nombreNegocio && <span className='error-message'>{errors.nombreNegocio.message}</span>}

            {/*   
            <input
                type='text'
                inputMode='numeric'
                maxLength={8}
                placeholder='DNI'
                {...register('Dni', {
                    required: 'El DNI es obligatorio',
                    pattern: {
                        value: /^[0-9]{1,8}$/, 
                        message:'Solo se permite dni valido hasta 8 dígitos'
                    }
                })}
                required
                className='inputs'
            />
            {errors.Dni && <span className='error-message'>{errors.Dni.message}</span>}*/}

            {/* campo para localidad */}
            <input
                placeholder='Localidad' {...register('localidad', {
                    required: 'La localidad es obligatoria',
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: 'Solo se permiten letras'
                    }
                })}


                required className='inputs' />
            {errors.localidad && <span className='error-message'>{errors.localidad.message}</span>}

            <input placeholder='Dirección' {...register('direccion', {
                required: 'La dirección es obligatoria',
                pattern: {
                    value: /^[A-Za-z0-9\s]+$/,
                    message: 'Solo se permiten letras y numeros'
                }

            })} required className='inputs' />
            {errors.direccion && <span className='error-message'>{errors.direccion.message}</span>}
            <input
                type='text'
                inputMode='tel'
                placeholder='+54... numero de celular'
                {...register('telefono', {
                    required: 'El teléfono es obligatorio',
                    pattern: {
                        value: /^\+?[0-9]+$/,
                        message: 'El teléfono no es válido'
                    }
                })}
                required
                className='inputs'
            />
            {errors.telefono && <span className='error-message'>{errors.telefono.message}</span>}
            <input
                placeholder='Email'
                type='email'
                {...register('email', {
                    required: 'El email es obligatorio',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'El email no es válido'
                    }
                })}
                required
                className='inputs'
            />
            {errors.email && <span className='error-message'>{errors.email.message}</span>}
            <FirmaDigital setFirma={setFirma} />

            <button type='submit'>Generar PDF</button>
        </form>

    )
}   