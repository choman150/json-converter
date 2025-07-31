// pages/index.tsx
import Head from "next/head";
import Converter from "../components/Converter";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Converter />

            <section className="mt-12 bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">📚 Example Use Case</h2>
                <p className="text-sm text-gray-700 mb-2">
                    Imagine you receive a CSV file from a colleague containing product information. To import it into your web application, you need to convert it into JSON. Or perhaps you want to
                    download filtered data from your frontend in Excel format for reporting.
                </p>
                <p className="text-sm text-gray-700">This tool streamlines that process and ensures your data is transformed correctly every time.</p>
            </section>

            {/* ✅ 변환 예제 섹션 */}
            <section className="mt-12 bg-white p-6 rounded shadow-md" aria-label="Conversion Example">
                <h2 className="text-xl font-bold mb-2 text-gray-800">✅ Example: Convert JSON to CSV</h2>
                <p className="text-sm text-gray-700 mb-4">Here's a simple JSON array and how it looks when converted to CSV.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <h3 className="font-semibold mb-1">Input JSON</h3>
                        <pre className="bg-gray-100 border rounded p-3 overflow-auto">
                            {`[
  {
    "name": "Alice",
    "age": 30,
    "email": "alice@example.com"
  },
  {
    "name": "Bob",
    "age": 25,
    "email": "bob@example.com"
  }
]`}
                        </pre>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Output CSV</h3>
                        <pre className="bg-gray-100 border rounded p-3 overflow-auto">
                            {`name,age,email
Alice,30,alice@example.com
Bob,25,bob@example.com`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* 📘 문단형 블로그 설명 섹션 */}
            <section className="mt-20 mb-16 bg-white p-6 rounded shadow-md prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">📘 Understanding CSV, JSON, and Excel</h2>
                <p>
                    CSV (Comma-Separated Values), Excel (.xlsx), and JSON (JavaScript Object Notation) are the most commonly used data formats in web development, data analysis, and reporting. This
                    tool helps you convert between them easily without installing anything. Whether you're handling e-commerce data, IoT device logs, API responses, or Excel reports, converting
                    formats is often the first step.
                </p>
                <p>
                    JSON is popular for API data responses and hierarchical structures, while CSV and Excel are better suited for flat tabular data and human-friendly spreadsheets. Our tool bridges
                    that gap with precision and reliability.
                </p>
                <p>
                    You can upload files in .csv or .xlsx format and immediately see their JSON structure. Conversely, paste raw JSON and export it into clean CSV or Excel files. This flexibility
                    saves time and reduces manual formatting errors.
                </p>
                <p>
                    It also supports advanced features like sheet selection from Excel workbooks, copying results, and flattening deeply nested JSON objects into dot notation (e.g.{" "}
                    <code>user.name</code>) — a crucial step for compatibility with spreadsheet columns and database imports.
                </p>
                <p>Common use cases include data migration, front-end reporting tools, automated ETL workflows, or even preparing structured data for machine learning preprocessing.</p>
                <p>
                    Curious how JSON flattening works? 👉{" "}
                    <Link href="/flattening-json" className="text-blue-600 underline">
                        Read more here
                    </Link>
                </p>
            </section>
        </>
    );
}
