export default function FAQ() {
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">❓ Frequently Asked Questions</h1>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">What file types are supported?</h2>
                <p className="text-gray-700">
                    We support CSV (<code>.csv</code>) and Excel (<code>.xlsx</code>) file uploads. You can also convert JSON data into CSV or Excel formats.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">Is there a file size limit?</h2>
                <p className="text-gray-700">There is no strict file size limit, but very large files may affect browser performance depending on your device’s capabilities.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">Can I convert nested JSON to CSV?</h2>
                <p className="text-gray-700">
                    Yes. Nested JSON structures are automatically flattened using dot notation (e.g., <code>user.name</code>), allowing each field to map cleanly to a CSV column.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">Does it work offline?</h2>
                <p className="text-gray-700">Not completely. The tool runs in your browser, but it still requires an internet connection to load the UI and essential libraries.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">Is my data secure?</h2>
                <p className="text-gray-700">Yes — all conversions happen directly in your browser. No data is uploaded to a server or stored externally.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-1">Can I use it on mobile?</h2>
                <p className="text-gray-700">Yes. The site is fully responsive and optimized for mobile and tablet use.</p>
            </section>
        </>
    );
}
