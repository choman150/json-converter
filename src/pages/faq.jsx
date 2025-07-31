export default function FAQ() {
    return (
        <>
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

                <div>
                    <h2 className="font-semibold text-lg">📤 Can I convert large datasets?</h2>
                    <p>You can, but performance depends on your device’s browser memory. Try breaking up large files into smaller chunks if needed.</p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg">🧾 What is flattening in JSON to CSV?</h2>
                    <p>
                        Flattening converts nested JSON keys like <code>{`{"user": {"name": "Alice"}}`}</code> into dot notation <code>user.name</code> for compatibility with CSV columns.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg">🌐 Can I use this tool offline?</h2>
                    <p>No, but since it's a client-side tool, network usage is minimal. Offline support may be added in the future.</p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg">🔄 Can I revert flattened CSV back to nested JSON?</h2>
                    <p>Currently, the tool only flattens JSON for CSV/Excel conversion. Reverse nesting is not supported at the moment.</p>
                </div>
            </div>
        </>
    );
}
