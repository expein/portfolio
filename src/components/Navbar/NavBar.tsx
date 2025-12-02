"use client";

import React, { useState } from 'react';
import OptionNavbar from "./components/OptionsNavbar";
import NavbarData from '@/data/NavbarData/NavbarData';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1440px] text-white flex items-center justify-center p-[15px]">
                    <div className="w-full lg:w-1/2 flex justify-around items-center rounded-lg p-[5px] bg-palletTwoSecondary gap-1">
                        <div className="hidden sm:flex justify-around items-center w-full gap-1">
                            {
                                NavbarData.map((item, index) => (
                                    <OptionNavbar
                                        key={index}
                                        name={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    />
                                ))
                            }
                        </div>
                        <div className="sm:hidden flex flex-col w-full">
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-white bg-palletTwoPrimary rounded-lg h-8 sm:h-9 md:h-10">
                                Menu
                            </button>
                            <div className={`flex flex-col items-center w-full bg-palletTwoSecondary rounded-lg gap-1 transition-all duration-300 ${isDropdownOpen ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`} style={{ visibility: isDropdownOpen ? 'visible' : 'hidden' }}>
                                {
                                    NavbarData.map((item, index) => (
                                        <OptionNavbar
                                            key={index}
                                            name={item.name}
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                                                setIsDropdownOpen(false);
                                            }}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;