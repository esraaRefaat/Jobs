import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageAvatars from "./avatar";
import { Box, Divider } from "@mui/material";
import AppliedJobs from "./appliedJobs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NoAddedJobs from "./noAddedJobs";

export default function MediaCard({ user }) {
  const jobs = useSelector((state) => state.getUsers.users);
  const [visible, setVisible] = React.useState(3);
  const [showAll, setShowAll] = React.useState(false);
  let userId = useSelector((state) => state.Token.token.user_id);
  console.log("applied", jobs);
  // console.log(id);
  // let appliedJobs = jobs?.filter((jobaya) => {
  //   console.log(jobaya?.applicants._id);
  //   jobaya.applicants?.map((applicant) => {
  //     return applicant._id === id;
  //   });
  // });
  // console.log(appliedJobs);
  const appliedJobs = jobs?.filter((job) => job.createdBy._id === userId);

  const hadnleSeeAll = () => {
    setShowAll(true);
    setVisible(appliedJobs.length);
  };

  const hide = () => {
    setShowAll(false);
    setVisible(3);
  };

  // console.log(appliedJobs);

  return (
    <Card sx={{ maxWidth: 900, position: "relative" }}>
      <CardContent>
        <Box
          flexDirection={"column"}
          display={"flex"}
          alignItems={"flexStart"}
          marginTop={1}
        >
          <Typography gutterBottom variant="h5" component="div">
            Applied Jobs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            see below the list of your applied jobs
          </Typography>
        </Box>
      </CardContent>
      <Divider variant="middle" />
      {appliedJobs.length == 0 && <NoAddedJobs></NoAddedJobs>}

      {appliedJobs.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
            padding: 2,
            maxHeight: showAll ? "1000px" : "400px",
            overflow: "hidden",
            transition: "max-height 0.5s ease-in-out",
          }}
        >
          {appliedJobs.slice(0, visible).map((appliedJob, index) => {
            return (
              <Link key={appliedJob._id} to={`/jobinfo/${appliedJob._id}`}>
                <AppliedJobs
                  category={appliedJob.category}
                  type={appliedJob.employmentType}
                  catTitle={appliedJob.title}
                  catLocation={appliedJob.location}
                  catCompany={appliedJob.company}
                  catDetails={appliedJob.details}
                ></AppliedJobs>
              </Link>
            );
          })}
        </Box>
      )}
      {appliedJobs.length > 3 && (
        <CardActions sx={{ justifyContent: "flex-end", marginRight: 3 }}>
          <Button size="small" onClick={showAll ? hide : hadnleSeeAll}>
            {showAll ? "hide" : "see more"}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

