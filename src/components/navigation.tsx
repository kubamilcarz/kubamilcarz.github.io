import Link from "next/link";

export default function Navigation() {
    return (
        <nav id="navigation" className="flex justify-between items-center">
            <Link href="/">
                <div className="flex space-x-2">
                    <div className="font-bold font-serif text-xl" style={{ color: 'var(--secondary)' }}>KM</div>
                    <h1 className="font-bold font-serif text-xl">Kuba Milcarz</h1>
                </div>
            </Link>

            <ul className="flex space-x-1 text-sm">
                <li><Link href="/apps" className="p-2 rounded-md hover:bg-slate-100">Apps</Link></li>
                <li><Link href="#youtube" className="p-2 rounded-md hover:bg-slate-100">YouTube</Link></li>
                <li><Link href="#newsletter" className="p-2 rounded-md hover:bg-slate-100">Newsletter</Link></li>
            </ul>

        </nav>
    );
}