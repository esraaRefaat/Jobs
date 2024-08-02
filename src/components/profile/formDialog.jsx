import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/userDetailsSlice";
import RowRadioButtonsGroup from "./inputs/radio";

export default function FormDialog({ user }) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState(user.email);
  const [position, setPosition] = React.useState(user.currentPosition);
  const [education, setEducation] = React.useState(user.education);
  const [number, setNumber] = React.useState(user.mobileNumber);
  const [gender, setGender] = React.useState(user.gender);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE1NDFjZDJhYjM5MDRkMWZjYmZlZTciLCJyb2xlIjoiaHIiLCJlbWFpbCI6Im9tYXJAZ21haWwuY29tIiwiaWF0IjoxNzIyMTA2MzE3fQ.HWwenCVT3w95loZyw_ZeMBvh-gmb5yOj9pzbiXt8lMU";
  const dispatch = useDispatch();

  const [name, setName] = React.useState(user.name);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries())[0];
    //const email = formJson.email;
    console.log(formJson);
    handleClose();
    dispatch(updateUser({ name: "omar ahmed omar" }, token));
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update Profile
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,

          // (event) => {
          //   event.preventDefault();
          //   const formData = new FormData(event.currentTarget);
          //   const formJson = Object.fromEntries(formData.entries());
          //   const email = formJson.email;
          //   console.log(email, formJson);
          //   handleClose();
          //   React.useEffect(() => {
          //     dispatch(updateUser(formJson, token));
          //   }, []);
          // },
        }}
      >
        <DialogTitle>Update your profile</DialogTitle>
        <DialogContent>
          <DialogContentText marginBottom={1}>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="normal"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            required
            margin="normal"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            margin="normal"
            id="mobile"
            name="mobileNumber"
            label="Mobile Number"
            type="number"
            fullWidth
            variant="standard"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <TextField
            required
            margin="normal"
            id="position"
            name="currentPosition"
            label="Current Position"
            type="text"
            fullWidth
            variant="standard"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <RowRadioButtonsGroup user={user}></RowRadioButtonsGroup>
          <TextField
            required
            margin="normal"
            id="education"
            name="education"
            label="Education"
            type="text"
            fullWidth
            variant="standard"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
