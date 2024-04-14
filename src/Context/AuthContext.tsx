import { createContext, useContext, useState } from "react";
import { AuthContextTypes } from "../types/AuthTypes";

const AuthContext = createContext<AuthContextTypes>({
    email: "",
    saveEmail: () => {},
});

export default function AuthProvider({ children }: { children: JSX.Element }) {
    const [email, setEmail] = useState("");

    const saveEmail = (email: string) => {
        setEmail(email);
    };

    return (
        <AuthContext.Provider value={{ email, saveEmail }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
