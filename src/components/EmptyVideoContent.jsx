function EmptyVideoContent({ icon, title, description }) {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="w-full max-w-sm text-center">
                <p className="mb-3 w-full">
                    <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                        <img src={icon} className="w-6" alt="" />
                    </span>
                </p>
                <h5 className="mb-2 font-semibold">{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default EmptyVideoContent;
