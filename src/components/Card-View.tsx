import { FC } from "react";
import { CardViewProps } from "../types/component-types";

// Would use this to display modals and sidebar(s)

// Add a property that indicates whether the modal should close on click of the window screen
const Modal: FC<CardViewProps> = ({
    children,
    withCloseIcon,
    closeIcon,
    closeModal,
    open = true,
    className,
    title,
    closeOnWindowClick,
    modalWidth = "",
    positionClass = "",
}) => {
    return (
        <div
            className={`${modalWidth} ${positionClass} min-h-40 bg-dark-400 border-2 border-blue-600`}
        >
            {withCloseIcon && (
                <div className="py-4 px-6 bg-blue-600">
                    <div className="font-bold">{title}</div>
                    <div>{closeIcon}</div>
                </div>
            )}
        </div>
    );
};

export default Modal;
