export default function Copyright() {
    return (
        <footer id="footer" className="flex justify-between items-center py-5">
            <p className="text-sm">&copy; Kuba Milcarz 2023 - 2024</p>

            <ul className="flex space-x-2 text-sm">
                <li><a href="#youtube" className="p-2 rounded-md hover:bg-slate-100">Bluesky</a></li>
                <li><a href="#newsletter" className="p-2 rounded-md hover:bg-slate-100">LinkedIn</a></li>
            </ul>
        </footer>
    );
}