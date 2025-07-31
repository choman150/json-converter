import Head from "next/head";
import Link from "next/link";

export default function HowTo() {
    return (
        <>
            <Head>
                <title>How to Use the Converter | JSON Converter</title>
                <meta name="description" content="Step-by-step guide on using our CSV/Excel to JSON converter tool." />
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
                <h1 className="text-3xl font-bold mb-4">How to Use the Converter</h1>

                <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li>
                        <strong>Upload your file:</strong> Click the "Upload CSV or Excel" button and choose a file from your computer. Supported formats include <code>.csv</code> and{" "}
                        <code>.xlsx</code>.
                    </li>
                    <li>
                        <strong>View the result:</strong> The uploaded file will automatically be parsed and shown in JSON format. If the file has multiple sheets, you can select the one you want.
                    </li>
                    <li>
                        <strong>Convert JSON:</strong> You can also paste your own JSON into the input area. After parsing, you can download the data as CSV or Excel.
                    </li>
                    <li>
                        <strong>Download:</strong> Use the buttons to download your converted data instantly. No signup, no data tracking — fully client-side conversion.
                    </li>
                </ol>

                <p className="mt-6 text-gray-700">This tool is built for developers, analysts, and anyone working with structured data. It's 100% free and safe to use.</p>
            </main>
        </>
    );
}
