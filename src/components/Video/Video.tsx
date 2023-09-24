import './Video.scss';
import { FC } from 'react';

export const Video: FC = () => {
  return (
    <>
      <div id={'video'} className="video">
        <h2>BnB Nft marketplace</h2>
        <span>Mission to lead the future of metaverse</span>
        <div className="video-block">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            src="https://www.youtube.com/embed/iaVmsp7dU1Y?si=zQ5FTNvCgZyucn12&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
