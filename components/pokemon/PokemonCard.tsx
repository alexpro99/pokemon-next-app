import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { SmallPokemon } from "../../interfaces";

interface PokemonCardProps {
  pokemon: SmallPokemon;
}

export const PokemonCard: FunctionComponent<PokemonCardProps> = ({
  pokemon,
}) => {
  const { id, img, name } = pokemon;

  const router = useRouter();

  const onClick = () => router.push(`/pokemon/${id}`);

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable css={{ p: 1 }} onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
