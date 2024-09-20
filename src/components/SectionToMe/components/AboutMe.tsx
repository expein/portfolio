import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AboutMeProps {
    Icon?: any;
    children?: React.ReactNode;
};

const AboutMe = () => {
    return (
        <div className="flex flex-row gap-5 items-center">
            <FontAwesomeIcon icon={faLanguage} className="w-5 h-5" />
            <p>Español</p>
        </div>
    );
}

export default AboutMe;