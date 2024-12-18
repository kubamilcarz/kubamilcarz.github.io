import Image from "next/image";
import Card from "@/components/card";
import Navigation from "@/components/navigation";

export default function Hero() {
    return (
        <Card className="flex flex-col space-y-8">
            <Navigation />

            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-5 md:space-y-0">
                <Image
                    src="/kubamilcarz.png"
                    alt="Hero"
                    width={130}
                    height={130}
                    className="w-auto rounded-full"
                />

                <div className="flex flex-col items-center md:items-start justify-center space-y-5">
                    <h1 className="text-4xl font-bold font-serif" style={{ color: 'var(--secondary)' }}>Hi there!</h1>
                    <p className="text-center md:text-left font-medium">
                        Hi I'm Kuba - iOS developer with 6 apps on the App Store and a finalist of Swift Student Challenge 2024.
                    </p>
                    <p className="text-center md:text-left">
                        Join me on my journey on YouTube and via newsletter.
                    </p>
                </div>
            </div>
        </Card>
    );
}