import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import Typography from "@mui/material/Typography";
import { CardContent, CardMedia } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect } from "react";
// import { ApiService } from "service/ApiSerivce";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { serverUrl } from "constants/apiconstant";
// import Axios from "axios";
import { ApiService } from "../../service/ApiSerivce"
import { getLoggedInUser } from "../../service/localstorage_service";

function Favourite() {
  // let arr = [];
  const [likeState, setLikeState] = useState(true);
  const LikeValues = {
    likeColor: "light",
    HoverMsg: "Like",
  };

  if (likeState === true) {
    LikeValues.likeColor = "info";
    LikeValues.HoverMsg = "Unlike";
  }
  const [dataAry, setDataAry] = useState([]);
  const fetchData = async () => {
    try {
      const response = await new ApiService().getFavourite(getLoggedInUser());
      const resData = response.data;
      setDataAry(resData);
      console.log("favSOng DATA", resData);
      
    } catch (error) {
      console.log("Error --->", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <Card sx={{ mb: 4 }}>
        <Typography sx={{ padding: 2 }} variant="h4">
          Favourites
        </Typography>
      </Card>
      <div>
        {!dataAry || !dataAry.length ? (
          "Opps, No Liked Songs"
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {dataAry.map((val, index) => (
              <Card
                sx={{ maxHeight: 280, marginRight: 4, marginLeft: 2, mb: 3 }}
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
                />
                <CardContent sx={{ minWidth: 200 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    margin={0}
                    color="#fff"
                    textAlign="center"
                  >
                    {val.song_name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    margin={0}
                    color="#fff"
                    textAlign="center"
                  >
                    {val.movie_name}
                    {index}
                  </Typography>
                  <MDBox textAlign="center" varient="button" lineHeight={1}>
                    <Tooltip title="Play Now" placement="top">
                      <PlayCircleFilledWhiteIcon color="light" sx={{ cursor: "pointer" }} />
                    </Tooltip>
                    <Tooltip title={LikeValues.HoverMsg} placement="top">
                      <FavoriteIcon
                        id={index}
                        color={LikeValues.likeColor}
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          setLikeState(!likeState);
                        }}
                      />
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
          
          // </div>
        )}
      </div>
    </DashboardLayout>
  );
}
export default Favourite;
