import { FC } from "react";
import { InputProps } from "../types/component-types";

const Input: FC<InputProps> = ({
    type = "text",
    name,
    className,
    value,
    placeholder,
    error,
    disabled,
    withLabel,
    label,
    width = "",
    labelStyles,
    valueChange,
}) => {
    return (
        <div className="flex flex-col gap-y-5">
            {withLabel && <p className={`${labelStyles}`}>{label}</p>}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={valueChange}
                className={`border-2 border-blue-400 ${width} rounded-lg px-4 py-4 ${className}`}
            />
        </div>
    );
};

export default Input;
