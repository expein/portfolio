'use client';

import ProfileImage from "./components/ProfileImage";
import PersonalInfo from "./components/PersonalInfo";
import AboutMeSection from "./components/AboutMeSection";
import WalletModal from "./components/WalletModal";
import useModalWallet from "@/hooks/ModalWallet/modalWallet";
import Button from "../Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const SectionToMe = () => {
    const {
        isOpen,
        openModal,
        closeModal,
    } = useModalWallet();

    return (
        <>
            <div className="min-h-screen w-full grid md:grid-cols-2 grid-cols-1 gap-10 px-10">
                <ProfileImage />
                
                <div className="flex flex-col gap-10 items-center justify-center h-full">
                    <PersonalInfo />

                    <AboutMeSection />

                    <WalletModal 
                        isOpen={isOpen}
                        closeModal={closeModal}
                    >
                        <Button onClick={openModal} style="bg-palletTwoTertiary text-palletTwoQuaternary hover:bg-transparent border-2 border-palletTwoTertiary">
                            <FontAwesomeIcon icon={faWallet} className="w-5 h-5 mr-5" /> (Mis redes)
                        </Button>
                    </WalletModal>
                </div>
            </div>
        </>
    );
}

export default SectionToMe;