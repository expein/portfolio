interface AboutMeProps {
    icon?: React.ReactNode;
    children?: React.ReactNode;
};

const AboutMe: React.FC<AboutMeProps> = ({ icon, children }) => {
    return (
        <div className="flex flex-row gap-5 items-center">
            {icon && <span>{icon}</span>}
            <p>{children}</p>
        </div>
    );
}

export default AboutMe;