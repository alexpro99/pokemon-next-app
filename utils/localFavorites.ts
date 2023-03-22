const toggleFavorite = (id: number) => {
  let favorites: number[] = getAllFavorites();

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId != id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {

  const favorites: number[] = getAllFavorites();

  return favorites.includes(id);
};

const getAllFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default {
  toggleFavorite,
  existInFavorites,
  getAllFavorites,
};
