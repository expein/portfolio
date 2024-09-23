interface AboutMeProps {
    icon?: any;
    children?: React.ReactNode;
};

const AboutMe: React.FC<AboutMeProps> = ({icon, children}) => {
    return (
        <div className="flex flex-row gap-5 items-center">
            { icon }
            <p>{ children }</p>
        </div>
    );
}

export default AboutMe;