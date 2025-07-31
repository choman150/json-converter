export default function Contact() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Contact</h1>
            <p className="text-sm text-gray-700 mb-6">If you have questions, suggestions, or feedback about this tool, feel free to contact us using the email address below.</p>

            <div className="bg-gray-100 p-4 rounded border text-sm">
                📧 <strong>Email:</strong>{" "}
                <a href="mailto:choman150@gmail.com" className="text-blue-600 hover:underline">
                    choman150@gmail.com
                </a>
            </div>
        </>
    );
}
