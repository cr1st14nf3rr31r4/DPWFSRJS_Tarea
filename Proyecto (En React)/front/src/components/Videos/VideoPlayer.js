import React from 'react';

const VideoPlayer = (props) => {
    return (
        <div className="video">
            <iframe width={props.width}
                height={props.height}
                src={props.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    );
}

export default VideoPlayer;