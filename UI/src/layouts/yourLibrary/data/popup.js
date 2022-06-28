import * as React from "react";
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import MDTypography from "components/MDTypography";


function Popup() {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(1)
  }

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box>
        <MDTypography id="keep-mounted-modal-title" variant="h6" component="h2">
          Text in a modal
        </MDTypography>
        <MDTypography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </MDTypography>
      </Box>
    </Modal>
  )
}

export default Popup