export type PokemonListResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: SmallPokemon[];
};

export type SmallPokemon = {
  name: string;
  url: string;
  id: number;
  img: string;
};
