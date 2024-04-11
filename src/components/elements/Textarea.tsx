import { TextAreaProps } from "../../types/component-types";

const TextArea: React.FC<TextAreaProps> = ({
    value = "",
    error,
    placeholder,
    type = "text",
    valueChange,
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
                fixedAtBottom ? "fixed bottom-2" : "relative"
            } flex items-center justify-center w-[100%]`}
        >
            {withLeftElement && (
                <div className="absolute inset-y-0 left-5 sm:left-14 flex items-center justify-center cursor-pointer">
                    {leftElement}
                </div>
            )}
            {withRightElement && (
                <div className="absolute inset-y-0 flex items-center justify-center right-8 sm:right-16 cursor-pointer">
                    {rightElement}
                </div>
            )}

            <textarea
                placeholder={placeholder}
                value={value}
                name={name}
                id={name}
                onChange={valueChange}
                className={`w-[95%] focus:border-blue-500 py-2 rounded-full border-2 border-white px-20 outline-none bg-dark-400 text-white placeholder-white ${className}`}
            />
        </div>
    );
};

export default TextArea;

/* Error
Message not sent
    An icon would be displayed in the case of this particular error
*/
