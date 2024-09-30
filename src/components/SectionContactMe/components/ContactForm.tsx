// ContactForm.tsx
import Button from '@/components/Button/Button';
import React, { ChangeEvent, FormEvent } from 'react';

interface ContactFormProps {
    form: React.RefObject<HTMLFormElement>;
    values: {
        from_name: string;
        reply_to: string;
        message: string;
    };
    errors: {
        from_name?: string;
        reply_to?: string;
        message?: string;
    };
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    sendEmail: (e: FormEvent<HTMLFormElement>) => void;
    userName: string;
    isLoading: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ form, values, errors, handleChange, sendEmail, userName, isLoading }) => (
    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className='hidden'>
            <div className="mt-2">
                <input type="text" name="to_name" id="to_name" value={userName} />
            </div>
        </div>
        
        <div>
            <label className="text-base font-normal text-palletTwoQuaternary"> Nombre </label>
            <div className="mt-2">
                <input type="text" name="from_name" id="from_name" placeholder="Ingresa tu nombre completo" className={`block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-transparent border-2 ${errors.from_name ? 'border-red-500' : 'border-palletTwoTertiary'} rounded-md focus:outline-none focus:ring-0`} value={values.from_name} onChange={handleChange} />
                {errors.from_name && <p className="text-red-500 text-sm">{errors.from_name}</p>}
            </div>
        </div>
        
        <div>
            <label className="text-base font-normal text-palletTwoQuaternary"> Email </label>
            <div className="mt-2">
                <input type="email" name="reply_to" id="reply_to" placeholder="Ingresa tu email" className={`block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-transparent border-2 ${errors.reply_to ? 'border-red-500' : 'border-palletTwoTertiary'} rounded-md focus:outline-none focus:ring-0`} value={values.reply_to} onChange={handleChange} />
                {errors.reply_to && <p className="text-red-500 text-sm">{errors.reply_to}</p>}
            </div>
        </div>
        
        <div className="sm:col-span-2">
            <label className="text-base font-normal text-palletTwoQuaternary"> Mensaje </label>
            <div className="mt-2">
                <textarea name="message" id="message" placeholder="Escribe tu mensaje" className={`block w-full px-5 py-4 text-base font-normal text-white placeholder-gray-500 bg-transparent border-2 ${errors.message ? 'border-red-500' : 'border-palletTwoTertiary'} rounded-md resize-y focus:outline-none focus:ring-0`} value={values.message} onChange={handleChange}></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
        </div>

        <div className="sm:col-span-2">
            <Button type="submit" style=" px-6 py-4 text-sm font-bold text-palletTwoQuaternary bg-palletTwoTertiary border-2 border-palletTwoTertiary hover:bg-transparent " disabled={isLoading}>
                {
                    isLoading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                    ) : 'Enviar'
                }
            </Button>
        </div>
    </form>
);

export default ContactForm;