import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function VideoSidebar(props) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="VideoSidebar">
            <div className="videoSidebar_button">
                {liked ? (
                    <FavoriteIcon
                        fontSize="large"
                        onClick={(e) => {
                            setLiked(false);
                        }}
                    />
                ) : (
                    <FavoriteBorderIcon
                        fontSize="large"
                        onClick={(e) => {
                            setLiked(true);
                        }}
                    />
                )}
                <p>{liked ? 101 : 100}</p>
            </div>
            <div className="videoSidebar_button">
                <MessageIcon fontSize="large" />
                <p>250</p>
            </div>
            <div className="videoSidebar_button">
                <ShareIcon fontSize="large" />
                <p>12</p>
            </div>
        </div>
    );
}

export default VideoSidebar;
