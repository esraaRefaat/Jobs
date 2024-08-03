import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { jobInfoAction } from "../../redux/slices/jobInfoSlice.jsx";
import JobInfoCard from "../../components/jobInfo/jobInfoCard.jsx";
import { applyJobAction } from "../../redux/slices/applyJobSlice.jsx";
import { deleteJobAction } from "../../redux/slices/deleteJobSlice.jsx";
import { SearchAction } from "../../redux/slices/searchSlice.jsx";
import UpdateJobForm from "../../components/jobInfo/updateJobCard.jsx";
import ApplicantCard from "../../components/jobInfo/applicantCard.jsx";
import ApplicantDetailsDialog from "../../components/jobInfo/applicantDetailsDialog.jsx";
import { CircularProgress, Grid } from "@mui/material";


const JobInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseSearchUrl = "https://jobboardbackend-u9zm.onrender.com/api/v1/jobs";
  let deleteJobUrl = "https://jobboardbackend-u9zm.onrender.com/api/v1/jobs/";

  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { jobInfo, isLoading, error } = useSelector((state) => state.jobInfo);

  const token = useSelector((state) => state.Token.token);
  const isCreator = jobInfo?.createdBy?._id == token?.user_id;
  const isAdmin = token?.user_role === "admin";
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(
        jobInfoAction(
          `https://jobboardbackend-u9zm.onrender.com/api/v1/jobs/${id}`
        )
      );
    }
  }, [dispatch, id]);



  const handleApply = async(jobId) => {

    try {
      const result = await dispatch(applyJobAction({ url: `https://jobboardbackend-u9zm.onrender.com/api/v1/jobs/apply/${jobId}`, token: token.token })).unwrap();
      
      alert(result.message || 'Applied successfully!');
    } catch (error) {
      alert(error.message || 'You need to sign in to apply.');
    }
  };

  const handleEdit = () => {
    setIsUpdateModalOpen(true);

  };

  const handleDelete = async (jobId) => {

    if(isAdmin){
      deleteJobUrl="https://jobboardbackend-u9zm.onrender.com/api/v1/jobs/delete/"
    }

    try {
      const result = await dispatch(deleteJobAction({ url: `${deleteJobUrl}${jobId}`, token: token.token })).unwrap();
      
      alert(result.message || 'Job deleted successfully!');
  
      dispatch(SearchAction(`${baseSearchUrl}`));
      navigate('/search');
    } catch (error) {
      alert(error.message || 'Failed to delete the job.');
    }
  };

  const handleApplicantClick = (applicant) => {
    setSelectedApplicant(applicant);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedApplicant(null);
  };
  

  if (isLoading) return <CircularProgress size={24}/>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{padding:"20px"}}>
      <h1>Job Info</h1>
      
      {jobInfo && (
        <div>
          {jobInfo ? (
            <JobInfoCard
              jobInfo={jobInfo}
              isCreator={isCreator}
              isAdmin={isAdmin}
              onApply={handleApply}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ) : (
            <p>No job information available.</p>
          )}
          <UpdateJobForm
        isOpen={isUpdateModalOpen}
        onRequestClose={() => {setIsUpdateModalOpen(false);
          dispatch(
            jobInfoAction(
              `https://jobboardbackend-u9zm.onrender.com/api/v1/jobs/${id}`
            )
          );
        }}
        jobInfo={jobInfo}
      />
       {isCreator && (<>
        <h2>Applicants</h2>
          <Grid container spacing={2}>
            {jobInfo.applicants.map(applicant => (
              <Grid item key={applicant._id} xs={12} sm={6} md={3}>
                <ApplicantCard applicant={applicant} onClick={handleApplicantClick} />
              </Grid>
            ))}
          </Grid>
          {selectedApplicant && (
            <ApplicantDetailsDialog
              applicant={selectedApplicant}
              isOpen={isDialogOpen}
              onClose={handleDialogClose}
            />
          )}
       </>)}
        </div>
      )}
    </div>
  );
};

export default JobInfoPage;
