import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addJob } from "../../redux/slices/addJobSlice";

export default function AddJobFrom() {
  const [open, setOpen] = React.useState(false);
  const [employmentType, setEmploymentType] = React.useState("");
  const [category, setCategory] = React.useState("");
  let token = useSelector((state) => state.Token.token.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    console.log(formJson);
    handleClose();
    dispatch(addJob({ data: formJson, token })).then((res) => {
      console.log(res.payload.job._id);
      navigate(`jobinfo/${res.payload.job._id}`);
    });
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          my: 2,
          display: "block",
          textTransform: "none",
          fontSize: "1rem",
          padding: "6px 16px",
        }}
      >
        Add Job
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Add New Job</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details for the new job listing.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Job Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="company"
            name="company"
            label="Company"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="location"
            name="location"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="details"
            name="details"
            label="Job Details"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="standard"
          />

          <FormControl fullWidth margin="dense" variant="standard" required>
            <InputLabel id="employment-type-label">Employment Type</InputLabel>
            <Select
              labelId="employment-type-label"
              id="employmentType"
              name="employmentType"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              label="Employment Type"
            >
              <MenuItem value="full-time">Full-time</MenuItem>
              <MenuItem value="part-time">Part-time</MenuItem>
              <MenuItem value="contract">Contract</MenuItem>
              <MenuItem value="internship">Internship</MenuItem>
              <MenuItem value="internship">Temporary</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense" variant="standard" required>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="marketing">Marketing</MenuItem>
              <MenuItem value="sales">Sales</MenuItem>
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="finance">Finance</MenuItem>
              <MenuItem value="human resources">Human Resources</MenuItem>
              <MenuItem value="design">Design</MenuItem>
              <MenuItem value="engineering">Engineering</MenuItem>
              <MenuItem value="business">Business</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add Job</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

