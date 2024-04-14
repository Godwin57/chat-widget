import { FC } from "react";
import { ButtonProps } from "../../types/component-types";

const Button: FC<ButtonProps> = ({
    name,
    onClick,
    type,
    className,
    width = "",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-5 py-3 bg-blue-600 rounded-lg ${className} ${width} hover:bg-blue-500`}
        >
            {name}
        </button>
    );
};

export default Button;
