import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-noto-serif)]">
      <h1 className="text-4xl font-bold text-center">Hello, world!</h1>
      <Image
        src="/kubamilcarz.png"
        alt="Kuba Milcarz"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="text-lg text-center">
        I'm Kuba Milcarz, a software engineer and entrepreneur. I'm building a profitable app business.
      </p>
    </div>
  );
}
