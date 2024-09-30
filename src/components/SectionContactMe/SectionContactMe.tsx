// SectionContactMe.tsx
'use client';

import React from 'react';
import Section from "../Section/Section";
import useContactForm from '@/hooks/ContactForm/contactForm';
import ContactModal from './components/ContactModal';
import ContactForm from './components/ContactForm';

const SectionContactMe = () => {
    const {
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
    } = useContactForm();

    return (
        <>
            <ContactModal stateSend={stateSend} isOpen={isOpen} closeModal={closeModal} />
            <Section title="Contactame">
                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:mt-16">
                    <div className="flex justify-center">
                        <div className="md:w-1/2 w-full">
                            <ContactForm
                                form={form} 
                                values={values} 
                                errors={errors} 
                                handleChange={handleChange} 
                                sendEmail={sendEmail} 
                                userName={userName} 
                                isLoading={isLoading}
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default SectionContactMe;