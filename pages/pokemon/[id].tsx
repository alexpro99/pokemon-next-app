import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: any;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return <div></div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
