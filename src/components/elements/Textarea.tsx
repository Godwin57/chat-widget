import { TextAreaProps } from "../../types/component-types";

const TextArea: React.FC<TextAreaProps> = ({
    error,
    placeholder,
    type = "text",
    onChange,
    onFocus,
    className = "",
    disabled = false,
    withLeftElement,
    leftElement,
    rightElement,
    withRightElement,
    label = "",
    withLabel,
    name,
    fixedAtBottom,
}) => {
    return (
        <div
            className={`${
                fixedAtBottom ? "fixed bottom-0" : "relative"
            } flex items-center justify-center w-[100%]`}
        >
            {withLeftElement && (
                <div className="absolute inset-y-0 left-12 flex items-center justify-center cursor-pointer">
                    {leftElement}
                </div>
            )}
            {withRightElement && (
                <div className="absolute inset-y-0 flex items-center justify-center right-14 cursor-pointer">
                    {rightElement}
                </div>
            )}

            <textarea
                placeholder={placeholder}
                name={name}
                id={name}
                className={`w-[95%] px-4 pl-24 py-4 rounded-full bg-light-400 text-white placeholder-white ${className}`}
            />
        </div>
    );
};

export default TextArea;

/* Error
Message not sent
    An icon would be displayed in the case of this particular error

*/
