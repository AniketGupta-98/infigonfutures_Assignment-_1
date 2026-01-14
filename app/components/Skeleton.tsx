export default function Skeleton() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5">
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
    );
}
