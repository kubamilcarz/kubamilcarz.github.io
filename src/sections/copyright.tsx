export default function Copyright() {
    return (
        <footer id="footer" className="flex justify-between items-center py-5">
            <p className="text-sm">&copy; Kuba Milcarz 2024. All rights reserved.</p>

            <ul className="flex space-x-2 text-sm">
                <li><a href="https://bsky.app/profile/kubamilcarz.bsky.social" className="p-2 rounded-md hover:bg-slate-100">Bluesky</a></li>
                <li><a href="https://www.linkedin.com/in/kubamilcarz/" className="p-2 rounded-md hover:bg-slate-100">LinkedIn</a></li>
            </ul>
        </footer>
    );
}