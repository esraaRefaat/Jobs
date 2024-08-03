import { useState, useEffect } from "react";
import { Card, CardContent, Typography, Radio, FormControl, FormControlLabel, RadioGroup, Divider } from "@mui/material";

const FilterCard = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  useEffect(() => {
    onFilter({ category, employmentType });
  }, [category, employmentType, onFilter]);

  return (
    <Card sx={{ marginRight: "20px", width: "250px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: "10px", color: "#333" }}>
          Filters
        </Typography>

        <FormControl component="fieldset" sx={{ marginBottom: "15px" }}>
          <Typography variant="h6" component="div" sx={{ marginBottom: "5px" }}>
            Category
          </Typography>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            {["", "design", "sales", "marketing", "finance", "technology", "engineering", "business", "human resources"].map((cat) => (
              <FormControlLabel key={cat} value={cat} control={<Radio />} label={cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : "All"} />
            ))}
          </RadioGroup>
        </FormControl>

        <Divider />

        <FormControl component="fieldset" sx={{ marginTop: "15px" }}>
          <Typography variant="h6" component="div" sx={{ marginBottom: "5px" }}>
            Employment Type
          </Typography>
          <RadioGroup value={employmentType} onChange={(e) => setEmploymentType(e.target.value)}>
            {["", "full-time", "part-time", "contract", "temporary", "internship"].map((type) => (
              <FormControlLabel key={type} value={type} control={<Radio />} label={type ? type.charAt(0).toUpperCase() + type.slice(1) : "All"} />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default FilterCard;
