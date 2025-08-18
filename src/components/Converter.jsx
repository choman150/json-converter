"use client";

import { useState, useRef } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const messages = {
    en: {
        title: "CSV or Excel ↔ JSON Converter",
        description: "Upload CSV or Excel to convert to JSON, or input JSON to convert to CSV/Excel.",
        inputTitle: "📤 Upload CSV / Excel → JSON",
        outputTitle: "📥 Input JSON → CSV / Excel",
        placeholder: "Paste your JSON data here...",
        parseBtn: "Parse JSON",
        toCsvBtn: "Download CSV",
        toExcelBtn: "Download Excel",
        copyBtn: "Copy JSON",
        uploadBtn: "Upload CSV or Excel File",
        error: "Invalid data format. Please check your input.",
        sheetSelectLabel: "Select sheet to convert:",
    },
    ko: {
        title: "CSV 또는 Excel ↔ JSON 변환기",
        description: "CSV 또는 Excel을 업로드해 JSON으로 변환하거나, JSON을 입력해 CSV/Excel로 변환하세요.",
        inputTitle: "📤 CSV / Excel 업로드 → JSON 보기",
        outputTitle: "📥 JSON 입력 → CSV / Excel 변환",
        placeholder: "여기에 JSON 데이터를 입력하세요...",
        parseBtn: "JSON 파싱",
        toCsvBtn: "CSV 다운로드",
        toExcelBtn: "Excel 다운로드",
        copyBtn: "JSON 복사",
        uploadBtn: "CSV 또는 Excel 업로드",
        error: "유효하지 않은 데이터 형식입니다. 입력을 확인해주세요.",
        sheetSelectLabel: "변환할 시트를 선택하세요:",
    },
};

function flattenObject(obj, parent = "", res = {}) {
    for (let key in obj) {
        const propName = parent ? `${parent}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObject(obj[key], propName, res);
        } else if (Array.isArray(obj[key])) {
            res[propName] = obj[key].join(", ");
        } else {
            res[propName] = obj[key];
        }
    }
    return res;
}

export default function Converter() {
    const [lang, setLang] = useState("en");
    const [inputText, setInputText] = useState("");
    const [jsonData, setJsonData] = useState(null);
    const [uploadJson, setUploadJson] = useState(null);
    const [sheetNames, setSheetNames] = useState([]);
    const [workbook, setWorkbook] = useState(null);
    const [error, setError] = useState("");
    const fileInputRef = useRef();

    const t = messages[lang];

    const handleJsonInput = () => {
        try {
            const parsed = JSON.parse(inputText);
            const normalized = Array.isArray(parsed) ? parsed : [parsed];
            setJsonData(normalized);
            setError("");
        } catch {
            setError(t.error);
            setJsonData(null);
        }
    };

    const handleDownloadCSV = () => {
        if (!jsonData) return;
        const array = Array.isArray(jsonData) ? jsonData : [jsonData];
        const flattened = array.map((row) => flattenObject(row));
        const csv = Papa.unparse(flattened);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "converted.csv");
    };

    const handleDownloadExcel = () => {
        if (!jsonData) return;
        const array = Array.isArray(jsonData) ? jsonData : [jsonData];
        const flattened = array.map((row) => flattenObject(row));
        const worksheet = XLSX.utils.json_to_sheet(flattened);
        const book = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(book, worksheet, "Sheet1");
        const buffer = XLSX.write(book, { bookType: "xlsx", type: "array" });
        const blob = new Blob([buffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        saveAs(blob, "converted.xlsx");
    };

    const handleCopyToClipboard = () => {
        if (!uploadJson) return;
        navigator.clipboard.writeText(JSON.stringify(uploadJson, null, 2));
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        const fileName = file.name.toLowerCase();

        reader.onload = (event) => {
            const content = event.target.result;

            try {
                let parsed;
                if (fileName.endsWith(".csv")) {
                    const result = Papa.parse(content, { header: true });
                    parsed = result.data;
                    setUploadJson(parsed);
                } else if (fileName.endsWith(".xlsx")) {
                    const wb = XLSX.read(content, { type: "binary" });
                    setWorkbook(wb);
                    setSheetNames(wb.SheetNames);
                    const firstSheet = wb.Sheets[wb.SheetNames[0]];
                    parsed = XLSX.utils.sheet_to_json(firstSheet);
                    setUploadJson(parsed);
                } else {
                    throw new Error("Unsupported file type");
                }

                setError("");
            } catch (err) {
                setError(t.error);
                setUploadJson(null);
                setWorkbook(null);
                setSheetNames([]);
            }
        };

        if (fileName.endsWith(".xlsx")) {
            reader.readAsBinaryString(file);
        } else {
            reader.readAsText(file);
        }
    };

    const handleSheetSelect = (e) => {
        const sheetName = e.target.value;
        if (workbook && sheetName) {
            const ws = workbook.Sheets[sheetName];
            const parsed = XLSX.utils.sheet_to_json(ws);
            setUploadJson(parsed);
        }
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{t.title}</h1>
                {/* <select className="border rounded px-2 py-1 text-sm" value={lang} onChange={(e) => setLang(e.target.value)}>
                    <option value="ko">🇰🇷 한국어</option>
                    <option value="en">🇺🇸 English</option>
                </select> */}
            </div>

            {/* 사용 목적 설명 */}
            <section className="mt-6 bg-white p-6 rounded shadow-md" aria-label="Tool Description">
                <h2 className="text-xl font-bold mb-2 text-gray-800">What is this tool?</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    This online tool allows you to easily convert between CSV, Excel, and JSON formats. It's designed for developers, data analysts, and anyone who needs to transform data formats
                    quickly without installing any software. Whether you’re uploading a spreadsheet or pasting raw JSON, our converter will handle it instantly.
                </p>
            </section>
            <section className="mb-10 mt-6" aria-label="Upload CSV or Excel">
                <h2 className="text-lg font-semibold mb-2">{t.inputTitle}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                    <button onClick={() => fileInputRef.current.click()} className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800">
                        {t.uploadBtn}
                    </button>
                    <input ref={fileInputRef} type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" className="hidden" onChange={handleFileUpload} />
                    {uploadJson && (
                        <button onClick={handleCopyToClipboard} className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600">
                            {t.copyBtn}
                        </button>
                    )}
                </div>

                {sheetNames.length > 1 && (
                    <div className="mb-4">
                        <label className="mr-2 font-medium">{t.sheetSelectLabel}</label>
                        <select onChange={handleSheetSelect} className="border rounded px-2 py-1 text-sm" defaultValue={sheetNames[0]}>
                            {sheetNames.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {uploadJson && (
                    <div className="overflow-auto border p-4 rounded bg-gray-50 shadow-inner max-h-[400px]">
                        <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(uploadJson, null, 2)}</pre>
                    </div>
                )}
            </section>

            <section aria-label="Convert JSON to CSV or Excel">
                <h2 className="text-lg font-semibold mb-2">{t.outputTitle}</h2>
                <textarea
                    className="w-full h-56 p-4 border rounded font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder={t.placeholder}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <div className="flex flex-wrap gap-2 mt-4">
                    <button onClick={handleJsonInput} className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
                        {t.parseBtn}
                    </button>
                    {jsonData && (
                        <>
                            <button onClick={handleDownloadCSV} className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
                                {t.toCsvBtn}
                            </button>
                            <button onClick={handleDownloadExcel} className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700">
                                {t.toExcelBtn}
                            </button>
                        </>
                    )}
                </div>
            </section>

            {error && <p className="text-red-500 font-medium mt-6">{error}</p>}
        </div>
    );
}
