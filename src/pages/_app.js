// pages/_app.js
import Script from "next/script";
import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>CSV or Excel to JSON Converter – Free Online Tool</title>
                <meta name="description" content="Convert CSV or Excel files to JSON and vice versa. Upload your file or paste your JSON and download it as CSV or Excel." />
                <meta
                    name="keywords"
                    content="CSV to JSON, Excel to JSON, JSON to CSV, JSON to Excel, convert CSV, convert Excel, CSV 변환기, JSON 변환기, 엑셀 JSON 변환, data transformation tool, data converter online, spreadsheet to JSON, tabular data conversion, Excel sheet to JSON, CSV export tool, csv to json converter tool, csv to json online, convert csv to json,csv to json converter with headers,convert csv with semicolon to json,csv to json with multiple sheets,csv to json without quotes,csv to nested json converter"
                />
                <meta property="og:title" content="CSV to JSON Converter" />
                <meta property="og:description" content="Easily convert CSV, Excel, and JSON data. Fast and user-friendly." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="ko_KR" />
                <meta name="author" content="choman150" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script src="https://cmp.gatekeeperconsent.com/min.js" data-cfasync="false" strategy="beforeInteractive" />
            <Script src="https://the.gatekeeperconsent.com/cmp.min.js" data-cfasync="false" strategy="beforeInteractive" />
            <Script src="//www.ezojs.com/ezoic/sa.min.js" strategy="beforeInteractive" />
            <Script id="ez-init" strategy="beforeInteractive">
                {`
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}
            </Script>
            <main className="p-6 max-w-5xl mx-auto" role="main">
                <Menu />

                <Component {...pageProps} />
                <Footer />
            </main>
            <Analytics />
            <SpeedInsights />
        </>
    );
}
