import React from "react";
import { ICONS } from "../shared/constants/icons";

const MAIN_NAV_ITEMS = [
    {
        containerClassName: "",
        icon: ICONS.Home,
        title: "Home",
    },

    {
        containerClassName: "hidden sm:block",
        icon: ICONS.Like,
        title: "Liked Videos",
    },

    {
        containerClassName: "",
        icon: ICONS.History,
        title: "History",
    },
    {
        containerClassName: "hidden sm:block",
        icon: ICONS.MyContent,
        title: "My Content",
    },
    {
        containerClassName: "",
        icon: ICONS.Collection,
        title: "Collections",
    },
    {
        containerClassName: "",
        icon: ICONS.Subscriber,
        title: "Subscribers",
    },
    {
        containerClassName: "mt-auto hidden sm:block",
        icon: ICONS.Support,
        title: "Support",
    },
    {
        containerClassName: "hidden sm:block",
        icon: ICONS.Settings,
        title: "Settings",
    },
];

function AppSideNav() {
    return (
        <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
            {MAIN_NAV_ITEMS.map(({ containerClassName, icon, title }) => (
                <li className={containerClassName}>
                    <button className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                        <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                            <img src={icon} alt="icon not found" />
                        </span>
                        <span className="block sm:hidden sm:group-hover:inline lg:block">
                            {title}
                        </span>
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default AppSideNav;
