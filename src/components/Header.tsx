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
        <div className="flex items-center justify-around px-6 py-6">
            <div>Icon</div>
            <div>
                <p className="font-bold">{title}</p>
                <p>{description}</p>
            </div>
            {activeStatus ? (
                <p className="flex gap-1">
                    <RiRadioButtonLine className="w-6 h-6 text-green-600" />
                    Online
                </p>
            ) : (
                <p className="flex gap-1">
                    <IoCloudOffline className="w-6 h-6 text-red-600" /> Offline
                </p>
            )}
        </div>
    );
};

export default Header;
