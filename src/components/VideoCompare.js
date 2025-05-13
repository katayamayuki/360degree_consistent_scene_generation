import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const VideoCompare = ({ oursSrc, otherSrc, oursLabel = 'Ours', otherLabel = 'WonderJourney', }) => {
    const blockStyle = {
        flex: 1,
        textAlign: 'center',
    };
    const videoStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '4px',
        background: '#000',
    };
    const containerStyle = {
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
    };
    const labelStyle = {
        marginTop: '0.5rem',
        fontWeight: 'bold',
    };
    return (_jsxs("div", { style: containerStyle, children: [_jsxs("div", { style: blockStyle, children: [_jsx("video", { src: oursSrc, loop: true, autoPlay: true, muted: true, playsInline: true, style: videoStyle }), _jsx("div", { style: labelStyle, children: oursLabel })] }), _jsxs("div", { style: blockStyle, children: [_jsx("video", { src: otherSrc, loop: true, autoPlay: true, muted: true, playsInline: true, style: videoStyle }), _jsx("div", { style: labelStyle, children: otherLabel })] })] }));
};
export default VideoCompare;
