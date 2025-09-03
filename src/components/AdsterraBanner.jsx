// components/AdsterraBanner.jsx
import { useEffect } from "react";

// 전역 큐: 여러 배너가 있을 때 순차 실행
if (typeof window !== "undefined" && !window.__adsterraQueue) {
    window.__adsterraQueue = Promise.resolve();
}

/**
 * props:
 * - adKey: Adsterra Zone key (각 배치/사이즈마다 "서로 다른 key" 권장)
 * - width, height: 배너 크기
 * - domain: invoke.js 도메인 (예: "turnerforbes.com") - 배치에서 받은 도메인 사용
 */
export default function AdsterraBanner({ adKey, width = 300, height = 250, domain = "turnerforbes.com", className, style }) {
    const containerId = `container-${adKey}`;
    const INVOKE_SRC = `https://${domain}/${adKey}/invoke.js`;

    useEffect(() => {
        if (!adKey) return;
        const el = document.getElementById(containerId);
        if (!el) return;

        // 큐에 이어붙여 순차 로딩
        window.__adsterraQueue = window.__adsterraQueue.then(
            () =>
                new Promise((resolve) => {
                    // 1) 실행 직전에만 전역 옵션 세팅
                    window.atOptions = {
                        key: adKey,
                        format: "iframe",
                        height,
                        width,
                        params: {},
                    };

                    // 2) 스크립트 생성 및 해당 컨테이너에 append
                    const s = document.createElement("script");
                    s.src = INVOKE_SRC;
                    s.async = false; // 순서 보장
                    s.onload = () => {
                        // 3) 실행 직후 전역 옵션 정리 (다음 배너와 충돌 방지)
                        try {
                            delete window.atOptions;
                        } catch (_) {
                            window.atOptions = undefined;
                        }
                        resolve();
                    };
                    s.onerror = () => {
                        try {
                            delete window.atOptions;
                        } catch (_) {
                            window.atOptions = undefined;
                        }
                        resolve();
                    };

                    // 컨테이너 비우고 삽입(중복 방지)
                    while (el.firstChild) el.removeChild(el.firstChild);
                    el.appendChild(s);
                })
        );

        // 언마운트 시 컨테이너 정리
        return () => {
            while (el.firstChild) el.removeChild(el.firstChild);
        };
    }, [adKey, width, height, domain]);

    return <div id={containerId} className={className} style={{ width, height, minHeight: height, ...style }} aria-label="adsterra-banner" />;
}
