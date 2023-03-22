import { width } from "@mui/system";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { localFavorites } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  console.log(pokemon);
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: 5 }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: 30 }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                width="100%"
                height={200}
                alt={pokemon.name}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button onPress={onToggleFavorite} color="gradient" ghost>
                Guardar en favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprities:</Text>
              <Container direction="row" display="flex">
                <Image
                  width={100}
                  height={100}
                  alt={pokemon.name}
                  src={pokemon.sprites.front_default}
                />
                <Image
                  width={100}
                  height={100}
                  alt={pokemon.name}
                  src={pokemon.sprites.back_default}
                />
                <Image
                  width={100}
                  height={100}
                  alt={pokemon.name}
                  src={pokemon.sprites.front_shiny}
                />
                <Image
                  width={100}
                  height={100}
                  alt={pokemon.name}
                  src={pokemon.sprites.back_shiny}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons = [...Array(10)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const {
    data: { name, sprites },
  } = await pokeApi.get<Pokemon>(`pokemon/${id}`);

  return {
    props: {
      pokemon: {
        id,
        name,
        sprites,
      },
    },
  };
};

export default PokemonPage;
