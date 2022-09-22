import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "1px solid #fff",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ title }) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState('');
  const [marka, setMarka] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFile("");
  };
  
  return (
    <div className="modal_category">
      <Button
        variant="contained"
        className="py-3"
        onClick={handleOpen}
        startIcon={<AddIcon />}
      >
        {title}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form className="container-fluid">
              <div className="row pb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="modal_default"></div>
                    <h2 className="m-0 px-3">Mashina qo'shish</h2>
                  </div>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <div className="row pb-4">
                <div className="col">
                  <label htmlFor="" className="fw-bold py-2">Markasi</label>
                  <input type="text" className="form-control py-2" placeholder="Kiriting" />
                </div>
                <div className="col">
                  <label htmlFor="" className="fw-bold py-2">Rasm 360 ichki makon</label>
                  <input type="text" defaultValue={file.slice(12) || ""} className="form-control py-2 px-5" accept="image/png, image/gif, image/jpeg" placeholder="Yuklash" />
                  <div className="d-flex modal_block align-items-center">
                    <label htmlFor="camera" className="px-2"><CameraAltOutlinedIcon sx={{fontSize: 30}} /></label>
                    <input id="camera" type="file" className="form-control py-2" defaultValue={file || ""} accept="image/png, image/gif, image/jpeg" onChange={(e)=>setFile(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary px-5 py-2">Saqlash</button>
                </div>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
