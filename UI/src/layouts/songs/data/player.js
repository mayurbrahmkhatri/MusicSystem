import React, { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { serverUrl } from "../../../constants/apiconstant";
import { getLoggedInUser } from "../../../service/localstorage_service";
import { ApiService } from "../../../service/ApiSerivce";

const playedSongs = async (id) => {
  if (getLoggedInUser() !== 'guest') {  
    try {
      console.log("song ID", id)
      const response = await new ApiService().createUserHistory(getLoggedInUser(), id);
      console.log("response", response);
    } catch (error) {
      console.log("Error --->", error);
    }
  };

}

const Player = (props) => {
  const { songs, songIndex } = props;
  const [index, setIndex] = useState(songIndex);
  useEffect(() => {
    if (songIndex !== index) {
      setIndex(songIndex);
    }
  }, [songIndex]);
  return (
    <>
    <div>
      {`${songs[index].song_name}`}
    </div>
    <AudioPlayer
      autoPlay
      src={`${serverUrl}${songs[index].path}`}
      volume={1}
      showSkipControls
      loop="true"
      timeFormat="mm:ss"
      preload
      onClickNext={() => (index === songs.length - 1) ? setIndex(0) : setIndex(index+1)}
      onClickPrevious={() => (index === 0) ? setIndex(songs.length - 1) : setIndex(0)}
      onPlay={playedSongs(songs[index].id)}
    />
    </>
  )
};
export default Player;
