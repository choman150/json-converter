/** @type {import('next').NextConfig} */
const nextConfig = {
    //    output: "export", // Netlify는 정적 HTML만 필요
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

    // async redirects() {
    //     return [
    //         {
    //             source: "/ads.txt",
    //             destination: "https://srv.adstxtmanager.com/19390/choman150.click",
    //             permanent: true,
    //         },
    //     ];
    // },
};

export default nextConfig;
