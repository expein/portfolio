// ContactModal.tsx
import React from 'react';
import Modal from '@/components/Modal/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

interface ContactModalProps {
    stateSend: boolean;
    isOpen: boolean;
    closeModal: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ stateSend, isOpen, closeModal }) => (
    <Modal title={ 
        stateSend ? 
            (
                <div className='flex flex-row gap-4'>
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl mb-4" />
                    Mensaje envíado con éxito.
                </div>
            )
            : (
                <div className='flex flex-row gap-4'>
                    <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 text-4xl mb-4" />                            
                    Fallo al envíar.
                </div>
            ) 
        } 
        isOpen={isOpen} 
        onClose={closeModal}
    >
        {
            stateSend ? (
                <div className='mb-10'>
                    <p className="text-center text-palletTwoQuaternary">
                        Gracias por el interes, me póndre en contacto contigo lo más pronto posible
                    </p>
                </div>
            ) : (
                <div>
                    <p className="text-center text-palletTwoQuaternary">
                        Ha ocurrido un error, por favor intenta de nuevo
                    </p>
                </div>
            )
        }
    </Modal>
);

export default ContactModal;