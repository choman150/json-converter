import Head from "next/head";
import Link from "next/link";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function HowTo() {
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">🛠️ How to Use</h1>

            <section className="text-gray-700 mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Convert CSV or Excel to JSON</h2>
                <ul className="list-disc list-inside">
                    <li>
                        Click the upload button to select a <code>.csv</code> or <code>.xlsx</code> file from your computer.
                    </li>
                    <li>The file will be instantly parsed and displayed as formatted JSON.</li>
                    <li>Click the "Copy JSON" button to copy the result to your clipboard for further use.</li>
                </ul>
            </section>

            <section className="text-gray-700 mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Convert JSON to CSV or Excel</h2>
                <ul className="list-disc list-inside">
                    <li>Paste your JSON data into the provided text area.</li>
                    <li>Click "Parse JSON" to validate and preview the content.</li>
                    <li>
                        Once validated, export the data as a <code>.csv</code> or <code>.xlsx</code> file using the download buttons.
                    </li>
                </ul>
            </section>

            <section className="text-gray-700">
                <h2 className="text-xl font-semibold mb-2">Tips</h2>
                <ul className="list-disc list-inside">
                    <li>
                        For cleaner and more predictable output, use flattened JSON (e.g., <code>{`{"user.name": "Alice"}`}</code>).
                    </li>
                    <li>If your Excel file contains multiple sheets, you can select which sheet to convert.</li>
                    <li>For complex or deeply nested JSON, consider using a validator to ensure correct formatting before converting.</li>
                </ul>
            </section>
        </>
    );
}
