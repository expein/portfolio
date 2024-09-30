interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    style?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, type, style, onClick, disabled }) => {
    return (
        <button disabled={disabled ? disabled : false} type={type ? type : "button"} onClick={onClick} className={`${ style } flex justify-center items-center transition-all duration-200 px-5 py-2 rounded-md font-bold`}>
            { children }
        </button>
    );
}

export default Button;