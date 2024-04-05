import TextArea from "./components/elements/Textarea";
import Header from "./components/Header";
import { PiSmileyStickerThin } from "react-icons/pi";
import { BsSendFill } from "react-icons/bs";
import MessageCard from "./components/Message-card";

function App() {
    return (
        <div className="bg-dark-400 text-white min-h-screen">
            <Header />
            {[1, 2, 3, 4, 5, 6].map((elem, index) => (
                <MessageCard
                    key={index}
                    message="This is the message I want to render in this chat"
                    sender={elem % 2 === 0}
                />
            ))}
            <TextArea
                placeholder="Enter your message here"
                withRightElement
                rightElement={
                    <BsSendFill className="w-8 h-8 text-blue-400 hover:text-blue-700" />
                }
                withLeftElement
                leftElement={
                    <PiSmileyStickerThin className="w-10 h-10 text-light-700 hover:text-white" />
                }
                name="Chat-box"
                fixedAtBottom
            />
        </div>
    );
}

export default App;
