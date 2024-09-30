import { useState } from "react";

const useNavbar = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const handleOpenDrawer = () => {
        setIsDrawerVisible(true);
    };

    const handleCloseDrawer = () => {
        setIsDrawerVisible(false);
    };

    return {
        isDrawerVisible,
        handleOpenDrawer,
        handleCloseDrawer
    }
};

export default useNavbar;