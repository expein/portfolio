import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
    
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed inset-0 z-50 grid h-screen w-screen px-4 py-24 bg-black bg-opacity-75 sm:px-6 lg:px-8 place-items-center"
                    onClick={handleOutsideClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div 
                        className="relative w-full max-w-xl mx-auto overflow-hidden bg-palletTwoPrimary rounded-xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between space-x-6">
                                <p className="flex-1 text-xl font-bold text-palletTwoQuaternary">
                                    Cartera
                                </p>
                    
                                <div>
                                    <button type="button"
                                        onClick={onClose}
                                        className="p-1 -m-1 text-gray-400 transition-all duration-200 bg-palletTwoPrimary rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                    >
                                        <span className="sr-only">
                                            Close
                                        </span>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-palletTwoPrimary">
                            { children }
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;