import React, { useState, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { serverUrl } from "../../constants/apiconstant";

const Video = (props) => {
    const { songs, songIndex } = props;
    const [index, setIndex] = useState(songIndex);
    useEffect(() => {
        if (songIndex !== index) {
          setIndex(songIndex);
        }
      }, [songIndex]);
    
    return (
        <>
            <ReactHlsPlayer
                src={`${serverUrl}${songs[index].video_path}`}             
               autoPlay
                controls
                showSkipControls
                width="100%"
                height="auto"
            />
        </>
    )
}
export default Video;

