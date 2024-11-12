import React from 'react';

interface OptionNavbarProps {
    name: string;
    href: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const OptionNavbar: React.FC<OptionNavbarProps> = ({ name, href, onClick }) => {
    return (
        <div className="flex items-center justify-center w-full">
            <a href={href} onClick={onClick} className="relative inline-flex items-center justify-center w-full text-white transition-all duration-200 bg-palletTwoPrimary rounded-full h-8 sm:h-9 md:h-10 hover:bg-palletTwoTertiary">
                {name}
            </a>
        </div>
    );
}

export default OptionNavbar;