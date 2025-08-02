
export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">📘 About This Project</h1>

      <p className="text-sm text-gray-700 mb-4">
        This web-based CSV ↔ JSON converter was built to simplify common data transformation tasks for developers, analysts, and business professionals.
        It is designed to run entirely in your browser without requiring server uploads or installations.
      </p>

      <h2 className="font-semibold mb-2">🎯 Goals</h2>
      <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
        <li>Easy and fast conversion between CSV, Excel, and JSON</li>
        <li>Privacy-friendly: no server communication</li>
        <li>Multi-language and Excel sheet support</li>
        <li>Completely free and open to the public</li>
      </ul>

      <h2 className="font-semibold mb-2">🛠️ Tech Stack</h2>
      <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
        <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS</li>
        <li><strong>Libraries:</strong> PapaParse (CSV), SheetJS (Excel), FileSaver.js</li>
        <li><strong>Deployment:</strong> Vercel (Static Hosting)</li>
      </ul>

      <h2 className="font-semibold mb-2">👨‍💻 Developer</h2>
      <p className="text-sm text-gray-700">
        Created by choman150, a full-stack developer passionate about data tools, web utilities, and privacy-first solutions. This tool is part of a personal portfolio and a step toward providing simple,
        useful services for everyone.
      </p>
    </div>
  );
}
