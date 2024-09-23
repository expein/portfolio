'use client';

import Image from "next/image";
import myimg from "../../assets/img/My.jpg";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import WalletData from "@/data/WalletData/Wallet"
import OptionWallet from "./components/OptionWallet";
import AboutMeData from "@/data/AboutMeData/AboutMedata";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLanguage, faWallet } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AboutMe from "./components/AboutMe";

const SectionToMe = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="h-screen w-full grid grid-cols-2 gap-10 px-10">
                <div className="flex items-center justify-center">
                    <div className="rounded-full overflow-hidden lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] relative" style={{ filter: 'drop-shadow(0 4px 6px rgba(255, 0, 0, 0.3))' }}>
                        <Image src={myimg} alt="sectionToMe" layout="fill" className="object-cover" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-10 items-center justify-center h-full">
                        <div className="text-left w-full">
                            <h1 className="text-4xl font-bold">Hola, soy <span className="text-palletTwoTertiary">Santiago</span></h1>
                            <p className="text-xl">Desarrollador FullStack</p>
                        </div>
                        <div className="text-justify w-full">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempore reprehenderit, fugit quisquam inventore quae rem vel ut molestiae ad architecto, corrupti quo similique nihil blanditiis assumenda in magni delectus?</p>
                        </div>

                        <div className="flex flex-row gap-7 w-full">
                            {
                                AboutMeData.map((about, index) => (
                                    <AboutMe key={index} icon={about.icon}>{about.title}</AboutMe>
                                ))
                            }
                        </div>
                        
                        <div className="w-full">
                            <Button onClick={handleOpen} style="bg-palletTwoTertiary text-palletTwoQuaternary hover:bg-transparent border-2 border-palletTwoTertiary">
                                <FontAwesomeIcon icon={faWallet} className="w-5 h-5 mr-5" /> (Mis redes)
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <div className="grid grid-cols-1 gap-4">
                    {
                        WalletData.map((wallet, index) => (
                            <OptionWallet key={index} title={wallet.title} url={wallet.url} Icon={wallet.icon} />
                        ))
                    }
                </div>
            </Modal>
        </>
    );
}

export default SectionToMe;