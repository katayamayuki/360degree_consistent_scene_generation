import { jsx as _jsx } from "react/jsx-runtime";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-video.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgVideo from 'lightgallery/plugins/video';
const Gallery = ({ items }) => (_jsx(LightGallery, { plugins: [lgThumbnail, lgVideo], speed: 500, children: items.map(({ src, thumbnail, video, videoSrc }, i) => (_jsx("a", { href: video ? videoSrc : src, "data-lg-size": video ? undefined : '1600-900', "data-video": video
            ? JSON.stringify({
                source: [{ src: videoSrc, type: 'video/mp4' }],
                attributes: { preload: false, controls: true }
            })
            : undefined, children: _jsx("img", { src: thumbnail, alt: `gallery-${i}` }) }, i))) }));
export default Gallery;
