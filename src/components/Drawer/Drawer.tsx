import React from 'react';
import Article from './components/Article';
import articleSection from '@/data/ArticlesSections';

import { motion, AnimatePresence } from 'framer-motion';

interface DrawerProps {
    isVisible: boolean;
    onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isVisible, onClose }) => {

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className='fixed inset-0 bg-black bg-opacity-75 z-50'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleOutsideClick}
                >
                    <motion.div
                        className="fixed inset-y-0 right-0 w-full h-full max-w-xs sm:max-w-sm bg-white"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <div className="fixed inset-y-0 right-0 w-full h-full max-w-xs sm:max-w-sm">
                            <div className="h-full overflow-hidden bg-palletTwoPrimary">
                                <div className="flex flex-col h-full">
                                    <div className="flex-shrink-0 px-4 py-5">
                                        <div className="flex items-center justify-between">
                                            <p className="text-base font-bold text-palletTwoQuaternary">Carrito de compras</p>

                                            <button
                                                type="button"
                                                className="p-2 -m-2 text-palletTwoQuaternary transition-all duration-200 bg-transparent rounded-md hover:bg-palletTwoQuaternary hover:text-palletTwoSecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                                onClick={onClose}
                                            >
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex-1 overflow-y-auto">
                                        <div className="px-4 py-2 sm:px-6">
                                            <div className="flow-root">
                                                <ul className="-my-5 divide-y divide-gray-200 divide-dotted">
                                                    {
                                                        articleSection.map((article, index) => (
                                                            <Article key={index} title={article.title} id={article.id} url={article.url} />
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-4 py-5 border-t border-gray-200 sm:p-6">
                                        <ul className="space-y-4">
                                            <li className="flex items-center justify-between">
                                                <p className="text-sm font-medium text-palletTwoQuaternary">Sub total</p>
                                                <p className="text-sm font-medium text-palletTwoQuaternary">$399</p>
                                            </li>

                                            <li className="flex items-center justify-between">
                                                <p className="text-sm font-medium text-palletTwoTertiary">Total</p>
                                                <p className="text-sm font-bold text-palletTwoTertiary">$399</p>
                                            </li>
                                        </ul>

                                        <div className="mt-5 space-y-3">
                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-palletTwoSecondary transition-all duration-200 bg-palletThreeQuaternary border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-transparent hover:border-palletTwoQuaternary focus:bg-transparent hover:text-palletTwoQuaternary focus:border-palletTwoQuaternary"
                                            >
                                                Checkout
                                            </button>

                                            <button
                                                type="button"
                                                className="
                                                    inline-flex
                                                    items-center
                                                    justify-center
                                                    w-full
                                                    px-6
                                                    py-4
                                                    text-sm
                                                    font-bold
                                                    text-palletTwoQuaternary
                                                    transition-all
                                                    duration-200
                                                    bg-palletTwoTertiary
                                                    border-2 
                                                    border-palletTwoTertiary
                                                    rounded-md
                                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                                                    hover:bg-transparent
                                                    focus:bg-gray-200
                                                "
                                            >
                                                Continuar compra
                                            </button>
                                        </div>
                                    </div>
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