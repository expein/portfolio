import Modal from "@/components/Modal/Modal";
import WalletData from "@/data/WalletData/Wallet";
import OptionWallet from "../components/OptionWallet";
import Button from "@/components/Button/Button";
import useModalWallet from "@/hooks/ModalWallet/modalWallet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const WalletModal = () => {

    const {
        isOpen,
        openModal,
        closeModal,
    } = useModalWallet();

    return (
        <div className="w-full">
            <Button onClick={openModal} style="bg-palletTwoTertiary text-palletTwoQuaternary hover:bg-transparent border-2 border-palletTwoTertiary">
                <FontAwesomeIcon icon={faWallet} className="w-5 h-5 mr-5" /> (Mis redes)
            </Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="grid grid-cols-1 gap-4">
                {WalletData.map((wallet, index) => (
                    <OptionWallet key={index} title={wallet.title} url={wallet.url} Icon={wallet.icon} />
                ))}
                </div>
            </Modal>
        </div>
    );
};

export default WalletModal;