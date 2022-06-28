/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardContent, CardMedia } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { ApiService } from "../../service/ApiSerivce";
import { getLoggedInUser } from "../../service/localstorage_service";
import bgImage from "../../assets/images/user-playlist-cover-pic.jpg";


function yourplaylist() {

  const [state, setState] = useState(false);
  const [title, setTitle] = useState('');
  const [dataAry, setDataAry] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await new ApiService().getUserPlaylists(getLoggedInUser());
      setDataAry(response.data);

    } catch (error) {
      console.log("Error --->", error);
    }
  };
  const userName = getLoggedInUser("username");
  const data = {
    userName,
    playlistName: title,
  }
  const createEmptyPlaylist = async () => {

    try {
      const response = await new ApiService().createEmptyPlaylistt(data);
      setState(!state)
      setTitle("")
      if (response.statusCode === 200) {
        setDataAry([...dataAry, response.data]);
      } else if (response.statusCode === 422) {

        console.log("error 422")
      }

      else {
        console.log("uff");

      }
    } catch (error) {
      console.log("Error While Login ===>", error);
    }
  };

  console.log("dataray", dataAry)
  useEffect(() => {
    fetchData()
  }, []);

  const handelPopUp = () => {
    setState(!state);
  }

  // const img = "https://a10.gaanacdn.com/gn_img/albums/koMWQBbqLE/MWQ7mgZ1Kq/size_m.jpg"

  return (
    <DashboardLayout>
      <div>
        <Card style={{ marginBottom: 40, display: "flex", flexDirection: "row", justifyContent: "space-between" }} sx={{ padding: 2, paddingRight: 7 }}>
          <Typography variant="h4">
            Your Playlist
          </Typography>

          <AddIcon fontSize="large" cursor="pointer" onClick={handelPopUp} />
        </Card>
        {!dataAry || !dataAry.length ? (
          "No playlist yet!!"
        ) : (
          <div>
            <div>

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {dataAry.map((val) => (
                  <Card
                    sx={{ maxHeight: 300, marginRight: 4, marginLeft: 2, mb: 3 }}
                    style={{ backgroundColor: "#363837" }}
                  >
                    <Tooltip title="Add To Your Playlist" placement="bottom">
                      <CardMedia component="img" alt="Image not found" width="100" onClick={()=>{navigate('/your-playlist-songs')}} image={bgImage} sx={{ cursor: "pointer" }} />
                    </Tooltip>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" margin={0} color="#fff">
                        {val.playlist_name}

                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}


      </div>
      <Dialog
        open={state}
        keepMounted
        onClose={handelPopUp}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Create Your Platlist</DialogTitle>
        <MDBox mb={2}>
          <MDInput type="text" onChange={event => setTitle(event.target.value)} value={title} label="Playlist Name" variant="outlined" fullWidth />
        </MDBox>

        <DialogActions>
          <Button variant="filled" onClick={createEmptyPlaylist}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}
export default yourplaylist;
