import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateJobAction } from "../../redux/slices/updateJobSlice";
import { Modal, Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const UpdateJobForm = ({ isOpen, onRequestClose, jobInfo }) => {
  const [title, setTitle] = useState(jobInfo?.title || "");
  const [details, setDetails] = useState(jobInfo?.details || "");
  const [company, setCompany] = useState(jobInfo?.company || "");
  const [location, setLocation] = useState(jobInfo?.location || "");
  const [employmentType, setEmploymentType] = useState(jobInfo?.employmentType || "");
  const [category, setCategory] = useState(jobInfo?.category || "");


  const dispatch = useDispatch();
  const token = useSelector((state) => state.Token.token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = { title, details, company, location, employmentType , category };
    const url = `https://jobboardbackend-u9zm.onrender.com/api/v1/jobs/${jobInfo._id}`;
    await dispatch(updateJobAction({ url, jobData, token: token.token }));
    onRequestClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onRequestClose}
      aria-labelledby="update-job-title"
      aria-describedby="update-job-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="update-job-title" variant="h6" component="h2">
          Update Job
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Details"
            multiline
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="design">design</MenuItem>
              <MenuItem value="sales">sales</MenuItem>
              <MenuItem value="marketing">marketing</MenuItem>
              <MenuItem value="finance">finance</MenuItem>
              <MenuItem value="technology">technology</MenuItem>
              <MenuItem value="engineering">engineering</MenuItem>
              <MenuItem value="business">business</MenuItem>
              <MenuItem value="human resources">human resources</MenuItem>

            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Employment Type</InputLabel>
            <Select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              label="Employment Type"
            >
              <MenuItem value="full-time">Full-Time</MenuItem>
              <MenuItem value="part-time">Part-Time</MenuItem>
              <MenuItem value="contract">Contract</MenuItem>
              <MenuItem value="temporary">Temporary</MenuItem>
              <MenuItem value="internship">Internship</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Update Job
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default UpdateJobForm;
