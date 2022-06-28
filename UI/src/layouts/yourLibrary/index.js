import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { CardContent, CardMedia } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Tooltip from "@mui/material/Tooltip";
import MDTypography from "components/MDTypography";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import MDButton from "components/MDButton";
// import MDBox from "components/MDBox";
// import { useState } from "react";
import MOCKDATA from "./data/libraryData.json";
import AddPlaylistImage from "../../assets/images/AddPlaylist.png"
import Popup from "./data/popup"

function Library() {
    const arr1 = MOCKDATA;
    const navigate = useNavigate();
    //   const [open, setOpen] = useState(false);
    //   const handleOpen = () => {
    //     setOpen(true);
    //   };

    //   const handleClose = () => {
    //     setOpen(false);
    //   };


    //   const createPlaylist = () => {
    //       <AlertDialogSlide />
    //   }

    return (
        <>
            <DashboardLayout>
                <Card sx={{ mb: 3, p: 1.2, borderRadius: 1, backgroundColor: "#e8e9ed" }}>
                    <MDTypography variant="h3" color="black" padding="auto" font="sans-serif">
                        {" "}
                        Your Playlists
                    </MDTypography>
                </Card>
                {/* <MDButton onClick={handleOpen}>Open modal</MDButton>
        <Modal
            // eslint-disable-next-line no-restricted-globals
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <MDBox>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
            </MDBox>
        </Modal> */}

                <div>
                    {arr1.length <= 0 ? (
                        "No Playlists exists"
                    ) : (
                        <div>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                {arr1.map((val) => (
                                    <Card
                                        sx={{ maxHeight: 280, marginRight: 8, marginLeft: 2, mb: 3 }}
                                        style={{ backgroundColor: "#363837" }}
                                    >
                                        <Tooltip title="Open Playlist" placement="top">
                                            <CardActionArea
                                                onClick={() =>
                                                    navigate("/playlistDetails", {
                                                        state: {
                                                            img: val.img,
                                                            title: val.title,
                                                            author: val.author,
                                                            songs: val.songs,
                                                        },
                                                    })
                                                }
                                            >
                                                <CardMedia
                                                    component="img"
                                                    alt="Image not found"
                                                    width="100"
                                                    image={val.img}
                                                    sx={{
                                                        cursor: "pointer",
                                                        position: "relative",
                                                        "&:hover": {
                                                            opacity: "0.3",
                                                            button: "",
                                                            onclick: "sdacfvfd",
                                                            color: "white",
                                                        },
                                                    }}
                                                />
                                            </CardActionArea>
                                        </Tooltip>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" margin={0} color="#fff">
                                                {val.title}
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="div" color="#fff">
                                                <Tooltip title="Play Now" placement="top">
                                                    <PlayCircleFilledWhiteIcon />
                                                </Tooltip>
                                                <Tooltip title="Like Playlist" placement="top">
                                                    <FavoriteIcon />
                                                </Tooltip>
                                                <Tooltip title="Add To Your Playlist" placement="top">
                                                    <AddBoxIcon />
                                                </Tooltip>
                                            </Typography>
                                            <IconButton
                                                aria-label="play/pause"
                                                style={{
                                                    position: "relative",
                                                    bottom: 220,
                                                    color: "#a7a9ab",
                                                    left: 60,
                                                }}
                                            >
                                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                            </IconButton>
                                        </CardContent>
                                    </Card>
                                ))}
                                <Card
                                    sx={{ maxHeight: 280, marginRight: 8, marginLeft: 2, mb: 3 }}
                                    style={{ backgroundColor: "#363837" }}
                                >
                                    <Tooltip title="Open Playlist" placement="top">
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Image not found"
                                                shadow="light"
                                                width={0}
                                                height={200}
                                                image={AddPlaylistImage}
                                                // onClick={handleOpen()}
                                                sx={{
                                                    cursor: "pointer",
                                                    position: "relative",
                                                    "&:hover": {
                                                        opacity: "0.3",
                                                        button: "",
                                                        onclick: "sdacfvfd",
                                                        color: "white",
                                                    },
                                                }}
                                            />
                                        </CardActionArea>
                                    </Tooltip>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" margin={0} color="#fff">
                                            Create New Playlist
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}
                </div>
                <Popup />
            </DashboardLayout>
        </>
    );
}

export default Library;

