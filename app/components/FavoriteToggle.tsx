
"use client";

interface FavoriteToggleProps {
    isFavorite: boolean;
    onToggle: () => void;
}

export default function FavoriteToggle({
    isFavorite,
    onToggle,
}: FavoriteToggleProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className={`rounded-full p-2 transition
        ${isFavorite
                    ? "text-red-500 hover:text-red-600"
                    : "text-gray-400 hover:text-gray-600"
                }
      `}
        >
            {isFavorite ? "❤️" : "🤍"}
        </button>
    );
}
