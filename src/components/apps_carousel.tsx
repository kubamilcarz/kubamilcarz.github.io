const AppsCarousel = () => {
    const items = [
        { id: 1, content: 'Item 1', height: '150px' },
        { id: 2, content: 'Item 2', height: '200px' },
        { id: 3, content: 'Item 3', height: '100px' },
        { id: 4, content: 'Item 4', height: '250px' },
        { id: 5, content: 'Item 5', height: '180px' },
        { id: 6, content: 'Item 6', height: '220px' },
    ];

    return (
        <div className="w-full columns-1 sm:columns-1 md:columns-2 gap-5">

            {items.map((item) => (
                <div
                    key={item.id}
                    className="w-full mb-4 bg-gray-200 rounded-lg"
                    style={{ minHeight: 50 }}
                >
                    <p className="p-2">{item.content}</p>
                </div>
            ))}
        </div>
    );
};

export default AppsCarousel;