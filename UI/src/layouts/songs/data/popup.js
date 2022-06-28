/* eslint-disable camelcase */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { ApiService } from "../../../service/ApiSerivce";
import { getLoggedInUser } from "../../../service/localstorage_service";

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AlertDialogSlide(props) {

  const [open, setOpen] = React.useState(false);
  const [dataAry, setDataAry] = useState([]);

  const [dropDownValue, setDropDownValue] = useState("");

  const fetchData = async () => {
    try {
      const response = await new ApiService().getUserPlaylists(getLoggedInUser());
      setDataAry(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error --->", error);
    }
  };

  const handleChange = (e) => {
    console.log(e);
    setDropDownValue(e.target.value);
  }
  useEffect(() => { fetchData() }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(dropDownValue);
    setOpen(false);
    // const data = {
    //   id: dropDownValue,
    //   songId:
    // }
  };

  return (
    <div>
      {/* <Button width="20" variant="" onClick={handleClickOpen}> */}
      <AddBoxIcon color="light" onClick={handleClickOpen}
        sx={{ cursor: "pointer", mt: -2.5, ml: 8 }} />
      {/* </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add To Your Platlist</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Select you playlist
          </DialogContentText>
        </DialogContent>
        <Box
          noValidate
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "auto",
            width: "fit-content",
          }}
        >
          <FormControl sx={{ mt: 2, minWidth: 355, minHeight: 190 }}>
            <InputLabel htmlFor="playlist" height="50px">
              Playlist
            </InputLabel>



            <Select style={{
              height: "50px"
            }}
              value={dropDownValue}
              label="Playlist"
              onChange={handleChange}
            >

              {dataAry.map((element) => < MenuItem value={element.user_playlist_id} > {element.playlist_name}</MenuItem>)}


            </Select>

            {/* <select onSelect={(e)=>console.log(e.target.value)}>
              {dataAry.map(item => (
                <option
                  key={item.playlist_name}
                  value={item.playlist_name}
                >
                  {item.playlist_name}
                </option>
              ))}
            </select> */}
          </FormControl>
        </Box>
        <DialogActions>
          <Button variant="filled" onClick={handleClose}>
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
