// src/pages/Home.tsx
import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import VideoCompare from '../components/VideoCompare';

const Home: React.FC = () => {
  // Vite の base 設定に応じて、ビルド時に置き換わる文字列
  // 例: "/360degree_consistent_scene_generation/"
  const BASE = import.meta.env.BASE_URL;

  // 画像ギャラリー用アイテム
  const resultItems = [
    {
      src:       `${BASE}assets/metrics/met3r.png`,
      thumbnail:`${BASE}assets/metrics/met3r.png`,
    },
    {
      src:       `${BASE}assets/metrics/tsed.png`,
      thumbnail:`${BASE}assets/metrics/tsed.png`,
    },
    {
      src:       `${BASE}assets/metrics/fvd.png`,
      thumbnail:`${BASE}assets/metrics/fvd.png`,
    },
  ];

  // More Examples セクション用：単一動画アイテム
  const videoItems = [
    {
      thumbnail:`${BASE}videos/sample_video.mp4`,
      src:      `${BASE}videos/sample_video.mp4`,
      video:     true,
      videoSrc: `${BASE}videos/sample_video.mp4`,
    }
  ];

  // Comparison セクション用：動画ペア
  const videoPairs = [
    {
      otherSrc: `${BASE}videos/french_manor_WJ.mp4`,
      oursSrc:  `${BASE}videos/output_french_manor_2.mp4`,
      otherLabel: 'WonderJourney',
      oursLabel:  'Ours',
    },
    {
      otherSrc: `${BASE}videos/output_cyberpunk_2_WJ.mp4`,
      oursSrc:  `${BASE}videos/output_cyberpunk_2.mp4`,
      otherLabel: 'WonderJourney',
      oursLabel:  'Ours',
    }
  ];

  const [current, setCurrent] = useState(0);
  const pairCount = videoPairs.length;

  const handlePrev = () =>
    setCurrent((current + pairCount - 1) % pairCount);
  const handleNext = () =>
    setCurrent((current + 1) % pairCount);

  return (
    <>
      {/* ===== Hero セクション ===== */}
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1>Image-Guided 360-degree Scene Generation with Structural and Visual Consistency</h1>
        <p>
          Y. Katayama,&nbsp;R. Togo,&nbsp;K. Maeda,&nbsp;T. Ogawa,&nbsp;M. Haseyama
        </p>
        <div>
          <a className="btn" href="#paper">Paper</a>
          <a className="btn" href="#arXiv">arXiv</a>
          <a className="btn" href="#code">Code</a>
        </div>
      </section>

      {/* ===== Abstract ===== */}
      <section id="abstract">
        <h2>Abstract</h2>
        <p>
          coming soon...
        </p>
      </section>

      {/* ===== Method ===== */}
      <section id="method">
        <h2>Method</h2>
        {/* <img
          src={`${BASE}images/overview.png`}
          alt="Method overview"
          style={{ width: '100%', margin: '1rem 0' }}
        /> */}
        <p> coming soon...</p>
      </section>

      {/* ===== Results ===== */}
      <section id="results">
        <h2>Results on RealEstate10K</h2>
        <Gallery items={resultItems} />
      </section>

      {/* ===== Comparison ===== */}
      <section id="comparison" style={{ position: 'relative' }}>
        <h2>Comparison with WonderJourney</h2>
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
          aria-label="Previous Example"
        >
          ◀
        </button>

        <VideoCompare
          otherSrc={videoPairs[current].otherSrc}
          oursSrc={videoPairs[current].oursSrc}
          otherLabel={videoPairs[current].otherLabel}
          oursLabel={videoPairs[current].oursLabel}
        />

        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
          aria-label="Next Example"
        >
          ▶
        </button>
      </section>

      {/* ===== More Examples ===== */}
      <section id="more_examples">
        <h2>More Examples</h2>
        <Gallery items={videoItems} />
      </section>

      {/* ===== BibTeX ===== */}
      <section id="bibtex">
        <h2>BibTeX</h2>
        coming soon...
        {/* <pre>{`@misc{asim2024metr3r,
  title={MEt3R: Measuring Multi-View Consistency in Generated Images},
  author={Asim, Mohammad and Wewer, Christopher and Wimmer, Thomas and Schiele, Bernt and Lenssen, Jan Eric},
  year={2024},
  howpublished={\\url{https://geometric-rl.mpi-inf.mpg.de/met3r/}}
}`}</pre> */}
      </section>
    </>
  );
};

export default Home;
