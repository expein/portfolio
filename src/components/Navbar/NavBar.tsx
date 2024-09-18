import OptionNavbar from "./components/OptionsNavbar";

const NavBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-5">
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1440px] text-white flex items-center justify-end p-[15px]">
                    <div className="flex justify-around items-center rounded-full p-[5px]">
                        <OptionNavbar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;