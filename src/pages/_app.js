// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import MonetagLoader from "../components/MonetagLoader.jsx";
import dynamic from "next/dynamic";
const AdsterraBanner = dynamic(() => import("../components/AdsterraBanner"), { ssr: false });

export default function App({ Component, pageProps }) {
    return (
        <>
            <main className="p-6 max-w-5xl mx-auto" role="main">
                <Menu />
                <Component {...pageProps} />
                <Footer />
            </main>
            <Analytics />
            <SpeedInsights />
            <div className="ads-left">
                <AdsterraBanner adKey="65cbecdb17ff0f1b6ad3ddb81f4d5454" width={160} height={600} />
            </div>
            <div className="ads-right">
                <AdsterraBanner adKey="71233bf94aad29f0f3dd0870a503d001" width={160} height={300} />
            </div>
        </>
    );
}
