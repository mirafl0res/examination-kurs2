import { useFavoritesStore } from "../../store/favoritesStore";

type FavoriteButtonProps = {
  id: string | number;
  title: string;
  image: string;
};

export default function FavoriteButton({ id, title, image }: FavoriteButtonProps) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const isFavorite = favorites.some((fav) => fav.id === String(id));

  return (
    <button
      className={`favorite-btn ${isFavorite ? "active" : ""}`}
      onClick={() =>
        toggleFavorite({
          id: String(id),
          title,
          image,
        })
      }
    >
      {isFavorite ? "❤︎" : "♡"}
    </button>
  );
}
