import Head from "next/head";
import AppLayout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nirmal P.S</title>
        <meta name="description" content="Nirmal Ps portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout />
    </div>
  );
}
