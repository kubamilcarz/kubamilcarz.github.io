import Image from "next/image";
import Card from "@/components/card";

export default function Youtube() {
    return (
        <Card>
            <div className="flex w-full flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
                <div className="flex w-full flex-1 flex-col items-center justify-center">
                    <Image src="/youtube.svg" alt="Newsletter" width={500} height={500} />
                </div>
                <div className="flex w-full flex-1 flex-col items-center justify-center space-y-5">
                    <div className="flex flex-col items-center justify-center space-y-5">
                        <h1 className="text-3xl font-bold font-serif w-full text-center md:text-left">
                            Sharing the journey on<br /><span style={{ color: 'var(--secondary)' }}>YouTube</span>
                        </h1>
                        <p className="font-medium w-full text-center md:text-left">
                            New video twice on every Tuesday and Saturday. Covering topics iOS development, books, and productivity related.
                        </p>
                    </div>

                    <div className="flex w-full flex-col items-center justify-center md:items-start space-y-3 md:py-10">
                        <p className="font-medium text-center md:text-left">Subscribe now and join over 130 people!</p>
                        <button className="md:w-auto bg-[var(--secondary)] rounded-xl py-3 px-20 md:px-6 font-bold text-white">
                            Watch now</button>
                    </div>
                </div>
            </div>
        </Card>
    );
}