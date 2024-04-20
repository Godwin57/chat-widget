import TextArea from "../components/elements/Textarea";
import Header from "../components/Header";
import { PiSmileyStickerThin } from "react-icons/pi";
import { BsSendFill } from "react-icons/bs";
import MessageCard from "../components/Message-card";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "@emoji-mart/react";
import io from "socket.io-client";
import useCookie from "../Hooks/useCookie";

function ChatSection() {
    const [showEmojis, setShowEmojis] = useState(false);
    const [email] = useCookie("userEmail");
    const emojiPickerRef = useRef(null);

    const [messageObj, setMessageObj] = useState({
        message: "",
        date: new Date(),
        sender: email,
    });

    const onMessageSubmit = (e) => {
        e.preventDefault();

        setMessageObj({
            message: "",
            date: new Date(),
            sender: email,
        });
    };

    const handleEmojiSelect = (emo: any) => {
        setMessageObj({
            ...messageObj,
            message: `${messageObj.message + emo.native}`,
        });
    };

    const handleEmojisDisplay = (event) => {
        event.stopPropagation();
        setShowEmojis((prevState) => !prevState);
    };

    useEffect(() => {
        const handleCloseOnWindowClick = (event) => {
            if (
                emojiPickerRef?.current &&
                !emojiPickerRef.current.contains(event.target)
            ) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                setShowEmojis((prevState) => false);
            }
        };

        window.addEventListener("click", handleCloseOnWindowClick);
        console.log("added");
        return () => window.removeEventListener("click", handleEmojisDisplay);
    }, [showEmojis]);

    // useEffect(() => {
    //     // Connect to the WebSocket server
    //     const socket = io("");

    //     // Event listeners
    //     socket.on("connect", () => {
    //         console.log("Connected to WebSocket server");
    //     });

    //     socket.on("disconnect", () => {
    //         console.log("Disconnected from WebSocket server");
    //     });

    //     // Cleanup on unmount
    //     return () => {
    //         socket.disconnect();
    //     };
    // }, []);

    return (
        <div className="bg-dark-400 text-white min-h-screen">
            <Header />
            <div className="max-h-[75vh] overflow-y-auto overflow-x-hidden sm:max-h-(80vh) messageScrollbar">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem, index) => (
                    <MessageCard
                        key={index}
                        message="This is the message I want to render in this chat"
                        sender={elem % 2 === 0}
                        className="mb-6"
                        senderName={email}
                    />
                ))}
            </div>
            <div className="">
                <div
                    className={`${
                        !showEmojis && "hidden"
                    } fixed ml-2 sm:ml-10 bottom-20`}
                    ref={emojiPickerRef}
                >
                    <EmojiPicker onEmojiSelect={handleEmojiSelect} />
                </div>
                <TextArea
                    valueChange={(e) =>
                        setMessageObj({
                            ...messageObj,
                            message: e.target.value,
                        })
                    }
                    placeholder="Enter your message here"
                    value={messageObj.message}
                    withRightElement
                    rightElement={
                        <BsSendFill
                            className="w-8 h-8 text-blue-400 hover:text-blue-700"
                            onClick={onMessageSubmit}
                        />
                    }
                    withLeftElement
                    leftElement={
                        <PiSmileyStickerThin
                            className="w-10 h-10 text-light-700 hover:text-white"
                            onClick={handleEmojisDisplay}
                        />
                    }
                    name="Chat-box"
                    fixedAtBottom
                />
            </div>
        </div>
    );
}

export default ChatSection;
