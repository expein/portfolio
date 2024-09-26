import React from 'react';

interface DrawerHeaderProps {
    onClose: () => void;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ onClose }) => {
    return (
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
    );
};

export default DrawerHeader;