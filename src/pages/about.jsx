// pages/about-csv-json.jsx

export default function AboutCsvJson() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">About CSV and JSON</h1>
            <p className="text-gray-700 mb-4">
                CSV (Comma-Separated Values) and JSON (JavaScript Object Notation) are two of the most common data formats used in the modern web. CSV is best for flat, table-like data such as
                spreadsheets and is easily opened in Excel or Google Sheets. JSON is structured, hierarchical, and more suitable for APIs and programming interfaces.
            </p>
            <p className="text-gray-700 mb-4">
                Converting between CSV and JSON allows you to bridge the gap between human-readable spreadsheet data and machine-readable application data. Developers often receive CSVs from
                non-technical stakeholders and need to convert them into JSON for backend services or frontend applications.
            </p>
            <p className="text-gray-700">Our converter simplifies this process and ensures your data stays clean, structured, and ready for use across platforms.</p>
        </>
    );
}
