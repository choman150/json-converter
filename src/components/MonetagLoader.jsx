"use client";
import { useEffect } from "react";

export default function MonetagLoader() {
    useEffect(() => {
        const id = "monetag-tag-164319";
        if (document.getElementById(id)) return;

        const s = document.createElement("script");
        s.id = id;
        s.src = "https://fpyf8.com/88/tag.min.js";
        s.async = true;
        s.setAttribute("data-zone", "164319");
        s.setAttribute("data-cfasync", "false");
        document.body.appendChild(s);

        return () => {
            // 일반적으로 광고 태그는 언마운트하지 않지만, 라우팅 이슈시 제거
            // document.getElementById(id)?.remove()
        };
    }, []);
    return null;
}
