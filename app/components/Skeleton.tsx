export default function Skeleton() {
    return (
        <div className=" max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
                <div className="w-full md:max-w-sm rounded-lg border">
                    <div className="h-10 w-full animate-pulse rounded-md border border-gray-200 bg-gray-200"></div>
                </div>
                <div className="flex gap-3">
                    <div className="w-full md:w-39 rounded-lg border">
                        <div className="h-10 w-full animate-pulse rounded-md bg-gray-200"></div>
                    </div>
                    <div className="w-full md:w-22 rounded-lg border">
                        <div className="h-10 w-full animate-pulse rounded-md bg-gray-200"></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse rounded-lg border p-4">
                        <div className="mb-4 h-48 w-full rounded bg-gray-200" />
                        <div className="mb-2 h-3 w-1/3 rounded bg-gray-200" />
                        <div className="mb-1 h-4 w-full rounded bg-gray-200" />
                        <div className="mb-4 h-4 w-5/6 rounded bg-gray-200" />
                        <div className="h-5 w-1/4 rounded bg-gray-200" />
                    </div>
                ))}
            </div>
        </div>
    );
}
