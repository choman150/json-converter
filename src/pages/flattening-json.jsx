export default function FlatteningJson() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Understanding JSON Flattening</h1>

            <p className="mb-4">
                JSON flattening is the process of converting nested JSON structures into a flat format suitable for tabular representation like CSV or Excel. This is especially important when dealing
                with spreadsheet tools or relational databases that require one-dimensional key-value pairs.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">🔍 Why Flatten JSON?</h2>
            <p className="mb-4">
                Most spreadsheet applications and CSV formats can't represent nested objects directly. Flattening simplifies these structures, making them easier to analyze and export.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">💡 Example</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                    <h3 className="font-semibold mb-1">Original JSON</h3>
                    <pre className="bg-gray-100 border rounded p-3 overflow-auto text-sm">
                        {`{
  "user": {
    "name": "Alice",
    "contact": {
      "email": "alice@example.com",
      "phone": "123-456-7890"
    }
  }
}`}
                    </pre>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Flattened Output</h3>
                    <pre className="bg-gray-100 border rounded p-3 overflow-auto text-sm">
                        {`user.name,user.contact.email,user.contact.phone
Alice,alice@example.com,123-456-7890`}
                    </pre>
                </div>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-2">⚙️ How It's Done</h2>
            <p className="mb-4">
                Our converter uses dot notation (e.g., <code>user.name</code>) to flatten nested keys. Arrays are joined as comma-separated values.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">🔗 Related Features</h2>
            <ul className="list-disc list-inside text-gray-700">
                <li>Client-side flattening for privacy and speed</li>
                <li>Support for deeply nested objects</li>
                <li>Automatic flattening for both CSV and Excel output</li>
            </ul>
        </>
    );
}
