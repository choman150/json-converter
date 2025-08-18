// pages/_document.jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="monetag" content="ca8f15006cbbacfd5946ee303eb736ce" />
                <script data-cfasync="false" type="text/javascript" src="inpagepush-loader.js" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(d,z,s,c){s.src='//'+d+'/400/'+z;s.onerror=s.onload=E;function E(){c&&c();c=null}try{(document.body||document.documentElement).appendChild(s)}catch(e){E()}})('niwooghu.com',9732874,document.createElement('script'),_rocxgvr)`,
                    }}
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
