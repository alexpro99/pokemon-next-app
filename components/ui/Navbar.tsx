import { FunctionComponent } from "react";
import { Spacer, Text, useTheme } from "@nextui-org/react";

interface NavbarProps {}

export const Navbar: FunctionComponent<NavbarProps> = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okemon
      </Text>
      <Spacer css={{flex: 1}}/>
      <Text color="white">Favoritos</Text> 
    </div>
  );
};
