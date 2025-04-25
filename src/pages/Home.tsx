import React from 'react';
import Gallery from '../components/Gallery';
import VideoCompare from '../components/VideoCompare';
const Home: React.FC = () => {
  // ① Hero（タイトル＋ボタン）
  // ② Abstract セクション
  // ③ Method（図＋テキスト）
  // ④ Results（画像ギャラリー）
  // ⑤ 比較グラフ（画像ギャラリー）
  // ⑥ Video Examples（動画ギャラリー）
  // ⑦ Map Visualizations（画像ギャラリー）
  // ⑧ Acknowledgements＋BibTeX

  // サンプル用の Gallery items
  const resultItems = [
    {
      src: '/assets/metrics/met3r.png',
      thumbnail: '/assets/metrics/met3r.png'
    },
    {
      src: '/assets/metrics/tsed.png',
      thumbnail: '/assets/metrics/tsed.png'
    },
    {
      src: '/assets/metrics/fvd.png',
      thumbnail: '/assets/metrics/fvd.png'
    }
  ];
  const videoItems = [
    {
      thumbnail: '/videos/sample_video.mp4',
      src: '/videos/sample_video.mp4',
      video: true,
      videoSrc: '/videos/sample_video.mp4'
    }
  ];
  const mapVizItems = [
    { src: '/assets/map_viz/genwarp.png', thumbnail: '/assets/map_viz/genwarp.png' },
    { src: '/assets/map_viz/photonavs.png', thumbnail: '/assets/map_viz/photonavs.png' }
  ];

  return (
    <>
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1>Title ASAGOHAN</h1>
        <p>
          Mohammad Asim¹,&nbsp;Christopher Wewer²,…&nbsp;Jan Eric Lenssen³
        </p>
        <div>
          <a className="btn" href="#paper">Paper</a>
          <a className="btn" href="#arXiv">arXiv</a>
          {/* <a className="btn" href="#code">Code (MEt3R)</a> */}
          {/* <a className="btn" href="#codelvdm">Code (MV-LDM)</a> */}
        </div>
      </section>

      <section id="abstract">
        <h2>Abstract</h2>
        <p>
          We introduce Asagohan, a metric for multi‑view consistency…
        </p>
      </section>

      <section id="method">
        <h2>Method</h2>
        <img
          src="/images/method_diagram.png"
          alt="Method overview"
          style={{ width: '100%', margin: '1rem 0' }}
        />
        <p>
          Our metric evaluates the consistency between images I<sub>1</sub>…
        </p>
      </section>

      <section id="results">
        <h2>Results on RealEstate10K</h2>
        <Gallery items={resultItems} />
      </section>

      <section id="comparison">
        <h2>Comparison with WonderJourney</h2>
        <VideoCompare
            oursSrc="/videos/test_french_manor.mp4"
            otherSrc="/videos/output_french_manor_WJ.mp4"
            // デフォルトラベルを使うなら以下は省略可
            // oursLabel="Ours"
            // otherLabel="WonderJourney"
        />
        </section>

      <section id="videos">
        <h2>Evaluating Video Generation Models</h2>
        <Gallery items={videoItems} />
      </section>

      <section id="mapviz">
        <h2>MEt3R Map Visualizations</h2>
        <Gallery items={mapVizItems} />
      </section>

      <section id="ack">
        <h2>Acknowledgements</h2>
        <p>
          This project was partially funded by the Saarland/…
        </p>
      </section>

      <section id="bibtex">
        <h2>BibTeX</h2>
        <pre>
{`@misc{asim2024metr3r,
  title={MEt3R: Measuring Multi-View Consistency in Generated Images},
  author={Asim, Mohammad and Wewer, Christopher and Wimmer, Thomas and Schiele, Bernt and Lenssen, Jan Eric},
  year={2024},
  howpublished={\\url{https://geometric-rl.mpi-inf.mpg.de/met3r/}}
}`}
        </pre>
      </section>
    </>
  );
};

export default Home;
