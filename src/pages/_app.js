// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>CSV or Excel to JSON Converter</title>
                <meta name="description" content="Convert CSV or Excel files to JSON and vice versa. Upload your file or paste your JSON and download it as CSV or Excel." />
                <meta name="keywords" content="CSV to JSON, Excel to JSON, JSON to CSV, JSON to Excel, convert CSV, convert Excel, data transformation tool" />
                <meta property="og:title" content="CSV to JSON Converter" />
                <meta property="og:description" content="Easily convert CSV, Excel, and JSON data. Fast and user-friendly." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="ko_KR" />
                <meta name="author" content="choman150" />
                <meta name="google-adsense-account" content="ca-pub-7141076584440289" />
                <link rel="canonical" href="https://choman150.click" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="p-6 max-w-5xl mx-auto" role="main">
                <Menu />

                <Component {...pageProps} />
                <Footer />
            </main>
            <Analytics />
        </>
    );
}
