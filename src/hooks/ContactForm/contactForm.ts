// useContactForm.ts
import emailjs from 'emailjs-com';
import useModalWallet from '@/hooks/ModalWallet/modalWallet';

import { useState, useRef, useEffect } from 'react';

const useContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const [stateSend, setStateSend] = useState(false);
    const [values, setValues] = useState({ from_name: '', reply_to: '', message: '' });
    const [errors, setErrors] = useState({ from_name: '', reply_to: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const userName = 'Santiago Alzate';
    const userId = 'lHbxwri0bpaOeQV6x';
    const serviceId = 'service_g40ssrd';
    const templateId = 'template_9sx7otq';

    const { isOpen, openModal, closeModal } = useModalWallet();

    useEffect(() => {
        emailjs.init(userId);
    }, [userId]);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateField = (name: string, value: string) => {
        let error = '';
        if (!value) {
            error = `El campo es obligatorio`;
        } else if (name === 'reply_to' && !validateEmail(value)) {
            error = 'El email no es válido';
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        validateField(name, value);
    };

    const validateForm = () => {
        const formErrors = { from_name: '', reply_to: '', message: '' };
        let isValid = true;

        if (!values.from_name) {
            formErrors.from_name = 'El campo es obligatorio';
            isValid = false;
        }

        if (!values.reply_to) {
            formErrors.reply_to = 'El campo es obligatorio';
            isValid = false;
        } else if (!validateEmail(values.reply_to)) {
            formErrors.reply_to = 'El email no es válido';
            isValid = false;
        }

        if (!values.message) {
            formErrors.message = 'El campo es obligatorio';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm() && form.current) {
            setIsLoading(true);
            emailjs.sendForm(serviceId, templateId, form.current)
                .then((result) => {
                    console.log(result.text);
                    setStateSend(true);
                    openModal();
                    form.current?.reset();
                    setValues({ from_name: '', reply_to: '', message: '' });
                }, (error) => {
                    console.log(error.text);
                    setStateSend(false);
                    openModal();
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    return {
        form,
        stateSend,
        values,
        errors,
        handleChange,
        sendEmail,
        userName,
        isOpen,
        closeModal,
        isLoading
    };
};

export default useContactForm;