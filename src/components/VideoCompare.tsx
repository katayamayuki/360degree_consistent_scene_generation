import React from 'react';

interface VideoCompareProps {
  oursSrc: string;
  otherSrc: string;
  oursLabel?: string;
  otherLabel?: string;
}

const VideoCompare: React.FC<VideoCompareProps> = ({
  oursSrc,
  otherSrc,
  oursLabel = 'Ours',
  otherLabel = 'WonderJourney',
}) => {
  const blockStyle: React.CSSProperties = {
    flex: 1,
    textAlign: 'center',
  };

  const videoStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    background: '#000',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  };

  const labelStyle: React.CSSProperties = {
    marginTop: '0.5rem',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={blockStyle}>
        <video
          src={oursSrc}
          loop
          autoPlay
          muted
          playsInline
          style={videoStyle}
        />
        <div style={labelStyle}>{oursLabel}</div>
      </div>
      <div style={blockStyle}>
        <video
          src={otherSrc}
          loop
          autoPlay
          muted
          playsInline
          style={videoStyle}
        />
        <div style={labelStyle}>{otherLabel}</div>
      </div>
    </div>
  );
};

export default VideoCompare;
