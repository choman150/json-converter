import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div id="ezoic-pub-ad-placeholder-119"></div>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
          ezstandalone.cmd.push(function() {
            ezstandalone.showAds(119);
          });
        `,
                }}
            />
            <footer className="mt-12 border-t pt-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2025 choman150.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <Link href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                </div>
            </footer>
        </>
    );
}
