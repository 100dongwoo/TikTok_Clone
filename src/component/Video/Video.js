import React, { useRef, useState } from 'react';
import './Video.css';
function Video(props) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const handleVideoPress = () => {
        //이미 작동중일떈 멈추고
        // 아니면 시작
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                className="video_player"
                loop
                ref={videoRef}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            {/*  videoFooter  */}
            {/*videoSidebar (like,comment  ....)*/}
            <div className="app_videos"></div>
        </div>
    );
}

export default Video;
