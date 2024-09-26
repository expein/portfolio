import React from 'react';

interface ToggleButtonProps {
    showAll: boolean;
    handleShowMore: () => void;
    handleShowLess: () => void;
    componentsLength: number;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ showAll, handleShowMore, handleShowLess, componentsLength }) => {
    return (
        <div className="mx-9 mt-4">
            {!showAll && componentsLength > 3 && (
                <button 
                    className="text-palletTwoTertiary underline-animation"
                    onClick={handleShowMore}
                >
                    Ver más
                </button>
            )}
            {showAll && (
                <button 
                    className="text-palletTwoTertiary underline-animation"
                    onClick={handleShowLess}
                >
                    Mostrar menos
                </button>
            )}
        </div>
    );
};

export default ToggleButton;