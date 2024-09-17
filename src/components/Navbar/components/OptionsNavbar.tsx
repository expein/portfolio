import React from 'react';

interface OptionNavbarProps {
    name: string;
};

const OptionNavbar: React.FC<OptionNavbarProps> = ({name}) => {
    return (
        <div className="w-full h-full flex items-center justify-center font-bold cursor-pointer hover:bg-palletTwoPrimary rounded-full transition-all hover:transition-all">
            {name}
        </div>
    );
}

export default OptionNavbar;