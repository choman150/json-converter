// pages/index.tsx
import Head from "next/head";
import Converter from "../components/Converter";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>CSV or Excel to JSON Converter | CSV or Excel ↔ JSON 변환기</title>
                <meta
                    name="description"
                    content="Convert CSV or Excel files to JSON and vice versa. Upload your file or paste your JSON and download it as CSV or Excel. 간편하게 데이터를 변환하고 다운로드하세요."
                />
                <meta name="keywords" content="CSV to JSON, Excel to JSON, JSON to CSV, JSON to Excel, convert CSV, convert Excel, CSV 변환기, JSON 변환기, 엑셀 JSON 변환, data transformation tool" />
                <meta property="og:title" content="CSV to JSON Converter" />
                <meta property="og:description" content="Easily convert CSV, Excel, and JSON data. Fast and user-friendly. 간편하고 직관적인 CSV/Excel ↔ JSON 변환기입니다." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="ko_KR" />
                <meta name="author" content="choman150" />
                <meta name="google-adsense-account" content="ca-pub-7141076584440289" />
                <link rel="canonical" href="https://choman150.click" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="p-6 max-w-5xl mx-auto" role="main">
                <nav className="mb-8 bg-gray-100 rounded px-4 py-3 shadow flex gap-6 text-sm font-medium text-blue-700 justify-center">
                    <Link href="/" className="hover:underline hover:text-blue-900">
                        🏠 Home
                    </Link>
                    <Link href="/about" className="hover:underline hover:text-blue-900">
                        📘 About
                    </Link>
                    <Link href="/how-to" className="hover:underline hover:text-blue-900">
                        🛠️ How To
                    </Link>
                    <Link href="/faq" className="hover:underline hover:text-blue-900">
                        ❓ FAQ
                    </Link>
                </nav>

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

                {/* Footer 영역 */}
                <footer className="mt-12 border-t pt-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2025 choman150.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="/privacy-policy" className="hover:underline">
                            Privacy Policy
                        </a>
                        <a href="/contact" className="hover:underline">
                            Contact
                        </a>
                    </div>
                </footer>
            </main>
            <Analytics />
        </>
    );
}
