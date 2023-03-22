import { Card, Grid } from "@nextui-org/react";
import router, { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface FavoriteCardProps {
  id: number;
}

const FavoriteCard: FunctionComponent<FavoriteCardProps> = ({ id }) => {
  const router = useRouter();

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onPress={() => router.push(`/pokemon/${id}`)}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCard;
