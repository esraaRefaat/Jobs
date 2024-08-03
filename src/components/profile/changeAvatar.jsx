import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AvatarGrid from "./avatarGrid";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../redux/slices/userDetailsSlice";
export default function FormDialog({ handleClose, open, avatar }) {
  // const [open, setOpen] = React.useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const dispatch = useDispatch();
  let id = useSelector((state) => state.Token.token.user_id);
  let token = useSelector((state) => state.Token.token.token);

  const [seletedAva, setSelectedAva] = React.useState(avatar);
  const [imgIndex, setImageIndex] = React.useState(4);

  const handleAvatar = (avatar, index) => {
    setSelectedAva(avatar);
    setImageIndex(index);
   
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
         
            handleClose();
            dispatch(updateUser({ data: { avatar: imgIndex }, token })).then(
              () => {
                dispatch(getUser(id)); // Update with the correct user ID
              }
            );
          },
        }}
      >
        <DialogTitle>Update your avatar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select below image to update your avatar
          </DialogContentText>
          <AvatarGrid
            currentAvatar={seletedAva}
            handleAvatar={handleAvatar}
          ></AvatarGrid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Select</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

