import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { CardContent, CardMedia } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { getLoggedInUser } from "service/localstorage_service";
import AlertDialogSlide from "./PlaylistDetails/popup/cardindex";
import PaginationControlled from "./pagination";
import { ApiService }  from "../../service/ApiSerivce"
import { serverUrl } from "../../constants/apiconstant";

function Playlist() {
  const navigate = useNavigate();
  const [dataAry, setDataAry] = useState([])
  let data = [];
  // const user = getLoggedInUser()
  // const checkGuestUser = async () => {
  //   if (user !== "guest") {
  //     return tru
  //   }
  // }
  const fetchData = async () => {
    try {
      const response =  await new ApiService().getPlaylists();
      data = response.data.rows;
      setDataAry(data);
    } catch (error) {
      console.log("Error --->", error);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  // console.log(dataAry);
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    if (searchWord !== "") {
      setDataAry(dataAry.filter((value) =>
      value.playlist_name.toLowerCase().includes(searchWord.toLowerCase())
      ));
    } else {
      setDataAry(data);
    }
  };

  return (
    <DashboardLayout>
     
      <MDBox pr={1} mb={1} display="flex" justifyContent="flex-start" marginLeft={3}>
        <MDInput
          sx={{ width: 220, height: 60, borderRadius: 0 }}
          label="Search here"
          onChange={handleFilter}
        />
      </MDBox>
      <Card sx={{ mb: 3, p: 1.2, borderRadius: 1, backgroundColor: "#e8e9ed" }}>
        <MDTypography variant="h3" color="black" padding="auto" font="sans-serif">
          Playlists Made For You
        </MDTypography>
      </Card>
      <div>
        { !dataAry || !dataAry.length ? (
          "data not available"
        ) : (
          <div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {dataAry.map((val) => (
                <Card
                  sx={{ maxHeight: 277, marginLeft: 3, marginRight: 6, mb: 4 }}
                  style={{ backgroundColor: "#212121" }}
                >
                  <CardActionArea
                    onClick={() => {
                      navigate("/playlistDetails", {
                        state: {
                          img: `${serverUrl}/${val.path}`,
                          title: val.playlist_name,
                          id:val.id,
                        },
                      });
                    }}
                  >
                    {console.log(val.id)}
                    <CardMedia
                      component="img"
                      alt="Image not found"
                      width="100"
                      image={`${serverUrl}/${val.path}`}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography variant="h6" component="div" margin={0} color="#fff">
                      {val.playlist_name}
                    </Typography>
                    <MDBox textAlign="center" lineHeight={1}>
                      <Tooltip title="Play Now" placement="top">
                        <PlayCircleFilledWhiteIcon color="light" />
                      </Tooltip>
                      {
                        (getLoggedInUser() === "guest") ? (
                            null
                          ) : (
                            <>
                            <Tooltip title="Like Playlist" placement="top">
                              <FavoriteIcon color="light" />
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
                      style={{ position: "relative", bottom: 180, left: 60, color: "#a7a9ab" }}
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
      <PaginationControlled />
    </DashboardLayout>
  );
}

export default Playlist;
