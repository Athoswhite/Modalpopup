import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { red } from "@mui/material/colors";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #dc143c",
  color: "white",
  boxShadow: 24,
  p: 4
};

const btn = {
  width: 60,
  color: "#dc143c"
};
export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAccept = () => {
    setOpen(false);
    // Redirect to signup page
  };

  return (
    <div>
      <Button onClick={handleOpen}>Sign Up</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Privacy Policy
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            I agree with the{" "}
            <a
              href="https://www.cinetie.com/a/conditions"
              style={{ color: "#ADD8E6" }}
            >
              terms and condition
            </a>{" "}
            and the{" "}
            <a
              href="https://www.cinetie.com/a/privacy"
              style={{ color: "#ADD8E6" }}
            >
              privacy policy
            </a>
            .
          </Typography>
          <Button sx={btn} onClick={handleAccept}>
            Accept
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
