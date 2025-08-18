// pages/_document.jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="monetag" content="ca8f15006cbbacfd5946ee303eb736ce" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('vemtoutcheeg.com',9732874,document.createElement('script'))`,
                    }}
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gizokraijaw.net',9733051,document.createElement('script'))`,
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
