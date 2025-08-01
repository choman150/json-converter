/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/sitemap.xml",
                headers: [
                    {
                        key: "Content-Type",
                        value: "application/xml; charset=utf-8",
                    },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "*",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "*",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
