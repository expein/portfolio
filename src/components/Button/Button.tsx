interface ButtonProps {
    children: String;
    style?: String;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, style, onClick }) => {
    return (
        <button onClick={onClick} className={`${ style } flex justify-center items-center transition-all duration-200 px-5 py-2 rounded-md font-bold`}>{ children }</button>
    );
}

export default Button;