import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-video.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgVideo from 'lightgallery/plugins/video';

interface GalleryItem {
  src: string;
  thumbnail: string;
  video?: boolean;
  videoSrc?: string;
}

interface Props {
  items: GalleryItem[];
}

const Gallery: React.FC<Props> = ({ items }) => (
  <LightGallery plugins={[lgThumbnail, lgVideo]} speed={500}>
    {items.map(({ src, thumbnail, video, videoSrc }, i) => (
      <a
        key={i}
        href={video ? videoSrc : src}
        data-lg-size={video ? undefined : '1600-900'}
        data-video={
          video
            ? JSON.stringify({
                source: [{ src: videoSrc, type: 'video/mp4' }],
                attributes: { preload: false, controls: true }
              })
            : undefined
        }
      >
        <img src={thumbnail} alt={`gallery-${i}`} />
      </a>
    ))}
  </LightGallery>
);

export default Gallery;
