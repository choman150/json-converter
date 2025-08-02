
export default function HowTo() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">🛠️ How to Use This Converter</h1>

      <ol className="list-decimal pl-5 space-y-4 text-sm text-gray-700">
        <li>
          <strong>Select a File:</strong> Upload your CSV or Excel file using the "Upload" button. You can also paste JSON text into the editor.
        </li>
        <li>
          <strong>Preview or Edit:</strong> Review the uploaded data. If you're converting JSON, you can edit the text directly before converting.
        </li>
        <li>
          <strong>Choose an Output Format:</strong> Click "Download CSV" or "Download Excel" for JSON → Table format. Use "Parse JSON" for CSV → JSON.
        </li>
        <li>
          <strong>Copy or Download:</strong> Copy the JSON result using the "Copy JSON" button or download it as a file.
        </li>
        <li>
          <strong>Multiple Sheets:</strong> If uploading Excel with multiple sheets, select the desired one from the dropdown.
        </li>
      </ol>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">📋 Example Workflow</h2>
        <p className="text-sm text-gray-700 mb-2">
          1. A marketing team exports customer survey results in Excel format.
        </p>
        <p className="text-sm text-gray-700 mb-2">
          2. They use this converter to turn the data into JSON to upload into an analytics platform.
        </p>
        <p className="text-sm text-gray-700">
          3. Later, they use the same tool to convert filtered JSON results back into a CSV report.
        </p>
      </div>
    </div>
  );
}
