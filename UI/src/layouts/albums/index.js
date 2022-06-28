import Card from "@mui/material/Card";

import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { CardContent, CardMedia } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getLoggedInUser } from "service/localstorage_service";
import Tooltip from "@mui/material/Tooltip";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
// import { ApiService }  from "../../service/ApiSerivce";
import { ApiService } from "../../service/ApiSerivce";
import { serverUrl } from "../../constants/apiconstant";

function Albums() {
  let data = [];
  const navigate = useNavigate();
  const [dataAry, setDataAry] = useState([]);
  const fetchData = async () => {
    try {
      const response =  await new ApiService().getAlbums();
      data = response.data.rows;
      setDataAry(data);
      console.log("response", response);
    } catch (error) {
      console.log("Error --->", error);
    }
  };
  
  useEffect(() => fetchData(), []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    if (searchWord !== "") {
      setDataAry(data.filter((value) => value.albumName.toLowerCase().includes(searchWord.toLowerCase())));
    } else {
      setDataAry(data)
    }
  };


  return (
    <DashboardLayout>

      <MDBox pr={1} mb={1} display="flex" justifyContent="flex-start" marginLeft={3} >
        <MDInput sx={{ width: 220, height: 60, borderRadius: 0 }} label="Search here" 
        onChange={handleFilter}
        />
      </MDBox>
      <div>
        {!dataAry || !dataAry.length ? (
          <MDBox sx={{ marginLeft: 3 }}>
            <MDTypography variant="h4">
              Oops! No data available...
            </MDTypography>
          </MDBox>

        ) : (
          <div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {dataAry.map((val) => (
                <Card
                
                  sx={{ maxHeight: 277, marginLeft: 3, marginRight: 4, mb: 4}}
                  style={{ backgroundColor: "#212121" }}
                >
                  <CardActionArea
                    onClick={() => {
                      
                      navigate("/albumSongs", {
                        state: {
                          img: `${serverUrl}/${val.path}`,
                          id: val.id,
                          name: val.album_name,
                        },
                      });
                    }}
                  >                    
                    <CardMedia  component="img" alt="Image not found" width={250}
                height={200} image={`${serverUrl}/${val.path}`} />
                  </CardActionArea>
                  <CardContent>
                    <Typography variant="h6" component="div" margin={0} color="#fff">
                      {val.album_name}

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
                              {/* <AlertDialogSlide color="light" /> */}
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
      {/* <PaginationControlled /> */}  
    </DashboardLayout>
  );
}

export default Albums;
