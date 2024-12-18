import Apps from "@/sections/apps";
import Copyright from "@/sections/copyright";
import Hero from "@/sections/hero";
import Newsletter from "@/sections/newsletter";
import Youtube from "@/sections/youtube";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5 my-5">
      <div className="max-w-4xl w-full space-y-5">
        <Hero />
        <Newsletter />
        <Apps />
        <Youtube />
        <Copyright />
      </div>
    </main>
  );
}
