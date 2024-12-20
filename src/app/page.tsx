import Apps from "@/sections/apps";
import Copyright from "@/sections/copyright";
import Hero from "@/sections/hero";
import Newsletter from "@/sections/newsletter";
import Youtube from "@/sections/youtube";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Kuba Milcarz" />
        <meta property="og:description" content="iOS Developer sharing his journey on YouTube" />
        <meta property="og:image" content="/cover.png" />
        <meta property="og:url" content="https://kubamilcarz.com" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5 my-5">
        <div className="max-w-4xl w-full space-y-12">
          <Hero />
          <Newsletter />
          <Apps />
          <Youtube />
          <Copyright />
        </div>
      </main>
    </>
  );
}
