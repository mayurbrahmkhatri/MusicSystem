
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import Typography from "@mui/material/Typography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { CardContent, CardMedia } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { getLoggedInUser } from "service/localstorage_service";
import { ApiService } from "../../service/ApiSerivce";
import { serverUrl } from "../../constants/apiconstant";
import AlertDialogSlide from "./data/popup";
import Player from "./data/player";
import PaginationControlled from "./data/pagination";
import Video from "../video-streaming/videoplayer";


function Songs() {
  const [showPlayerBar, setShowPlayerBar] = useState(false)
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [initialValue, setInitialValue] = useState(true)
  // const [songPathValue, setSongPathValue] = useState("");
  // const [songId, setSongId] = useState();
  const [likeState, setLikeState] = useState(false);
  const [songIndex, setSongIndex] = useState();

  const LikeValues = {
    likeColor: "light",
    HoverMsg: "Like",
  };

  if (likeState === true) {
    LikeValues.likeColor = "info";
    LikeValues.HoverMsg = "Unlike";
  }
  const [array, setArray] = useState([]);

  const fetchData = async () => {
    try {
      const response = await new ApiService().getSongs();
      const val = response.data.rows;
      setArray(val)
    }
    catch (error) {
      console.log(error);
    }
  }

  const sendData = async (id) => {
    try {
      await new ApiService().addLikedSong(getLoggedInUser(), id);
    }
    catch (error) {
      console.log("Error --->", error);
    }
  }
  const removeData = async () => {
    try {
      // await new ApiService().removeLikedSong(getLoggedInUser(), songID);
      console.log("Remove Data Called");
    }
    catch (error) {
      console.log("Error --->", error);
    }
  }
  useEffect(() => fetchData(), []);
  let arr1 = array;
  const a = arr1[1]


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = arr1.filter((value) => value.song_name.toLowerCase().includes(searchWord.toLowerCase()));
    setInitialValue(false)
    if (searchWord === "") {
      setFilteredData(arr1)
    } else {
      setFilteredData(newFilter);
      arr1 = filteredData
    }
  };

  // const changeState = () => {
  // };

  return (
    <DashboardLayout>
      <MDBox pr={1} mb={1} display="flex" justifyContent="flex-start" marginLeft={3} >
        <MDInput sx={{ width: 220, height: 60, borderRadius: 0 }} label="Search here" value={wordEntered} onChange={handleFilter}
        />
      </MDBox>
      <div>
        {initialValue ? <div style={{ display: "flex", flexWrap: "wrap" }}>
          {arr1.map((val) => (
            <Card
              sx={{
                maxHeight: 230,
                marginRight: 5,
                marginLeft: 4,
                mb: 3,
              }}
              style={{ backgroundColor: "#363837" }}
            >
              <CardMedia
                component="img"
                alt="Image not found"
                width={220}
                height={150}
                image={`${serverUrl}/${val.img_path}`}
                sx={{
                  border: ({ borders: { borderWidth }, palette: { black } }) =>
                    `${borderWidth[2]} solid ${black.main}`,
                  cursor: "pointer",
                  position: "relative",
                  "&:hover, &:focus": {
                    opacity: "0.6",
                    button: "",
                    onclick: "sdacfvfd",
                  },
                }}
                onClick={() => {
                  setShowVideoPlayer(true);
                  setShowPlayerBar(false)
                  arr1.map((e, index) => {
                    if (e.id === val.id) setSongIndex(index);
                  });
                }}
              />
              <CardContent sx={{ minWidth: 200 }}>
                <Typography gutterBottom variant="h6" component="div" margin={0} color="#fff" textAlign="center">
                  {val.song_name}
                </Typography>
                <MDBox textAlign="center" lineHeight={1}>
                  <Tooltip title="Play Now" placement="top">
                    <PlayCircleFilledWhiteIcon color="light"

                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowPlayerBar(true);
  
                        arr1.map((e, index) => {
                          if (e.id === val.id) setSongIndex(index);
                        });
                      }}
                    // sx={{ cursor: "pointer" }}
                    />

                  </Tooltip>
                  {
                    (getLoggedInUser() === "guest") ? (
                      null
                    ) : (
                      <>
                        <Tooltip title={LikeValues.HoverMsg} placement="top">
                          <FavoriteIcon color={LikeValues.likeColor}
                            sx={{ cursor: "pointer" }}
                            onClick={() => {
                              if (LikeValues.likeColor === "light") {
                                sendData(val.id)
                                setLikeState(!likeState);
                              } else if (LikeValues.likeColor === "info") {
                                removeData()
                                setLikeState(!likeState)
                              }

                            }}
                          />

                        </Tooltip>
                        <Tooltip title="Add To Your Playlist" placement="top">
                          <AlertDialogSlide color="light" />
                        </Tooltip>
                      </>
                    )
                  }

                </MDBox>

                <IconButton
                  aria-label="play/pause"
                  style={{ position: "relative", bottom: 160, left: 50, color: "#a7a9ab" }}
                >
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </div> : null}

        {arr1.length <= 0 ? (

          "data not available"
        ) : (
          <div>
            {console.log("array", a.path)}

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {filteredData.map((val) => (
                <Card
                  sx={{
                    maxHeight: 230,
                    marginRight: 5,
                    marginLeft: 4,
                    mb: 3,
                  }}
                  style={{ backgroundColor: "#363837" }}
                >
                  <CardMedia
                    component="img"
                    alt="Image not found"
                    width={200}
                    height={140}
                    image={`${serverUrl}/${val.img_path}`}
                    sx={{
                      border: ({ borders: { borderWidth }, palette: { black } }) =>
                        `${borderWidth[2]} solid ${black.main}`,
                      cursor: "pointer",
                      position: "relative",
                      "&:hover, &:focus": {
                        opacity: "0.6",
                        button: "",
                        onclick: "sdacfvfd",
                      },
                    }}
                    onClick={() => {
                      setShowVideoPlayer(true);
                      arr1.map((e, index) => {
                        if (e.id === val.id) setSongIndex(index);
                      });
                    }}
                  />

                  <CardContent sx={{ minWidth: 200 }}>
                    <Typography gutterBottom variant="h6" component="div" margin={0} color="#fff" textAlign="center">
                      {val.song_name}
                    </Typography>

                    <MDBox textAlign="center" lineHeight={1}>
                      <Tooltip title="Play Now" placement="top">
                        <PlayCircleFilledWhiteIcon color="light"
                          sx={{ cursor: "pointer" }}
                          onClick={() => {
                            setShowPlayerBar(true);
                            arr1.map((e, index) => {
                              if (e.id === val.id) setSongIndex(index);
                            });
                          }}
                        />

                      </Tooltip>
                      <Tooltip title="Like Playlist" placement="top">
                        <FavoriteIcon color="light"
                          sx={{ cursor: "pointer" }} />
                      </Tooltip>
                      <Tooltip title="Add To Your Playlist" placement="top">

                        <AlertDialogSlide
                          // onClick={()=>{
                          //   setSongsId(val.id)
                          // }}  songId={songsId}
                          color="light" />
                      </Tooltip>
                    </MDBox>

                    <IconButton
                      aria-label="play/pause"
                      style={{ position: "relative", bottom: 160, left: 50, color: "#a7a9ab" }}
                    >
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <br />
      <div>
        {showPlayerBar ? <>
          <Player songs={arr1} songIndex={songIndex} />
          </>
          : 
          <>
            {showVideoPlayer ?
              <Video songs={arr1} songIndex={songIndex} />
              :null
            }
          </>
        }
      </div>
      <PaginationControlled />
    </DashboardLayout >
  );
}

export default Songs;
