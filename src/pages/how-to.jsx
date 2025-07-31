import Head from "next/head";
import Link from "next/link";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function HowTo() {
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">🛠️ How To Use</h1>
            <section className="text-gray-700 mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Convert CSV or Excel to JSON</h2>
                <ul className="list-disc list-inside">
                    <li>Click the upload button to select a .csv or .xlsx file from your computer.</li>
                    <li>The file will be parsed and shown as JSON on the screen instantly.</li>
                    <li>Use the "Copy JSON" button to copy it to your clipboard for further use.</li>
                </ul>
            </section>
            <section className="text-gray-700 mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Convert JSON to CSV or Excel</h2>
                <ul className="list-disc list-inside">
                    <li>Paste your JSON data into the provided textarea.</li>
                    <li>Click "Parse JSON" to validate and visualize it.</li>
                    <li>Once valid, export the data as a .csv or .xlsx file using the download buttons.</li>
                </ul>
            </section>
            <section className="text-gray-700">
                <h2 className="text-xl font-semibold mb-2">Tips</h2>
                <ul className="list-disc list-inside">
                    <li>
                        Use flattened JSON (e.g., <code>{`{"user.name": "Alice"}`}</code>) for more predictable spreadsheet outputs.
                    </li>
                    <li>If your Excel file contains multiple sheets, you can choose which one to convert.</li>
                    <li>Always check the format using a validator if the input JSON is complex or nested.</li>
                </ul>
            </section>
        </>
    );
}
