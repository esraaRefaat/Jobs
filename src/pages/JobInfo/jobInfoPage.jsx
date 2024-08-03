import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { jobInfoAction } from "../../redux/slices/jobInfoSlice.jsx";
import JobInfoCard from "../../components/jobInfo/jobInfoCard.jsx";
import { applyJobAction } from "../../redux/slices/applyJobSlice.jsx";

const JobInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { jobInfo, isLoading, error } = useSelector((state) => state.jobInfo);
  const token = useSelector((state) => state.Token.token);
  const isCreator = jobInfo?.createdBy?._id == token?.user_id;
  const isAdmin = token?.user_id == "admin";

  useEffect(() => {
    if (id) {
      dispatch(
        jobInfoAction(
          `https://jobboardbackend-u9zm.onrender.com/api/v1/jobs/${id}`
        )
      );
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (jobInfo) {
      console.log("Fetched job info:", jobInfo);
      console.log("Fetched user info:", token);
    }
  }, [jobInfo, token]);

  const handleApply = (jobId) => {

    dispatch(applyJobAction({url:`https://jobboardbackend-u9zm.onrender.com/api/v1/jobs/apply/${id}`,token: token.token}))


    console.log(`Applying for job ${jobId}`);
  };

  const handleEdit = (jobId) => {
    console.log(`Editing job ${jobId}`);
  };

  const handleDelete = (jobId) => {
    console.log(`Deleting job ${jobId}`);
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
        </div>
      )}
    </div>
  );
};

export default JobInfoPage;
