// pages/index.tsx
import Head from "next/head";
import Converter from "../components/Converter";

export default function Home() {
    return (
        <>
            <Head>
                <title>CSV or Excel to JSON Converter | CSV or Excel ↔ JSON 변환기</title>
                <meta name="description" content="Convert CSV or Excel files to JSON and vice versa. Upload your file or paste your JSON and download it as CSV or Excel." />
                <meta name="keywords" content="CSV to JSON, Excel to JSON, JSON to CSV, JSON to Excel, convert CSV, convert Excel, CSV 변환기, JSON 변환기, 엑셀 JSON 변환" />
                <meta property="og:title" content="CSV to JSON Converter" />
                <meta property="og:description" content="Easily convert CSV, Excel, and JSON data. Fast and user-friendly." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="ko_KR" />
                <meta name="keywords" content="CSV JSON 변환기, 엑셀 JSON 변환, CSV to JSON, Excel to JSON, JSON to CSV, JSON to Excel, csv json converter" />
                <meta name="author" content="choman150" />
            </Head>
            <Converter />
        </>
    );
}
