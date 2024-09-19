interface ButtonProps {
    content: String;
    style?: String;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ content, style, onClick }) => {
    return (
        <button onClick={onClick} className={`${ style } flex justify-center items-center transition-all duration-200 px-5 py-2 rounded-md font-bold`}>{ content }</button>
    );
}

export default Button;