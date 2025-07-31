export default function FAQ() {
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">❓ Frequently Asked Questions</h1>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">What file types are supported?</h2>
                <p className="text-gray-700">We support CSV (.csv) and Excel (.xlsx) formats for upload, and allow exporting to CSV and Excel from JSON data.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">Is there a file size limit?</h2>
                <p className="text-gray-700">There is no strict file size limit, but very large files may affect performance in the browser depending on your device capabilities.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">Can I convert nested JSON to CSV?</h2>
                <p className="text-gray-700">
                    Yes! Nested JSON will be flattened using dot notation (e.g., <code>user.name</code>) so each field maps cleanly to CSV columns.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">Does it work offline?</h2>
                <p className="text-gray-700">No, the tool runs in the browser but requires an internet connection to load the UI and conversion libraries.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">Is my data secure?</h2>
                <p className="text-gray-700">Yes. All conversions happen on your browser. No data is uploaded to a server or stored anywhere.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">Can I use it on mobile?</h2>
                <p className="text-gray-700">Yes! The site is responsive and optimized for mobile and tablet usage.</p>
            </section>
        </>
    );
}
