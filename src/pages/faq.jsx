// pages/faq.jsx
import Head from "next/head";
import Link from "next/link";

export default function FAQ() {
    return (
        <>
            <Head>
                <title>Frequently Asked Questions | JSON Converter</title>
                <meta name="description" content="Find answers to common questions about CSV to JSON conversion, file formats, and supported features." />
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
                <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

                <div className="space-y-6 text-gray-700">
                    <div>
                        <h2 className="font-semibold text-lg">📂 What file types are supported?</h2>
                        <p>
                            We support CSV (<code>.csv</code>) and Excel (<code>.xlsx</code>) file formats for upload.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-lg">📏 Is there a file size limit?</h2>
                        <p>We recommend uploading files under 2MB for best performance. Very large files may take longer to parse or crash on low-memory devices.</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-lg">🔐 Is my data safe?</h2>
                        <p>Yes. All processing is done client-side in your browser. We never store or send your data anywhere.</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-lg">💡 Can I convert JSON with nested objects?</h2>
                        <p>Yes! Our tool flattens nested structures into dot notation for CSV/Excel output.</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-lg">❓ I see an error. What should I do?</h2>
                        <p>Make sure your input is valid JSON or a properly formatted spreadsheet. If the problem persists, please contact us via the Contact page.</p>
                    </div>
                </div>
            </main>
        </>
    );
}
