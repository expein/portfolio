import React from 'react';

interface OptionNavbarProps {
    onOpenDrawer: () => void;
}

const OptionNavbar: React.FC<OptionNavbarProps> = ({ onOpenDrawer }) => {
    return (
        <div className="flex items-center justify-end ml-auto">
            <button type="button" className="p-2 -m-2 text-palletTwoSecondary transition-all duration-200 lg:hidden hover:text-gray-700" >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <button onClick={onOpenDrawer} type="button" className="relative inline-flex items-center justify-center text-white transition-all duration-200  bg-palletTwoSecondary rounded-full w-9 h-9 md:w-12 md:h-12 hover:bg-palletTwoQuaternary hover:text-palletTwoSecondary">
                <svg className="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-palletTwoTertiary rounded-full -top-1 -left-1"> 4 </span>
            </button>
        </div>
    );
}

export default OptionNavbar;