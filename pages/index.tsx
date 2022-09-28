import Head from "next/head";
import HeroSection from "../components/HeroSection";
import KdAppBar from "../components/KdAppBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DAVID KINUTHIA | DEV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/kd_io_favicon.ico" />
      </Head>
      <main>
        <KdAppBar />
        <HeroSection />
      </main>
    </div>
  );
}
