import { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardContent, CardMedia } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { ApiService } from "../../service/ApiSerivce"
import { getLoggedInUser } from "../../service/localstorage_service";
import { serverUrl } from "../../constants/apiconstant";
import './style.css';

function Dashboard() {
  const [dataAry, setDataAry] = useState([]);
  const fetchData = async () => {
    try {
      const response = await new ApiService().getDashboard(getLoggedInUser());
      setDataAry(response);
    } catch (error) {
      console.log("Error --->", error);
    }
  };
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <DashboardLayout>
      <div>
        {!dataAry || !dataAry.length ? (
          "data not available"
        ) : (
          <div>
            {dataAry.map((val) => (
              <div>
                <Card sx={{ mb: 4 }}>
                  <Typography sx={{ padding: 2 }} variant="h4">
                    {val.section_name}
                  </Typography>
                </Card>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {val.data && val.data.length && val.data.map((item) => (
                    <Card
                      sx={{ maxHeight: 280, marginRight: 4, marginLeft: 2, mb: 3 }}
                      style={{ backgroundColor: "#363837" }}
                    >
                      {val.section_link.indexOf('songs') > -1 &&
                        <CardMedia component="img" alt="Image not found" width="200px" image={item.img_path ? `${serverUrl}/${item.img_path}` : "/static/media/user-playlist-cover-pic.00a2de9d.jpg"}  />
                      }
                      {val.section_link.indexOf('songs') > -1 &&
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div" margin={0} color="#fff">
                            {item.song_name}
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div" color="#fff">
                            {item.movie_name} - {item.artist_name}
                          </Typography>
                          <IconButton
                            aria-label="play/pause"
                            style={{ position: "relative", bottom: 190, left: 60, color: "#a7a9ab" }}
                          >
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                          </IconButton>
                        </CardContent>
                      }
                      {val.section_link.indexOf('songs') === -1 &&
                        <CardMedia component="img" alt="Image not found" width="200px" image={item.path ? `${serverUrl}/${item.path}` : "/static/media/user-playlist-cover-pic.00a2de9d.jpg"} />
                      }
                      {val.section_link.indexOf('playlist') > -1 &&
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div" margin={0} color="#fff">
                            {item.playlist_name}
                          </Typography>
                        </CardContent>
                      }
                      {val.section_link.indexOf('album') > -1 &&
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div" margin={0} color="#fff">
                            {item.album_name}
                          </Typography>
                        </CardContent>
                      }
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
