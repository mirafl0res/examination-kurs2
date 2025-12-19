import { useFavoritesStore } from "../../store/favoritesStore";
import "./FavoriteButton.css"

type FavoriteButtonProps = {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
};

export default function FavoriteButton({ id, title, image, servings, readyInMinutes}: FavoriteButtonProps) {
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
          servings,
          readyInMinutes,
        });
      }}
    >
      {isFavorite ? "❤︎" : "♡"}
    </button>
  );
}
