import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import CollapseExpand from "./CollapseExpand";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDuration } from "../utils/formatDuration";

const Experience = ({ data, onChange }) => {
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
    duration: {
      startDate: null,
      endDate: null,
      toPresent: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "duration.toPresent") {
      setNewJob((prevJob) => ({
        ...prevJob,
        duration: {
          ...prevJob.duration,
          toPresent: checked,
          endDate: checked ? null : prevJob.duration.endDate,
        },
      }));
    } else {
      setNewJob((prevJob) => ({
        ...prevJob,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const addJob = () => {
    if (
      newJob.title &&
      newJob.company &&
      newJob.location &&
      newJob.duration.startDate
    ) {
      onChange([...data, newJob]);
      setNewJob({
        title: "",
        company: "",
        description: "",
        location: "",
        duration: {
          startDate: null,
          endDate: null,
          toPresent: false,
        },
      });
    } else {
      alert(
        "Company Name, Job Title, Job Location and Duration are mandatory to add a job."
      );
    }
  };

  const handleDeleteJob = (index) => {
    const updatedJobs = data.filter((_, i) => i !== index);
    onChange(updatedJobs);
  };

  const handleDateChange = (date, type) => {
    setNewJob((prevJob) => ({
      ...prevJob,
      duration: {
        ...prevJob.duration,
        [type]: date,
      },
    }));
  };

  return (
    <CollapseExpand title="Experience">
      <div className="addMultipleInput">
        <h3>Add a new job</h3>
        <label>Company Name</label>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
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
          name="description"
          placeholder="What you did at this job (a paragraph summary or bullet points)."
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
        <div className="durationContainer">
          <div className="durationField">
            <label>From</label>
            <DatePicker
              selected={newJob.duration.startDate}
              onChange={(date) => handleDateChange(date, "startDate")}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              placeholderText="Start Date"
            />
          </div>
          <div className="durationField">
            <label>To</label>
            <DatePicker
              selected={newJob.duration.endDate}
              onChange={(date) => handleDateChange(date, "endDate")}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              placeholderText="End Date"
              disabled={newJob.duration.toPresent}
            />
            <label className="checkboxContainer">
              <input
                type="checkbox"
                name="duration.toPresent"
                checked={newJob.duration.toPresent}
                onChange={handleChange}
              />
              Present
            </label>
          </div>
        </div>

        <button className="addButton" onClick={addJob}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>
      <div className="addedLists">
        {data[0] ? (
          <>
            <h2 className="addedListMainTitle">Added Experience</h2>
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
                        at {job.location} from {formatDuration(job.duration)}
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
          </>
        ) : (
          <div className="nothing-added">No Experience added.</div>
        )}
      </div>
    </CollapseExpand>
  );
};

export default Experience;
