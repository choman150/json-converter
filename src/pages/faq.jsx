
export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">❓ Frequently Asked Questions</h1>

      <div className="mb-6">
        <h2 className="font-semibold">1. Is my data uploaded to a server?</h2>
        <p className="text-sm text-gray-700">
          No. All data conversions happen directly in your browser using JavaScript. Your files and content are never uploaded or stored externally.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold">2. What formats are supported?</h2>
        <p className="text-sm text-gray-700">
          You can convert CSV, Excel (.xlsx), and JSON formats in both directions. Multiple sheets are supported for Excel files.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold">3. Is this tool free to use?</h2>
        <p className="text-sm text-gray-700">
          Yes. This tool is completely free and does not require any signup or subscription.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold">4. Can I use this on mobile devices?</h2>
        <p className="text-sm text-gray-700">
          Yes. The tool is fully responsive and works well on mobile browsers.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold">5. Does it support nested JSON structures?</h2>
        <p className="text-sm text-gray-700">
          Yes. Nested JSON can be flattened for CSV export using the built-in flattening option.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold">6. How do I report a bug or request a feature?</h2>
        <p className="text-sm text-gray-700">
          Please email us at choman150@gmail.com or open an issue on our GitHub repository.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold">7. Is there a file size limit?</h2>
        <p className="text-sm text-gray-700">
          While there is no enforced limit, very large files may slow down processing due to browser memory limits.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold">8. Can I convert multiple sheets from Excel?</h2>
        <p className="text-sm text-gray-700">
          Yes. If your Excel file has multiple sheets, you'll be prompted to choose which one to convert.
        </p>
      </div>
    </div>
  );
}
