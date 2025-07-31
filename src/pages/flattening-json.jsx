import Link from "next/link";

export default function FlatteningJson() {
    return (
        <>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">🧩 Flattening Nested JSON for CSV or Excel Export</h1>

            <section className="prose max-w-none text-gray-800">
                <p>
                    JSON is often used to represent structured, nested data in APIs, configurations, and logs. However, formats like CSV and Excel require flat, tabular structures with simple
                    key-value mappings. This is where <strong>flattening</strong> comes in — the process of converting deeply nested objects into dot-notation paths (e.g., <code>user.name</code>,{" "}
                    <code>user.email</code>).
                </p>

                <h2>Why Flatten JSON?</h2>
                <ul>
                    <li>📊 Enables seamless CSV/Excel export</li>
                    <li>🧪 Helps in preprocessing for machine learning models</li>
                    <li>🛠️ Facilitates importing into relational databases</li>
                    <li>📁 Makes data readable and mappable for spreadsheets</li>
                </ul>

                <h2>Example: Before and After Flattening</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h3 className="font-semibold mb-1">Original JSON</h3>
                        <pre className="bg-gray-100 p-4 rounded overflow-auto">
                            {`{
    "user":{
        "name": "Alice",
        "email": "alice@example.com",
        "profile": {
            "age": 30,
            "location": "Seoul"
        }
    }
}`}
                        </pre>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Flattened JSON</h3>
                        <pre className="bg-gray-100 p-4 rounded overflow-auto">
                            {`{
    "user.name": "Alice",
    "user.email": "alice@example.com",
    "user.profile.age": 30,
    "user.profile.location": "Seoul"
}`}
                        </pre>
                    </div>
                </div>

                <h2>How It Works in This Tool</h2>
                <p>When you convert JSON to CSV or Excel using this tool, nested fields are automatically flattened. This ensures that each row and column remains consistent and parseable.</p>

                <h2>Try It Yourself</h2>
                <p>
                    👉 Use our <Link href="/">converter</Link> and test with nested JSON to see flattening in action.
                </p>
            </section>
        </>
    );
}
