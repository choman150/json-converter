import Link from "next/link";

export default function Menu() {
    return (
        <nav className="mb-8 bg-gray-100 rounded px-4 py-3 shadow flex gap-6 text-sm font-medium text-blue-700 justify-center">
            <Link href="/" className="hover:underline hover:text-blue-900">
                🏠 Home
            </Link>
            <Link href="/about" className="hover:underline hover:text-blue-900">
                📘 About
            </Link>
            <Link href="/how-to" className="hover:underline hover:text-blue-900">
                🛠️ How To
            </Link>
            <Link href="/faq" className="hover:underline hover:text-blue-900">
                ❓ FAQ
            </Link>
            <Link href="/flattening-json" className="hover:underline hover:text-blue-900">
                🧾 JSON Flattening
            </Link>
        </nav>
    );
}
