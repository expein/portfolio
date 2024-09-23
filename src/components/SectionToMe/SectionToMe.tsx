'use client';

import ProfileImage from "./components/ProfileImage";
import PersonalInfo from "./components/PersonalInfo";
import AboutMeSection from "./components/AboutMeSection";
import WalletModal from "./components/WalletModal";

const SectionToMe = () => {
    return (
        <>
            <div className="h-screen w-full grid grid-cols-2 gap-10 px-10">
                <ProfileImage />
                
                <div className="flex flex-col gap-10 items-center justify-center h-full">
                    <PersonalInfo />

                    <AboutMeSection />

                    <WalletModal />
                </div>
            </div>

        </>
    );
}

export default SectionToMe;