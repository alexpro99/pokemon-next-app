import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

interface Props {}

const FavoritesPage: NextPage<Props> = ({}) => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getAllFavorites());
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      {favoritePokemons.length ? (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      ) : (
        <NoFavorites />
      )}
    </Layout>
  );
};

export default FavoritesPage;
