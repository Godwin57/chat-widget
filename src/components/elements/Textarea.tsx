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
                fixedAtBottom ? "fixed bottom-5" : "relative"
            } flex items-center justify-center w-[100%]`}
        >
            {withLeftElement && (
                <div className="absolute inset-y-0 left-14 flex items-center justify-center cursor-pointer">
                    {leftElement}
                </div>
            )}
            {withRightElement && (
                <div className="absolute inset-y-0 flex items-center justify-center right-16 cursor-pointer">
                    {rightElement}
                </div>
            )}

            <textarea
                placeholder={placeholder}
                name={name}
                id={name}
                className={`w-[95%] focus:border-green-500 px-16 py-4 rounded-full border-2 border-white outline-none bg-dark-400 text-white placeholder-white ${className}`}
            />
        </div>
    );
};

export default TextArea;

/* Error
Message not sent
    An icon would be displayed in the case of this particular error

*/
