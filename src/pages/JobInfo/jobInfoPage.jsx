import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { jobInfoAction } from "../../redux/slices/jobInfoSlice.jsx";
import JobInfoCard from "../../components/jobInfo/jobInfoCard.jsx";
import { applyJobAction } from "../../redux/slices/applyJobSlice.jsx";
import { deleteJobAction } from "../../redux/slices/deleteJobSlice.jsx";
import { SearchAction } from "../../redux/slices/searchSlice.jsx";
import UpdateJobForm from "../../components/jobInfo/updateJobCard.jsx";

const JobInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseSearchUrl = "https://jobboardbackend-u9zm.onrender.com/api/v1/jobs";
  let deleteJobUrl = "https://jobboardbackend-u9zm.onrender.com/api/v1/jobs/";


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
  

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
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
        </div>
      )}
    </div>
  );
};

export default JobInfoPage;