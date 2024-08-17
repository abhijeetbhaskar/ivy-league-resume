import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import CollapseExpand from "./CollapseExpand";
import { useState } from "react";

const Experience = ({ data, onChange }) => {
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addJob = () => {
    // const id = Math.max(...data.map((job) => job.id), 0) + 1;
    // const newJobWithId = { ...newJob, id };
    if (newJob.title && newJob.company && newJob.location && newJob.duration) {
      onChange([...data, newJob]);
      setNewJob({});
    } else {
      alert(
        "Company Name, Job Title, Job Location and Duration is mandatory to add a job."
      );
    }
  };

  const handleDeleteJob = (index) => {
    const updatedJobs = data.filter((_, i) => i !== index);
    onChange(updatedJobs);
  };

  return (
    <CollapseExpand title="Experience">
      <div className="addMultipleInput">
        <h3>Add a new job</h3>
        <label>Company Name</label>
        <input
          type="text"
          name="company"
          placeholder="Comapany Name"
          value={newJob.company || ""}
          onChange={handleChange}
        />
        <label>Job Title</label>
        <input
          type="text"
          name="title"
          placeholder="Your Role"
          value={newJob.title || ""}
          onChange={handleChange}
        />
        <label>Job Description</label>
        <textarea
          type="text"
          name="description"
          placeholder="What you did at this job
          (a paragraph summary or bullet points)."
          value={newJob.description || ""}
          onChange={handleChange}
        />
        <label>Job Location</label>
        <input
          type="text"
          name="location"
          placeholder="e.g., Gurugram, India"
          value={newJob.location || ""}
          onChange={handleChange}
        />
        <label>Duration</label>
        <input
          type="text"
          name="duration"
          placeholder="e.g., 2020 - 2024"
          value={newJob.duration || ""}
          onChange={handleChange}
        />
        <button className="addButton" onClick={addJob}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>
      <div className="addedLists">
        <h2 className="addedListMainTitle">Added Jobs</h2>
        <ul>
          {data.map((job, index) => (
            <li key={index}>
              <h4>
                {job.title} at {job.company}
              </h4>
              <div className="addedDetails">
                <p>
                  {job.description}
                  <span>
                    at {job.location} from {job.duration}
                  </span>
                </p>
                <button
                  className="button"
                  onClick={() => handleDeleteJob(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CollapseExpand>
  );
};

export default Experience;
