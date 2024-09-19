import PlayVideo from "../../components/PlayVideo";
import { DUMMY_PLAYLISTS } from "../../shared/constants/dummy";
import { ICONS } from "../../shared/constants/icons";
import VideoComments from "./VideoComments";
import VideoListDetails from "./VideoListDetails";

function VideoDetails() {
    return (
        <div className="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
            <div className="col-span-12 w-full">
                <PlayVideo />
                <div
                    className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
                    role="button"
                    tabindex="0"
                >
                    <div className="flex flex-wrap gap-y-2">
                        <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                            <h1 className="text-lg font-bold">
                                Advanced React Patterns
                            </h1>
                            <p className="flex text-sm text-gray-200">
                                30,164 Views ·18 hours ago
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                            <div className="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                                <div className="flex overflow-hidden rounded-lg border">
                                    <button
                                        className="group/btn flex items-center gap-x-2 border-r border-gray-700 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                                        data-like="3050"
                                        data-like-alt="3051"
                                    >
                                        <span className="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                                            <img src={ICONS.DoLike} alt="" />
                                        </span>
                                    </button>
                                    <button
                                        className="group/btn flex items-center gap-x-2 px-4 py-1.5 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                                        data-like="20"
                                        data-like-alt="21"
                                    >
                                        <span className="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                                            <img src={ICONS.DoDisLike} alt="" />
                                        </span>
                                    </button>
                                </div>
                                <div className="relative block">
                                    <button className="peer flex items-center gap-x-2 rounded-lg bg-white px-4 py-1.5 text-black">
                                        <span className="inline-block w-5">
                                            <img src={ICONS.Save} alt="" />
                                        </span>
                                        Save
                                    </button>
                                    <div className="absolute right-0 top-full z-10 hidden w-64 overflow-hidden rounded-lg bg-[#121212] p-4 shadow shadow-slate-50/30 hover:block peer-focus:block">
                                        <h3 className="mb-4 text-center text-lg font-semibold">
                                            Save to playlist
                                        </h3>
                                        <ul className="mb-4">
                                            {DUMMY_PLAYLISTS.map(
                                                ({ id, label }) => {
                                                    return (
                                                        <li
                                                            key={id}
                                                            className="mb-2 last:mb-0"
                                                        >
                                                            <label
                                                                className="group/label inline-flex cursor-pointer items-center gap-x-3"
                                                                // for="Collections-checkbox"
                                                                htmlFor={id}
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="peer hidden"
                                                                    // id="Collections-checkbox"
                                                                    id={id}
                                                                />
                                                                <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-transparent bg-white text-white group-hover/label:border-[#ae7aff] peer-checked:border-[#ae7aff] peer-checked:text-[#ae7aff]">
                                                                    {/* <img
                                                                        src={
                                                                            ICONS.Square
                                                                        }
                                                                        alt=""
                                                                    /> */}

                                                                    {/* <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke-width="1.5"
                                                                        stroke="currentColor"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                                                                        ></path>
                                                                    </svg> */}
                                                                </span>
                                                                {label}
                                                            </label>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                        <div className="flex flex-col">
                                            <label
                                                for="playlist-name"
                                                className="mb-1 inline-block cursor-pointer"
                                            >
                                                Name
                                            </label>
                                            <input
                                                className="w-full rounded-lg border border-transparent bg-white px-3 py-2 text-black outline-none focus:border-[#ae7aff]"
                                                id="playlist-name"
                                                placeholder="Enter playlist name"
                                            />
                                            <button className="mx-auto mt-4 rounded-lg bg-[#ae7aff] px-4 py-2 text-black">
                                                Create new playlist
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                            <div className="mt-2 h-12 w-12 shrink-0">
                                <img
                                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="reactpatterns"
                                    className="h-full w-full rounded-full"
                                />
                            </div>
                            <div className="block">
                                <p className="text-gray-200">React Patterns</p>
                                <p className="text-sm text-gray-400">
                                    757K Subscribers
                                </p>
                            </div>
                        </div>
                        <div className="block">
                            <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                                <span className="inline-block w-5">
                                    <img src={ICONS.Subscribe} alt="" />
                                </span>
                                <span className="group-focus/btn:hidden">
                                    Subscribe
                                </span>
                                <span className="hidden group-focus/btn:block">
                                    Subscribed
                                </span>
                            </button>
                        </div>
                    </div>
                    <hr className="my-4 border-white" />
                    <div className="h-5 overflow-hidden group-focus:h-auto">
                        <p className="text-sm">
                            🚀 Dive into the world of React with our latest
                            tutorial series: &quot;Advanced React
                            Patterns&quot;! 🛠️ Whether you&#x27;re a seasoned
                            developer or just starting out, this series is
                            designed to elevate your React skills to the next
                            level.
                        </p>
                    </div>
                </div>
                <button className="peer w-full rounded-lg border p-4 text-left duration-200 hover:bg-white/5 focus:bg-white/5 sm:hidden">
                    <h6 className="font-semibold">5735 Comments...</h6>
                </button>
                <VideoComments />
            </div>
            <VideoListDetails />
        </div>
    );
}

export default VideoDetails;
