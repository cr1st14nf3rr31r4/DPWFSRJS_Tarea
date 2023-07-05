import React from 'react';
import VideoPlayer from './VideoPlayer';

const VGallery = () => {
    return (  
        <div className="vgallery">
            <VideoPlayer width="300px" height="200px" url="https://www.youtube.com/embed/j7ly6ysFaqo" />
            <VideoPlayer width="300px" height="200px" url="https://www.youtube.com/embed/hgFwSjy9g5U" />
            <VideoPlayer width="300px" height="200px" url="https://www.youtube.com/embed/PsygWNE5zXs" />
            <VideoPlayer width="300px" height="200px" url="https://www.youtube.com/embed/1w4iiPb-iYs" />
            <VideoPlayer width="300px" height="200px" url="https://www.youtube.com/embed/L3oEQPJMyzg" />
            <VideoPlayer width="300px" height="200px" url="https://www.youtube.com/embed/vGyic01IVuI" />
            <VideoPlayer width="300px" height="200px" url="https://www.youtube.com/embed/uWoxn7hhXyw" />
            <VideoPlayer width="300px" height="200px" url="https://www.youtube.com/embed/yNsjLiae5Xc" />
            <VideoPlayer width="300px" height="200px" url="https://www.youtube.com/embed/tmfsIPWhHj0" />
        </div>
    );
}
 
export default VGallery;