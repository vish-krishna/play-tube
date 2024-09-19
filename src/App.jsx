import AppHeader from "./components/AppHeader";
import AppSideNav from "./components/AppSideNav";
import EmptyVideoContent from "./components/EmptyVideoContent";
import VideoDetails from "./pages/videos/VideoDetails";
import VideoList from "./pages/videos/VideoList";
import { ICONS } from "./shared/constants/icons";

function App() {
    return (
        <div className="h-screen overflow-y-auto bg-[#121212] text-white">
            <AppHeader />

            <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
                {/* <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px]"> */}
                {/* <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]"> */}
                <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky">
                    <AppSideNav />
                </aside>

                <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                    <VideoDetails />
                    {/* <VideoList /> */}

                    {/* <EmptyVideoContent
                        icon={ICONS.Play}
                        title={"No videos available"}
                        description={
                            "There are no videos here available. Please try to search some thing else."
                        }
                    /> */}
                </section>
            </div>
        </div>
    );
}

export default App;
