import Image from "next/image";
import Card from "@/components/card";
import AppsCarousel from "@/components/apps_carousel";

export default function Apps() {
    return (
        <Card>
            <div className="flex w-full flex-col items-center justify-center space-y-5">
                <div className="flex w-full flex-1 flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold font-serif w-full text-center">
                        My apps
                    </h1>
                    <p className="font-medium">Check out my most popular apps</p>
                </div>
                <AppsCarousel />
            </div>
        </Card>
    );
}