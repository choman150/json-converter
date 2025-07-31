export default function PrivacyPolicy() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4 text-sm text-gray-700">
                Your privacy is important to us. This tool does not store, track, or share any data you upload or convert. All conversions are performed locally in your browser using JavaScript, and
                no data is transmitted to any server.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">Cookies</h2>
            <p className="mb-4 text-sm text-gray-700">
                This site may use cookies to enhance your experience or for basic analytics. However, no personally identifiable information is collected or stored.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">Third-party Services</h2>
            <p className="mb-4 text-sm text-gray-700">
                We may utilize third-party services such as Google AdSense to display advertisements. These services may use cookies or similar technologies to serve ads based on your browsing
                behavior.
            </p>

            <p className="mt-8 text-sm text-gray-500">This policy was last updated on {new Date("2025-07-31").toLocaleDateString()}</p>
        </>
    );
}
