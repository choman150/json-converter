// pages/index.tsx
import Head from "next/head";
import Converter from "../components/Converter";

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
                <link rel="canonical" href="https://choman150.click" />
                <link rel="icon" href="/favicon.ico" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7141076584440289" crossorigin="anonymous"></script>
            </Head>
            <main className="p-6 max-w-5xl mx-auto" role="main">
                {/* <div id="ad-slot-top" className="mb-6 w-full flex justify-center">
                    <div style={{ width: "100%", height: "90px", backgroundColor: "#f4f4f4" }}></div>
                </div> */}

                <Converter />

                {/* Footer 영역 */}
                <footer className="mt-12 border-t pt-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2025 choman150.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="/about" className="hover:underline">
                            About
                        </a>

                        <a href="/privacy-policy" className="hover:underline">
                            Privacy Policy
                        </a>
                        <a href="/contact" className="hover:underline">
                            Contact
                        </a>
                    </div>
                </footer>
            </main>
        </>
    );
}
