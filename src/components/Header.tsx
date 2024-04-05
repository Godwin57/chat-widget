import React from "react";
// import { FcCustomerSupport } from "react-icons/fc";
import { HeaderType } from "../types/component-types";

const Header: React.FC<HeaderType> = ({
    title = "Customer Support",
    description = "This is the customer support of the ",
    activeStatus = false,
}) => {
    return (
        <div className="flex gap-10 px-6 py-6">
            <div>Icon</div>
            <div>
                <p className="font-bold">{title}</p>
                <p>{description}</p>
                <p>{activeStatus}</p>
            </div>
        </div>
    );
};

export default Header;
