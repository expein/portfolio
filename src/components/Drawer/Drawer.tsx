import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DrawerHeader from './components/DrawerHeader';
import DrawerContent from './components/DrawerContent';
import DrawerFooter from './components/DrawerFooter';
import useOutsideClick from '@/hooks/Drawer/drawer';

interface DrawerProps {
    isVisible: boolean;
    onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isVisible, onClose }) => {
    const drawerRef = useRef<HTMLDivElement>(null);

    useOutsideClick(drawerRef, onClose);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[1000] grid h-screen w-screen px-4 py-24 bg-black bg-opacity-75 sm:px-6 lg:px-8 place-items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="fixed inset-y-0 z-[1000] right-0 w-full h-full max-w-xs sm:max-w-sm bg-palletTwoPrimary"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        ref={drawerRef}
                    >
                        <div className="fixed inset-y-0 right-0 w-full h-full max-w-xs sm:max-w-sm">
                            <div className="h-full overflow-hidden bg-palletTwoPrimary">
                                <div className="flex flex-col h-full">
                                    <DrawerHeader onClose={onClose} />
                                    <DrawerContent />
                                    <DrawerFooter />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Drawer;