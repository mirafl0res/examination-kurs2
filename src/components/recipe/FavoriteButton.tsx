import { useFavoritesStore } from "../../store/favoritesStore";

type FavoriteButtonProps = {
  id: number;
  title: string;
  image: string;
};

export default function FavoriteButton({ id, title, image }: FavoriteButtonProps) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const isFavorite = favorites.some((fav) => fav.id === id);

  return (
    <button
      className={`favorite-btn ${isFavorite ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite({
          id,
          title,
          image,
        });
      }}
    >
      {isFavorite ? "❤︎" : "♡"}
    </button>
  );
}
