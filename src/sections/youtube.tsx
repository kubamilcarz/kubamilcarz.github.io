import Image from "next/image";
import Card from "@/components/card";

const videos = [
    { title: "How I Prototype Apps Fast", date: "2024-12-9", thumbnail: "/vid3.jpg", link: "https://youtu.be/1QhbHgeyMDk" },
    { title: "Before You Launch Your First App", date: "2024-12-13", thumbnail: "/vid1.jpg", link: "https://youtu.be/43xissHbVAw" },
    { title: "How to Read More Books While Working Full-Time", date: "2024-12-4", thumbnail: "/vid2.jpg", link: "https://youtu.be/GSMuCf0sGEA" },
];


export default function Youtube() {
    return (
        <Card>
            <div className="flex w-full flex-col items-center justify-center space-y-5">
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

                <Card className="w-full bg-background shadow-lg shadow-slate-100">
                    <div className="flex flex-col items-center justify-center space-y-5">
                        <div className="w-full flex flex-col md:flex-row items-center justify-between space-x-2 space-y-3">
                            <h1 className="text-4xl font-bold font-serif w-full text-center md:text-left">
                                Featured videos
                            </h1>
                            <a href="" className="bg-[var(--primary)] rounded-full font-bold text-white text-nowrap px-3 py-3 hover:text-slate-200">Dev Snippets</a>
                        </div>
                        <div className="flex flex-col md:flex-row items-start justify-center gap-5 w-full">
                            {videos.map((video, index) => (
                                <a key={index} href={video.link} className="flex-1 flex flex-col items-center justify-start group space-y-2">
                                    <div className="w-full overflow-hidden">
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.title}
                                            width={300}
                                            height={200}
                                            className="rounded-xl object-cover"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <h2 className="text-lg font-bold line-clamp-2">{video.title}</h2>
                                        <p className="text-xs text-gray-400">{video.date}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </Card>
    );
}