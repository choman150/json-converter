import Head from "next/head";
import Link from "next/link";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function HowTo() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">How to Use the Converter</h1>

            <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                <li>
                    <strong>Upload your file:</strong> Click the "Upload CSV or Excel" button and choose a file from your computer. Supported formats include <code>.csv</code> and <code>.xlsx</code>.
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
        </>
    );
}
