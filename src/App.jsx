import AppHeader from "./components/AppHeader";
import AppSideNav from "./components/AppSideNav";
import { ICONS } from "./shared/constants/icons";

function App() {
    return (
        <div className="h-screen overflow-y-auto bg-[#121212] text-white">
            <AppHeader />

            <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
                {/* <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px]"> */}
                <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
                    <AppSideNav />
                </aside>

                <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                    <div className="flex h-full items-center justify-center">
                        <div className="w-full max-w-sm text-center">
                            <p className="mb-3 w-full">
                                <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                                    <img
                                        src={ICONS.Play}
                                        className="w-6"
                                        alt=""
                                    />
                                </span>
                            </p>
                            <h5 className="mb-2 font-semibold">
                                No videos available
                            </h5>
                            <p>
                                There are no videos here available. Please try
                                to search some thing else.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
