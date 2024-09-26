"use client";

import React, { useState } from 'react';
import OptionNavbar from "./components/OptionsNavbar";
import Drawer from '../Drawer/Drawer';

const NavBar = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const handleOpenDrawer = () => {
        setIsDrawerVisible(true);
    };

    const handleCloseDrawer = () => {
        setIsDrawerVisible(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1440px] text-white flex items-center justify-end p-[15px]">
                    <div className="flex justify-around items-center rounded-full p-[5px]">
                        <OptionNavbar onOpenDrawer={handleOpenDrawer} />
                    </div>
                </div>
            </div>
            <Drawer isVisible={isDrawerVisible} onClose={handleCloseDrawer} />
        </div>
    );
}

export default NavBar;