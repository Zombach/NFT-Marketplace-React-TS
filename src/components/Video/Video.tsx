import './Video.scss';
import { FC } from 'react';

export const Video: FC = () => {
  return (
    <>
      <div className="video">
        <h2>BnB Nft marketplace</h2>
        <span>Mission to lead the future of metaverse</span>
        <iframe
          width="734"
          height="412"
          frameBorder={0}
          src="https://www.youtube.com/embed/iaVmsp7dU1Y?si=zQ5FTNvCgZyucn12&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </>
  );
};

export default Video;
