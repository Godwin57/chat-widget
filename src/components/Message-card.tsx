import { FC } from "react";
import { MessageCardProps } from "../types/component-types";

const MessageCard: FC<MessageCardProps> = ({
    message,
    className = "",
    sender,
    senderName = "Nothing",
}) => {
    return (
        // This overflows. Remove the overflowing later.
        <div className={`${sender ? "flex justify-end" : ""} w-[100vw] mt-5`}>
            <div
                className={`${
                    sender ? "bg-blue-500" : "bg-light-400"
                } py-2 px-2 mx-4 max-w-[250px] min-w-[250px] sm:max-w-[400px] sm:min-w-[300px] sm:mx-8 sm:px-6 sm:py-4 rounded-lg ${className} flex flex-col gap-2`}
            >
                <p className="text-[13px]">{senderName}</p>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default MessageCard;
