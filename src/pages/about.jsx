import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About | JSON Converter Tool</title>
                <meta name="robots" content="noindex" />
            </Head>
            <main className="max-w-3xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">About This Tool</h1>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    This tool was created to help developers, analysts, and general users convert data easily between formats like CSV, Excel, and JSON. Whether you're exporting from a spreadsheet or
                    working with API data, our goal is to save your time and effort through an intuitive web interface.
                </p>

                <p className="text-sm text-gray-700 mb-4">All transformations are handled locally in your browser — no server uploads, no storage, no privacy concerns.</p>

                <p className="text-sm text-gray-700">
                    If you have feedback or feature suggestions, feel free to{" "}
                    <a href="/contact" className="text-blue-600 hover:underline">
                        contact us
                    </a>
                    .
                </p>
            </main>
        </>
    );
}
