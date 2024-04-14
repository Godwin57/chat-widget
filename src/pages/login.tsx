import { ChangeEvent, useState } from "react";
import Input from "../components/Input";
import Button from "../components/elements/Button";
import useCookie from "../Hooks/useCookie";
import { isValidEmail } from "../lib/utils";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = ({ clientName = "Customer Support" }) => {
    const [userEmail, setUserEmail] = useState("");
    const [err, setErr] = useState(false);
    const { saveEmail } = useAuth();
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [email, setEmail, deleteEmail] = useCookie("userEmail");

    const handleEmailSubmit = () => {
        setErr((_) => !isValidEmail(userEmail));
        if (isValidEmail(userEmail)) {
            setEmail(userEmail, 7);
            saveEmail(userEmail);
            setUserEmail("");
            navigate("chat");
        }
    };

    return (
        <div className="bg-dark-500 min-h-[100vh] text-white flex flex-col justify-around px-4 fontFamily-Roboto">
            <h2 className="font-bold text-3xl mt-3 text-center">
                {clientName}
            </h2>
            <div className="bg-dark-300 min-h-[80vh] rounded-lg px-4 py-5 flex flex-col items-center gap-y-10">
                <Input
                    withLabel
                    label="Enter your email to continue"
                    labelStyles="font-bold text-center"
                    type="email"
                    placeholder="Enter your email"
                    name="login-input"
                    className="text-black"
                    value={userEmail}
                    width="w-[80vw]"
                    valueChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setUserEmail((_prev) => e.target.value)
                    }
                />
                {err && <p>Invalid email address. Try again</p>}
                <Button
                    name="Submit"
                    className="font-bold"
                    width="w-[80vw]"
                    onClick={handleEmailSubmit}
                />
            </div>
            <p className="font-bold text-center">Powered by CommanderCodes</p>
        </div>
    );
};

export default Login;
