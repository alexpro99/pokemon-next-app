import { FunctionComponent } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: any;
  title?: string;
}

export const Layout: FunctionComponent<Props> = ({
  children,
  title = "PokemonsApp",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="alexpro99" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0x 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
