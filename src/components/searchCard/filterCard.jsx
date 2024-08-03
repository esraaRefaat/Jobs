import { useState, useEffect } from "react";

const FilterCard = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  useEffect(() => {
    onFilter({ category, employmentType });
  }, [category, employmentType, onFilter]);

  return (
    <div
      style={{
        marginRight: "20px",
        width: "250px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "10px", fontSize: "1.5rem", color: "#333" }}>
        Filters
      </h2>

      <div style={{ marginBottom: "15px" }}>
        <h3 style={{ marginBottom: "5px", fontSize: "1.2rem" }}>Category:</h3>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="category"
              value=""
              checked={category === ""}
              onChange={(e) => setCategory(e.target.value)}
            />
            All
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="category"
              value="design"
              checked={category === "design"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Design
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="category"
              value="sales"
              checked={category === "sales"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Sales
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="category"
              value="marketing"
              checked={category === "marketing"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Marketing
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="category"
              value="finance"
              checked={category === "finance"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Finance
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="category"
              value="technology"
              checked={category === "technology"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Technology
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="category"
              value="engineering"
              checked={category === "engineering"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Engineering
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="category"
              value="business"
              checked={category === "business"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Business
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="category"
              value="human resources"
              checked={category === "human resources"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Human Resources
          </label>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "5px", fontSize: "1.2rem" }}>
          Employment Type:
        </h3>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="employmentType"
              value=""
              checked={employmentType === ""}
              onChange={(e) => setEmploymentType(e.target.value)}
            />
            All
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="employmentType"
              value="full-time"
              checked={employmentType === "full-time"}
              onChange={(e) => setEmploymentType(e.target.value)}
            />
            Full-time
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="employmentType"
              value="part-time"
              checked={employmentType === "part-time"}
              onChange={(e) => setEmploymentType(e.target.value)}
            />
            Part-time
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="employmentType"
              value="contract"
              checked={employmentType === "contract"}
              onChange={(e) => setEmploymentType(e.target.value)}
            />
            Contract
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="employmentType"
              value="temporary"
              checked={employmentType === "temporary"}
              onChange={(e) => setEmploymentType(e.target.value)}
            />
            Temporary
          </label>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name="employmentType"
              value="internship"
              checked={employmentType === "internship"}
              onChange={(e) => setEmploymentType(e.target.value)}
            />
            Internship
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;

