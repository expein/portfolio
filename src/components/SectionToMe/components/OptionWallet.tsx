import Link from "next/link";

interface OptionWalletProps {
    title: string;
    url: string;
    Icon: React.ReactNode;
};

const OptionWallet: React.FC<OptionWalletProps> = ({ title, url, Icon }) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Link href={url} passHref>
            <div 
                onClick={handleClick}
                className="overflow-hidden bg-palletTwoSecondary text-palletTwoQuaternary transition-all duration-200 border border-palletTwoSecondary cursor-pointer rounded-xl hover:border-palletTwoTertiary hover:bg-palletTwoTertiary"
            >
                <div className="p-4">
                    <div className="flex items-center justify-between space-x-6">
                        <p className="flex-1 text-sm font-bold ">
                            { title }
                        </p>
                        { Icon }
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default OptionWallet;