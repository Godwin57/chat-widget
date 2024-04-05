import TextArea from "./components/elements/Textarea";
import Header from "./components/Header";
import { PiSmileyStickerThin } from "react-icons/pi";
import { BsSendFill } from "react-icons/bs";

function App() {
    return (
        <div className="bg-dark-400 text-white min-h-screen">
            <Header />
            <TextArea
                placeholder="Enter your message here"
                withRightElement
                rightElement={<BsSendFill className="w-8 h-8" />}
                withLeftElement
                leftElement={<PiSmileyStickerThin className="w-10 h-10" />}
            />
        </div>
    );
}

export default App;
