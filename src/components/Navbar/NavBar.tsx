import OptionNavbar from "./components/OptionsNavbar";
import options from "@/data/OptionsNavbar/OptionsNavbar"

const NavBar = () => {
    return (
        <div className="sticky">
            <div className="w-full text-white flex items-center justify-center p-[15px]">
                <div className="w-1/2 h-[60px] flex justify-around items-center bg-palletTwoSecondary rounded-full p-[5px]">
                    {
                        options.map((option, index) => (
                            <OptionNavbar key={index} name={option.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default NavBar;