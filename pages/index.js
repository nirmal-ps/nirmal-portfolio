import Head from "next/head";
import AppLayout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nirmal P.S</title>
        <meta name="description" content="Nirmal Ps portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout />
    </div>
  );
}
