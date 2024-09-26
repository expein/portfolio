import { useState } from 'react';

const useToggleDisplay = (initialCount: number) => {
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    const displayedCount = showAll ? Infinity : initialCount;

    return { showAll, handleShowMore, handleShowLess, displayedCount };
};

export default useToggleDisplay;