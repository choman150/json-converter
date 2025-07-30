import Head from "next/head";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | JSON Converter</title>
                <meta name="robots" content="noindex" />
            </Head>
            <main className="max-w-3xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-4 text-sm text-gray-700">
                    We value your privacy. This tool does not store, track, or share any data you upload or convert. All conversions are handled locally in your browser using JavaScript, and no data
                    is transmitted to any server.
                </p>

                <h2 className="text-lg font-semibold mt-6 mb-2">Cookies</h2>
                <p className="mb-4 text-sm text-gray-700">
                    This site may use cookies to improve user experience or for analytics purposes. No personally identifiable information is collected or stored.
                </p>

                <h2 className="text-lg font-semibold mt-6 mb-2">Third-party Services</h2>
                <p className="mb-4 text-sm text-gray-700">
                    We may use third-party services such as Google AdSense for displaying ads. These services may use cookies or similar technologies to show relevant ads based on your interests.
                </p>

                <p className="mt-8 text-sm text-gray-500">This policy was last updated on {new Date().toLocaleDateString()}.</p>
            </main>
        </>
    );
}
