import React from 'react';
import Video from './component/Video/Video';
import './App.css';

function App() {
    return (
        <div className="app">
            <div className="app_videos">
                <h1>Let's build clone C</h1>
                <Video
                    url="http://techslides.com/demos/sample-videos/small.mp4"
                    channel="Let it go"
                    description="cheers man"
                    shares={123}
                    likes={423}
                    song="LA song"
                    message="Hello man"
                />
                {/* app container   */}
                {/* video*/}
                {/*<Videos/>*/}
                {/*<Video*/}
                {/*    url="http://techslides.com/demos/sample-videos/small.mp4"*/}
                {/*    channel="Let it go"*/}
                {/*    description="cheers man"*/}
                {/*    shares={123}*/}
                {/*    likes={423}*/}
                {/*    song="LA song"*/}
                {/*    message="Hello man"*/}
                {/*/>*/}
            </div>
        </div>
    );
}

export default App;
