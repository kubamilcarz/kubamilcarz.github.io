import Image from "next/image";
import Card from "@/components/card";

export default function Newsletter() {
    return (
        <Card>
            <div className="flex w-full flex-col md:flex-row-reverse items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
                <div className="flex w-full flex-1 flex-col items-center justify-center">
                    <Image src="/newsletter.svg" alt="Newsletter" width={500} height={500} />
                </div>
                <div className="flex w-full flex-1 flex-col items-center justify-center space-y-5">
                    <div className="flex flex-col items-center justify-center space-y-5">
                        <h1 className="text-3xl font-bold font-serif w-full text-center md:text-left">
                            Sign up to<br /><span style={{ color: 'var(--accent)' }}>Kuba's Notes</span>
                        </h1>
                        <p className="font-medium w-full text-center md:text-left">
                            Get the latest updates on my apps, YouTube videos and more. Every week on Sunday.
                        </p>
                    </div>

                    <div className="flex w-full flex-col items-center justify-center md:items-start space-y-3 md:py-10">
                        <p className="font-medium text-center md:text-left">Join many subscribers, or read online.</p>
                        <button className="md:w-auto bg-[var(--accent)] rounded-xl py-3 px-20 md:px-6 font-bold text-white">
                            Sign up</button>
                        <p className="text-center md:text-justify text-xs">I share current status on building profitable app business every single week straight in your mailbox. You will gain access to insights I learn and stories I found the most interesting in the previous week.</p>

                    </div>
                </div>
            </div>
        </Card>
    );
}