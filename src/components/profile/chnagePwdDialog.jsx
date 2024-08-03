import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { changePwd } from "../../redux/slices/changePwd";
import { useNavigate } from "react-router-dom";

export default function ChangePwdDialog() {
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token = useSelector((state) => state.Token.token.token);
  let message = useSelector((state) => state.pwd.pwd.message);
  console.log(message);
  // if (message) {
  //   navigate("/");
  // }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    // const email = formJson.email;
    console.log(formJson);
    handleClose();
    dispatch(changePwd({ data: formJson, token }));
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change Password
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Change your password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter below your old and new password to change it, if you
            dont remember your current password, please go to reset password
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="normal"
            id="password"
            name="password"
            label="Old Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            required
            margin="normal"
            id="newPassword"
            name="newPassword"
            label="New Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Change Password</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

