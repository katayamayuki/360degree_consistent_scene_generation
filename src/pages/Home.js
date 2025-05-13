import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// src/pages/Home.tsx
import { useState } from 'react';
import Gallery from '../components/Gallery';
import VideoCompare from '../components/VideoCompare';
const Home = () => {
    // Vite の base 設定に応じて、ビルド時に置き換わる文字列
    // 例: "/360degree_consistent_scene_generation/"
    const BASE = import.meta.env.BASE_URL;
    // 画像ギャラリー用アイテム
    const resultItems = [
        {
            src: `${BASE}assets/metrics/met3r.png`,
            thumbnail: `${BASE}assets/metrics/met3r.png`,
        },
        {
            src: `${BASE}assets/metrics/tsed.png`,
            thumbnail: `${BASE}assets/metrics/tsed.png`,
        },
        {
            src: `${BASE}assets/metrics/fvd.png`,
            thumbnail: `${BASE}assets/metrics/fvd.png`,
        },
    ];
    // More Examples セクション用：単一動画アイテム
    const videoItems = [
        {
            thumbnail: `${BASE}videos/sample_video.mp4`,
            src: `${BASE}videos/sample_video.mp4`,
            video: true,
            videoSrc: `${BASE}videos/sample_video.mp4`,
        }
    ];
    // Comparison セクション用：動画ペア
    const videoPairs = [
        {
            otherSrc: `${BASE}videos/french_manor_WJ.mp4`,
            oursSrc: `${BASE}videos/output_french_manor_2.mp4`,
            otherLabel: 'WonderJourney',
            oursLabel: 'Ours',
        },
        {
            otherSrc: `${BASE}videos/output_cyberpunk_2_WJ.mp4`,
            oursSrc: `${BASE}videos/output_cyberpunk_2.mp4`,
            otherLabel: 'WonderJourney',
            oursLabel: 'Ours',
        }
    ];
    const [current, setCurrent] = useState(0);
    const pairCount = videoPairs.length;
    const handlePrev = () => setCurrent((current + pairCount - 1) % pairCount);
    const handleNext = () => setCurrent((current + 1) % pairCount);
    return (_jsxs(_Fragment, { children: [_jsxs("section", { style: { textAlign: 'center', padding: '4rem 0' }, children: [_jsx("h1", { children: "Image-Guided 360-degree Scene Generation with Structural and Visual Consistency" }), _jsx("p", { children: "Y. Katayama,\u00A0R. Togo,\u00A0K. Maeda,\u00A0T. Ogawa,\u00A0M. Haseyama" }), _jsxs("div", { children: [_jsx("a", { className: "btn", href: "#paper", children: "Paper" }), _jsx("a", { className: "btn", href: "#arXiv", children: "arXiv" }), _jsx("a", { className: "btn", href: "#code", children: "Code" })] })] }), _jsxs("section", { id: "abstract", children: [_jsx("h2", { children: "Abstract" }), _jsx("p", { children: "coming soon..." })] }), _jsxs("section", { id: "method", children: [_jsx("h2", { children: "Method" }), _jsx("p", { children: " coming soon..." })] }), _jsxs("section", { id: "results", children: [_jsx("h2", { children: "Results on RealEstate10K" }), _jsx(Gallery, { items: resultItems })] }), _jsxs("section", { id: "comparison", style: { position: 'relative' }, children: [_jsx("h2", { children: "Comparison with WonderJourney" }), _jsx("button", { onClick: handlePrev, style: {
                            position: 'absolute',
                            left: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }, "aria-label": "Previous Example", children: "\u25C0" }), _jsx(VideoCompare, { otherSrc: videoPairs[current].otherSrc, oursSrc: videoPairs[current].oursSrc, otherLabel: videoPairs[current].otherLabel, oursLabel: videoPairs[current].oursLabel }), _jsx("button", { onClick: handleNext, style: {
                            position: 'absolute',
                            right: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }, "aria-label": "Next Example", children: "\u25B6" })] }), _jsxs("section", { id: "more_examples", children: [_jsx("h2", { children: "More Examples" }), _jsx(Gallery, { items: videoItems })] }), _jsxs("section", { id: "bibtex", children: [_jsx("h2", { children: "BibTeX" }), "coming soon..."] })] }));
};
export default Home;
