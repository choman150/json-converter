// pages/about-csv-json.jsx
import Head from "next/head";
import Link from "next/link";

export default function AboutCsvJson() {
    return (
        <>
            <Head>
                <title>About CSV and JSON | JSON Converter</title>
                <meta name="description" content="Learn the differences between CSV and JSON, and why converting between them is useful in modern web development." />
            </Head>
            <main className="max-w-4xl mx-auto px-6 py-10">
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
                </nav>
                <h1 className="text-3xl font-bold mb-4">About CSV and JSON</h1>
                <p className="text-gray-700 mb-4">
                    CSV (Comma-Separated Values) and JSON (JavaScript Object Notation) are two of the most common data formats used in the modern web. CSV is best for flat, table-like data such as
                    spreadsheets and is easily opened in Excel or Google Sheets. JSON is structured, hierarchical, and more suitable for APIs and programming interfaces.
                </p>
                <p className="text-gray-700 mb-4">
                    Converting between CSV and JSON allows you to bridge the gap between human-readable spreadsheet data and machine-readable application data. Developers often receive CSVs from
                    non-technical stakeholders and need to convert them into JSON for backend services or frontend applications.
                </p>
                <p className="text-gray-700">Our converter simplifies this process and ensures your data stays clean, structured, and ready for use across platforms.</p>
            </main>
        </>
    );
}
