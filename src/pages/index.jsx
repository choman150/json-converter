// pages/index.tsx
import Head from "next/head";
import Converter from "../components/Converter";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Converter />

            {/* 📌 실전 활용 예시 섹션 */}
      <section className="mt-5 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📚 Example Use Case</h2>
        <p className="text-sm text-gray-700 mb-2">
          Imagine receiving a CSV file from a colleague with product details. To import the data into your web application,
          you'll need to convert it to JSON. Or maybe you want to export filtered data from your frontend in Excel format
          for reporting purposes.
        </p>
        <p className="text-sm text-gray-700">
          This tool simplifies the process and ensures accurate, reliable conversions every time.
        </p>
      </section>

      {/* ✅ 변환 예제 */}
      <section className="mt-12 bg-white p-6 rounded shadow-md" aria-label="Conversion Example">
        <h2 className="text-xl font-bold mb-2 text-gray-800">✅ Example: Convert JSON to CSV</h2>
        <p className="text-sm text-gray-700 mb-4">Below is a basic JSON array and how it appears when converted into CSV format.</p>

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

      {/* 📘 블로그형 콘텐츠 확장 */}
      <section className="mt-20 mb-16 bg-white p-6 rounded shadow-md prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📘 Why Use CSV ↔ JSON Converters?</h2>
        <p>
          Developers, data analysts, and business teams often exchange data using CSV or Excel formats. However, modern
          applications and APIs typically work with JSON. Manually converting data between these formats can be
          time-consuming and error-prone. This tool bridges the gap and allows seamless transformation between these
          formats.
        </p>
        <h3 className="mt-5">💡 Common Scenarios:</h3>
        <ul>
          <li>✅ Backend developer needs to import a CSV of users into a NoSQL database using JSON format</li>
          <li>✅ Frontend developer wants to export state data to Excel for reporting</li>
          <li>✅ Marketing team wants to upload contacts to an email platform that only supports JSON</li>
        </ul>

        <h3 className="mt-5">🔐 Privacy First</h3>
        <p>
          Your data never leaves your device. All conversions happen entirely in your browser using JavaScript. This ensures
          maximum data security and privacy. There are no server uploads, and nothing is saved or shared.
        </p>

        <h3 className="mt-5">🔎 How It Works</h3>
        <p>
          This app uses open-source libraries like PapaParse for CSV parsing and SheetJS (xlsx) for Excel operations. It's
          designed to be lightweight, fast, and mobile-friendly.
        </p>

        <h3 className="mt-5">🚀 Designed for Everyone</h3>
        <p>
          Whether you're a student working on a data science project or a professional building APIs, this tool is for you.
          It requires no installation, signup, or ads interrupting your workflow.
        </p>
      </section>
        </>
    );
}
