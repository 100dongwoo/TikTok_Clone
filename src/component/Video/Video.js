import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter/VideoFooter';
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
                src="http://techslides.com/demos/sample-videos/small.mp4"
            />
            <VideoFooter />
            {/*  videoFooter  */}
            {/*videoSidebar (like,comment  ....)*/}
            <div className="app_videos"></div>
        </div>
    );
}

export default Video;
