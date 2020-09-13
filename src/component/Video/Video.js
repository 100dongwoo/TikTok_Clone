import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter/VideoFooter';
import VideoSidebar from './VideoSidebar/VideoSidebar';

function Video({ url, channel, description, song, likes, message, shares }) {
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
                src={url}
            />
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar likes={likes} shares={shares} messages={message} />
            {/*  videoFooter  */}
            {/*videoSidebar (like,comment  ....)*/}
        </div>
    );
}

export default Video;
