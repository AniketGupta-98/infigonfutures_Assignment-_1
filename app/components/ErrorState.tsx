interface ErrorStateProps {
    message?: string;
}

export default function ErrorState({
    message = "Something went wrong. Please try again.",
}: ErrorStateProps) {
    return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <p className="mb-4 text-sm text-red-600">
                {message}
            </p>

            <button
                onClick={() => window.location.reload()}
                className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
            >
                Retry
            </button>
        </div>
    );
}
