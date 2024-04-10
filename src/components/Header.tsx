import React from "react";
import { HeaderType } from "../types/component-types";
import { RiRadioButtonLine } from "react-icons/ri";
import { IoCloudOffline } from "react-icons/io5";

const Header: React.FC<HeaderType> = ({
    title = "Customer Support",
    description = "This is the customer support of the site",
    activeStatus = false,
}) => {
    return (
        <div className="flex items-center justify-around px-6 py-6 border-b-2 border-b-blue-500">
            <div>Icon</div>
            <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="hidden sm:block">{description}</p>
            </div>
            {!activeStatus ? (
                <p className="flex gap-1 items-center">
                    <RiRadioButtonLine className="w-4 h-4 text-green-600" />
                    Online
                </p>
            ) : (
                <p className="flex gap-1 items-center font-bold">
                    <IoCloudOffline className="w-4 h-4 text-red-600" />{" "}
                    <span className="text-sm">Offline</span>
                </p>
            )}
        </div>
    );
};

export default Header;
