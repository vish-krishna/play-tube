import { DUMMY_COMMENTS } from "../../shared/constants/dummy";

// const DUMMY_COMMENTS = [];

function CommentList() {
    if (DUMMY_COMMENTS.length === 0) return null;
    return (
        <div>
            <hr className="my-4 border-white" />
            {DUMMY_COMMENTS.map((comment) => (
                <div key={comment.id}>
                    <div className="flex gap-x-4">
                        <div className="mt-2 h-11 w-11 shrink-0">
                            <img
                                src={comment.avatar}
                                alt={comment.handle}
                                className="h-full w-full rounded-full"
                            />
                        </div>
                        <div className="block">
                            <p className="flex items-center text-gray-200">
                                {comment.username} ·{" "}
                                <span className="text-sm">
                                    {comment.publishedAt}
                                </span>
                            </p>
                            <p className="text-sm text-gray-200">
                                {comment.handle}
                            </p>
                            <p className="mt-3 text-sm">{comment.comment}</p>
                        </div>
                    </div>
                    <hr className="my-4 border-white" />
                </div>
            ))}
        </div>
    );
}

function VideoComments() {
    return (
        <div className="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-[#121212] p-4 duration-200 hover:top-[67px] peer-focus:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
            <div className="block">
                <h6 className="mb-4 font-semibold">573 Comments</h6>
                <input
                    type="text"
                    className="w-full rounded-lg border bg-transparent px-2 py-1 placeholder-white"
                    placeholder="Add a Comment"
                />
            </div>
            <CommentList />
        </div>
    );
}

export default VideoComments;
