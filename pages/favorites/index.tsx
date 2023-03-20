import { NextPage } from "next";
import { Layout } from "../../components/layouts";

interface Props {}

const FavoritesPage: NextPage<Props> = ({}) => {
  return <Layout title="Pokemons Favoritos">Favoritos</Layout>;
};

export default FavoritesPage;
