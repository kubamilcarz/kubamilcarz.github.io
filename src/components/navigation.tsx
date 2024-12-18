export default function Navigation() {
    return (
        <nav id="navigation" className="flex justify-between items-center">
            <a href="/">
                <div className="flex space-x-2">
                    <div className="font-bold font-serif text-xl" style={{ color: 'var(--secondary)' }}>KM</div>
                    <h1 className="font-bold font-serif text-xl">Kuba Milcarz</h1>
                </div>
            </a>

            <ul className="flex space-x-1 text-sm">
                <li><a href="/apps" className="p-2 rounded-md hover:bg-slate-100">Apps</a></li>
                <li><a href="#youtube" className="p-2 rounded-md hover:bg-slate-100">YouTube</a></li>
                <li><a href="#newsletter" className="p-2 rounded-md hover:bg-slate-100">Newsletter</a></li>
            </ul>

        </nav>
    );
}