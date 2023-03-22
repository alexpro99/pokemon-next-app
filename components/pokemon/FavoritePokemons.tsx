import { Grid } from "@nextui-org/react";
import { FunctionComponent } from "react";
import FavoriteCard from "./FavoriteCardPokemon";

interface FavoritePokemonsProps {
  favoritePokemons: number[];
}

export const FavoritePokemons: FunctionComponent<FavoritePokemonsProps> = ({
  favoritePokemons,
}) => (
  <Grid.Container gap={2} direction="row" justify="flex-start">
    {favoritePokemons.map((id) => (
      <FavoriteCard key={id} id={id} />
    ))}
  </Grid.Container>
);
