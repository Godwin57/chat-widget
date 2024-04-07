import { FC } from "react";
import { MessageCardProps } from "../types/component-types";

const MessageCard: FC<MessageCardProps> = ({
    message,
    className = "",
    sender,
}) => {
    return (
        // This overflows. Remove the overflowing later.
        <div className={`${sender ? "flex justify-end" : ""} w-[100vw]`}>
            <p
                className={`${
                    sender ? "bg-blue-500" : "bg-light-400"
                } py-4 px-4 mx-10 my-2 max-w-[400px] rounded-lg ${className}`}
            >
                {message}
            </p>
        </div>
    );
};

export default MessageCard;
