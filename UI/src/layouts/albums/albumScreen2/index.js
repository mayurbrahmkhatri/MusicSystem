import React, { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useLocation, useNavigate } from "react-router-dom";
import MDButton from "components/MDButton";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import MDBox from "components/MDBox";
import { getLoggedInUser } from "service/localstorage_service";
import Tooltip from "@mui/material/Tooltip";
import MDAvatar from "components/MDAvatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Player from "layouts/songs/data/player";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Axios from 'axios';
import {
  Typography,
  TableCell,
  TableContainer,
  TableBody,
  Paper,
  Table,
  Container,
  TableRow,
} from "@mui/material";
import { serverUrl } from "../../../constants/apiconstant";
import AlertDialogSlide from "./popup";


function AlbumScreen2() {
  const [songs,setSongs]= useState([])
  const location = useLocation();
  const [liked,setLiked] = useState(false);
  const [likedd,setLikedd] = useState(false)

  const toggle = ()  =>{
    let localLiked = liked
    localLiked = !localLiked;
    setLiked(localLiked)
  }
  const toggled = () => {
    let localLikedd = likedd
    localLikedd = !localLikedd;
    setLikedd(localLikedd)
  }

  const loadData = () => {    
    Axios.get(`${serverUrl}/albumdetails/${location.state.id}`    
    ).then((response) => {
      const val =  response.data.data;
      setSongs(val);      
    })
  }

  useEffect(() => loadData(), []);
  
  const navigate = useNavigate();
  const [showPlayerBar, setShowPlayerBar] = useState(false)
  const [songIndex,setSongIndex]=useState();
  const newObj = songs;

  return (
    <DashboardLayout>
      <Tooltip title="back">
        <MDButton
          color="dark"
          sx={{ marginLeft: "20px" }}
          onClick={() => {
            navigate("/albums");
          }}
        >
          <ArrowBackIcon />
        </MDButton>
      </Tooltip>

      <div>
        <div style={{ display: "flex", marginLeft: "21px" }}>
          <MDBox
            color="white"
            bgColor="dark"
            variant="gradient"
            borderRadius="lg"
            shadow="lg"
            opacity={1}
            p={1}
            mt={2}
          >
            <img
              src={location.state.img}
              alt=""
              style={{
                height: "300px",
              }}
            />
            {console.log(location.state)}
          </MDBox>
          <MDBox style={{ marginLeft: "21px" }}>
            <Typography
              variant="h6"
              sx={{ marginLeft: 2 }}
              style={{
                color: "#17181a",
                margin: "auto",
                letterSpacing: "0.2px",
                fontSize: "20px",
                fontFamily: "sans-serif",
                marginTop: "140px",
              }}
            >
              Your Songs...
            </Typography>
            <Typography
              variant="h2"
              sx={{ marginLeft: 2 }}
              style={{
                color: "#17181a",
                margin: "auto",
                letterSpacing: "0.2px",
                fontSize: "30px",
                fontFamily: "sans-serif",
                marginTop: "20px",
              }}
            >
              {location.state.name}
              
            </Typography>
            <div style={{ position: "relative", top: "50px" }}>
              <Tooltip title="Play All" placement="top">
                <MDButton color="dark" onClick={() => {
                  setSongIndex(0);
                  setShowPlayerBar(true);
                }} >Play All</MDButton>
              </Tooltip>
            </div>
            <div style={{ position: "relative", top: "7px", left: "130px" }}>
              <Typography
                onClick={() => toggled()}>
                {likedd === false ? (
                  <Tooltip title="like" placement="top">
                    <FavoriteBorderIcon fontSize="large" cursor="pointer" />
                  </Tooltip>
                ) : (
                  <Tooltip title="dislike" placement="top">
                    <FavoriteIcon fontSize="large" cursor="pointer" color="" />
                  </Tooltip>
                )}
              </Typography>
            </div>
          </MDBox>
        </div>

        <div style={{ position: "absolute" }}>
          <MDBox pt={3} >
            <Container >
            {!songs || !songs.length ? 
              <div> No data found </div> :
              <TableContainer component={Paper} >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        <b />
                      </TableCell>
                      <TableCell width="50%">
                        <b>Track</b>
                      </TableCell>

                      <TableCell align="center" width="25%">
                        <b>Movie</b>
                      </TableCell>
                      <TableCell align="center" width="25%">
                        <b>Artitst</b>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    {songs.map((data) => (
                      <TableRow >
                        <TableCell align="center">
                          <MDAvatar src={`${serverUrl}/${data.img_path}`} align="right" />
                          {console.log(data.img_path)}
                        </TableCell>
                        <TableCell align="left">
                          <h6>{data.song_name}</h6>
                        </TableCell>
                        <TableCell align="center">{data.movie_name}</TableCell>
                        <TableCell align="center">{data.artist_name}</TableCell>
                        <TableCell align="center">
                          
                          <Tooltip title="Play Now" placement="top">
                            <PlayCircleFilledWhiteIcon onClick={() => {
                              songs.map((e, index) => {
                                if (e.id === data.id) setSongIndex(index);
                              });                             
                              setShowPlayerBar(true);
                              console.log("hello",` ${serverUrl}/${data.path}`)              

                            }} sx={{ cursor: "pointer" }} fontSize="medium" />
                          </Tooltip>
                        </TableCell>
                        {
                        (getLoggedInUser() === "guest") ? (
                            null
                          ) : (
                            <>
                            <TableCell align="center">
                            <Typography
                              onClick={() => toggle()}>
                              {liked === false ? (
                                <Tooltip title="like" placement="top">
                                  <FavoriteBorderIcon fontSize="medium" cursor="pointer" onClick={() => {
                                    <p>this is the way</p>
                                  }} />
                                </Tooltip>
                              ) : (
                                <Tooltip title="dislike" placement="top">
                                  <FavoriteIcon fontSize="medium" cursor="pointer" />
                                </Tooltip>
                              )}
                            </Typography>
                            </TableCell>
                            <TableCell align="left">
                            <Tooltip title="Add to Your Playlist" placement="top">
                              <AlertDialogSlide />
                            </Tooltip>
                            </TableCell>
                          </>
                          )
                      }
                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              }
            </Container>
          </MDBox>
          <div style={{ position: "sticky", top: "650", marginTop: "10", marginLeft: "21" }}>
            {showPlayerBar ? <div>
              <Player songs={songs} songIndex={songIndex} />
            </div>
              : null}
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}

export default AlbumScreen2;
