import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #fff",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ title }) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");
  const [marka, setMarka] = useState("");
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
          <Box sx={style} className="modal_box">
            <div className="modal_form">
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
                <div className="row pb-2 1">
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Markasi
                    </label>
                    <select
                      class="form-select fw-bold"
                      aria-label="Default select example"
                    >
                      <option selected>Chevrolet</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <span className="d-flex w-100 justify-content-end px-3"><KeyboardArrowDownOutlinedIcon sx={{marginTop: "-30px"}} /></span>
                  </div>
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Tanirovkasi
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <span className="d-flex w-100 justify-content-end px-3"><KeyboardArrowDownOutlinedIcon sx={{marginTop: "-30px"}} /></span>
                  </div>
                </div>
                <div className="row pb-2 2">
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Motor
                    </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Kiriting"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Year
                    </label>
                    <input
                      type="text"
                      defaultValue={""}
                      className="form-control py-2"
                      placeholder="Kiriting"
                    />
                  </div>
                </div>
                <div className="row pb-2 3">
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Color
                    </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Kiriting"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Distance
                    </label>
                    <input
                      type="text"
                      defaultValue={""}
                      className="form-control py-2"
                      placeholder="Kiriting"
                    />
                  </div>
                </div>
                <div className="row pb-2 4">
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Gearbook
                    </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Kiriting"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Narxi
                    </label>
                    <input
                      type="text"
                      defaultValue={""}
                      className="form-control py-2"
                      placeholder="Kiriting"
                    />
                  </div>
                </div>
                <div className="row pb-2 5">
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Rasm 360 ichki makon
                    </label>
                    <input
                      type="text"
                      defaultValue={file.slice(12) || ""}
                      className="form-control py-2 px-5"
                      accept="image/png, image/gif, image/jpeg"
                      placeholder="Yuklash"
                    />
                    <div className="d-flex modal_block align-items-center">
                      <label htmlFor="camera1" className="px-2">
                        <CameraAltOutlinedIcon sx={{ fontSize: 30 }} />
                      </label>
                      <input
                        id="camera1"
                        type="file"
                        className="form-control py-2"
                        defaultValue={file || ""}
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e) => setFile(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Rasm 360 tashqi makon
                    </label>
                    <input
                      type="text"
                      defaultValue={file.slice(12) || ""}
                      className="form-control py-2 px-5"
                      accept="image/png, image/gif, image/jpeg"
                      placeholder="Yuklash"
                    />
                    <div className="d-flex modal_block align-items-center">
                      <label htmlFor="camera2" className="px-2">
                        <CameraAltOutlinedIcon sx={{ fontSize: 30 }} />
                      </label>
                      <input
                        id="camera2"
                        type="file"
                        className="form-control py-2"
                        defaultValue={file || ""}
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e) => setFile(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row pb-2 6">
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Description
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Mazmuni kiriting"
                    ></textarea>
                  </div>
                  <div className="col">
                    <label htmlFor="" className="fw-bold py-2">
                      Rasm 360 ichki makon
                    </label>
                    <input
                      type="text"
                      defaultValue={file.slice(12) || ""}
                      className="form-control py-2 px-5"
                      accept="image/png, image/gif, image/jpeg"
                      placeholder="Yuklash"
                    />
                    <div className="d-flex modal_block align-items-center">
                      <label htmlFor="camera" className="px-2">
                        <CameraAltOutlinedIcon sx={{ fontSize: 30 }} />
                      </label>
                      <input
                        id="camera"
                        type="file"
                        className="form-control py-2"
                        defaultValue={file || ""}
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e) => setFile(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary px-5 py-2">
                      Saqlash
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
