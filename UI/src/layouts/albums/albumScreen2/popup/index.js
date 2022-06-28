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


const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddBoxIcon color="dark" fontSize="medium" sx={{ cursor: "pointer" }} onClick={handleClickOpen} />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add To Your Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" color= "dark">
            Select your playlist
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
          <FormControl sx={{ mt: 2, minWidth: 250, padding:"20" }}>
            <InputLabel htmlFor="Playlist" sx={{ height: "100px"}} >
              Playlist
            </InputLabel>
            <Select
              autoFocus
              value="abc"
              // onChange={""}
              onSelect={<MenuItem />}
              label="playlist"
              inputProps={{
                name: "playlist",
                id: "playlist",
              }}
            >
              <MenuItem value="Maitri">Maitri</MenuItem>
              <MenuItem value="Travel">Travel</MenuItem>
 

            </Select>
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
