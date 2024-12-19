import Image from "next/image";
import Card from "@/components/card";

export default function Apps() {
    const items = [
        { id: 1, title: 'Bookie', description: 'Bookie is a simple app to keep track of your reading progress. It allows you to add books, update their progress, and mark them as read.', logo: 'bookie.png', image: '/bookiePreview.png', color: '#FDB773', link: "https://getbookie.app", platforms: ['iOS', 'macOS', 'visionOS'] },
        {
            id: 4,
            title: "Escape",
            description: "Escape is a travel journal app. It allows you to add trips, add places you visited, and write about your experiences.",
            logo: 'escape.png',
            image: '/escapePreview.png',
            color: '#CD2012',
            link: "https://apps.apple.com/pl/app/escape-plan-trips-memories/id6502307615",
            platforms: ['iOS']
        },
        { id: 2, title: "Coffee Note", description: "Coffee Note is a simple app to keep track of your coffee brewing recipes. It allows you to add recipes, update them, and delete them.", logo: 'coffeenote.png', image: '/coffeenotePreview.png', color: '#4D180B', link: "https://apps.apple.com/pl/app/coffee-note-brew-taste/id6447321924", platforms: ['iOS', 'macOS', 'visionOS'] },
        {
            id: 3,
            title: "Memorize",
            description: "Memorize is a flashcards learning app designed to help you study efficiently. Create decks, review them, and track your progress.",
            logo: 'memorize.png',
            image: '/memorizePreview.png',
            color: '#36AADC',
            link: "https://apps.apple.com/pl/app/memorize-learn-and-remember/id1631928972",
            platforms: ['iOS', 'macOS', 'visionOS']
        },
        {
            id: 5,
            title: "Reflect",
            description: "Reflect is a weekly review journal app. Organize your thoughts, plan for the future, and reflect on your achievements.",
            logo: 'reflect.png',
            image: '/reflectPreview.png',
            color: '#418E65',
            link: "https://apps.apple.com/pl/app/reflect-journal-mood/id6465793543",
            platforms: ['iOS', 'macOS', 'visionOS']
        },
        {
            id: 6,
            title: "Palace",
            description: "Palace is a simple math game designed to help you memorize digits of pi. It's a fun challenge for all math lovers!",
            logo: 'palace.png',
            image: '/palacePreview.png',
            color: '#1C7571',
            link: "https://apps.apple.com/pl/app/palace-master-pi/id6463832558",
            platforms: ['iOS']
        }
    ];

    return (
        <div className="columns-1 md:columns-2 gap-6">
            <div className="flex flex-col items-center justify-center space-y-5 mb-5">
                <h1 className="text-4xl font-bold font-serif w-full text-center md:text-left">
                    Crafting<br /><span style={{ color: 'var(--secondary)' }}>elegant</span> experiences
                </h1>
                <p className="font-medium w-full text-center md:text-left">
                    Each app is designed with the user in mind. I focus on simplicity and ease of use. I believe design is not just how it looks, but how it works.
                </p>
            </div>

            {items.map((item) => (
                <a href={item.link} key={item.id} target="_blank" className="mb-6 block break-inside-avoid rounded-lg hover:drop-shadow transition-transform">
                    <Card>
                        <div className="flex flex-col items-center justify-center space-y-5">
                            <Image
                                src={`${item.image}`}
                                alt={item.title}
                                width={500}
                                height={500}
                            />

                            <div className="flex flex-col items-center justify-center md:justify-start space-y-5">
                                <div className="flex flex-row items-center justify-center w-full md:justify-start space-x-2">
                                    <Image
                                        src={`/${item.logo}`}
                                        alt={item.title}
                                        width={44}
                                        height={44}
                                        className="rounded-lg"
                                    />
                                    <h1 className="md:flex-1 text-2xl font-bold font-serif text-center md:text-left md:w-full">
                                        {item.title}
                                    </h1>
                                </div>
                                <p className="font-medium w-full text-center md:text-left">
                                    {item.description}
                                </p>
                                <p className="font-medium w-full text-center md:text-right text-xs text-slate-400">
                                    {item.platforms.join(', ')}
                                </p>
                            </div>
                        </div>
                    </Card>
                </a>
            ))}

            <div className="flex flex-col items-center justify-center space-y-5 mb-5">
                <h1 className="text-3xl font-bold font-serif w-full text-center md:text-left">
                    And so much <span style={{ color: 'var(--secondary)' }}>more</span>
                </h1>
                <p className="font-medium w-full text-center md:text-left">
                    I&apos;m always working on new projects. Stay tuned for more apps and updates I share on...
                </p>
            </div>

        </div>
    );
}