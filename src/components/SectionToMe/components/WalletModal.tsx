import Modal from "@/components/Modal/Modal";
import WalletData from "@/data/WalletData/Wallet";
import OptionWallet from "../components/OptionWallet";


interface WalletModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    closeModal: () => void;
};

const WalletModal: React.FC<WalletModalProps> = ({children, isOpen, closeModal}) => {

    return (
        <div className="w-full">
            { children }
            <Modal isOpen={isOpen} onClose={closeModal} title="Redes">
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