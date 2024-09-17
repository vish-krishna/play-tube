import React from "react";

const MobileMenuItems = [
    { icon: "/images/LikeIcon.svg", title: "Liked Videos" },
    { icon: "/images/MyContent.svg", title: "My Content" },
    { icon: "/images/SupportIcon.svg", title: "Support" },
    { icon: "/images/SettingsIcon.svg", title: "Settings" },
];

function AppHeader() {
    return (
        <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
            <nav className="mx-auto flex max-w-7xl items-center py-2">
                <div className="mr-4 w-12 shrink-0 sm:w-16">
                    <img src="/images/AppLogo.svg" alt="" />
                </div>
                <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
                    <input
                        className="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2"
                        placeholder="Search"
                    />
                    <span className="absolute left-2.5 top-1/2 inline-block -translate-y-1/2">
                        <img
                            className="h-4 w-4"
                            src="/images/SearchIcon.svg"
                            alt=""
                        />
                    </span>
                </div>
                <button className="ml-auto sm:hidden">
                    <img
                        className="h-4 w-4"
                        src="/images/SearchIcon.svg"
                        alt=""
                    />
                </button>
                <button className="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
                    <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
                    <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
                    <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
                </button>
                <div className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
                    <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
                        <span className="inline-block w-12">
                            <img src="/images/AppLogo.svg" alt="" />
                        </span>
                        <button className="inline-block w-8">
                            <img src="/images/CrossIcon.svg" alt="" />
                        </button>
                    </div>
                    <ul className="my-4 flex w-full flex-wrap gap-2 px-4 sm:hidden">
                        {MobileMenuItems.map(({ icon, title }) => {
                            return (
                                <li className="w-full">
                                    <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                                        <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                                            <img
                                                src={icon}
                                                alt="Icon not found"
                                            />
                                        </span>
                                        <span>{title}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="mb-8 mt-auto flex w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
                        <button className="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] sm:w-auto sm:bg-transparent">
                            Log in
                        </button>
                        <button className="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                            Sign up
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default AppHeader;
