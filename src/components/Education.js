import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import CollapseExpand from "./CollapseExpand";
import { useState } from "react";
import { formatDuration } from "../utils/formatDuration";
import DatePicker from "react-datepicker";
const Education = ({ data, onChange }) => {
  const [newEducation, setnewEducation] = useState({
    degree: "",
    institution: "",
    achievement: "",
    grade: "",
    duration: {
      startDate: null,
      endDate: null,
      toPresent: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "duration.toPresent") {
      setnewEducation((prevState) => ({
        ...prevState,
        duration: {
          ...prevState.duration,
          toPresent: checked,
          endDate: checked ? null : prevState.duration.endDate,
        },
      }));
    } else {
      setnewEducation((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const addEducation = () => {
    if (
      newEducation.degree &&
      newEducation.institution &&
      newEducation.duration.startDate
    ) {
      onChange([...data, newEducation]);
      setnewEducation({
        degree: "",
        institution: "",
        achievement: "",
        grade: "",
        duration: {
          startDate: null,
          endDate: null,
          toPresent: false,
        },
      });
    } else {
      alert(
        "Education Degree, Institution and Duration is mandatory to add an education."
      );
    }
  };

  const handleDeleteEducation = (index) => {
    const updatedEducations = data.filter((_, i) => i !== index);
    onChange(updatedEducations);
  };

  const handleDateChange = (date, type) => {
    setnewEducation((prevState) => ({
      ...prevState,
      duration: {
        ...prevState.duration,
        [type]: date,
      },
    }));
  };

  return (
    <CollapseExpand title="Education">
      <div className="addMultipleInput">
        <h3>Add a new education</h3>
        <label>Institution Name</label>
        <input
          type="text"
          name="institution"
          placeholder="Add College or University name"
          value={newEducation.institution || ""}
          onChange={handleChange}
        />
        <label>Education Degree</label>
        <input
          type="text"
          name="degree"
          placeholder="e.g., Bachelor in Technology"
          value={newEducation.degree || ""}
          onChange={handleChange}
        />
        <label>Achievement (If any)</label>
        <textarea
          name="achievement"
          placeholder="Add you achievements or extra curicullar activities during this period (if any)."
          value={newEducation.achievement || ""}
          onChange={handleChange}
        />
        <label>Grade/Marks</label>
        <input
          type="text"
          name="grade"
          placeholder="e.g., Ist Div / 60% / 7.5 CGPA"
          value={newEducation.grade || ""}
          onChange={handleChange}
        />
        <label>Duration</label>
        <div className="durationContainer">
          <div className="durationField">
            <label>From</label>
            <DatePicker
              selected={newEducation.duration.startDate}
              onChange={(date) => handleDateChange(date, "startDate")}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              placeholderText="Start Date"
            />
          </div>
          <div className="durationField">
            <label>To</label>
            <DatePicker
              selected={newEducation.duration.endDate}
              onChange={(date) => handleDateChange(date, "endDate")}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              placeholderText="End Date"
              disabled={newEducation.duration.toPresent}
            />
            <label className="checkboxContainer">
              <input
                type="checkbox"
                name="duration.toPresent"
                checked={newEducation.duration.toPresent}
                onChange={handleChange}
              />
              Present
            </label>
          </div>
        </div>
        <button className="addButton" onClick={addEducation}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>

      <div className="addedLists">
        {data[0] ? (
          <>
            <h2 className="addedListMainTitle">Added Educations</h2>

            <ul>
              {data.map((education, index) => (
                <li key={index}>
                  <h4>
                    {education.degree} at {education.institution}
                  </h4>
                  <div className="addedDetails">
                    <p>
                      {education.achievement}
                      <span>
                        with {education.grade} from{" "}
                        {formatDuration(education.duration)}
                      </span>
                    </p>
                    <button
                      className="button"
                      onClick={() => handleDeleteEducation(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="nothing-added">No Education added.</div>
        )}
      </div>
    </CollapseExpand>
  );
};

export default Education;
