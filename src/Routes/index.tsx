import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import ChatSection from "../pages/chatSection";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "chat",
        element: <ChatSection />,
    },
]);

export default router;
