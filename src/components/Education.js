import CollapseExpand from "./CollapseExpand";
import { useState } from "react";
const Education = ({ data, onChange }) => {
  const [newEducation, setnewEducation] = useState({
    degree: "",
    institution: "",
    achievement: "",
    grade: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewEducation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addEducation = () => {
    if (
      newEducation.degree &&
      newEducation.institution &&
      newEducation.duration
    ) {
      onChange([...data, newEducation]);
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

  return (
    <CollapseExpand title="Education">
      <div>
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
        <input
          type="text"
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
        <input
          type="text"
          name="duration"
          placeholder="e.g., 2020 - 2024"
          value={newEducation.duration || ""}
          onChange={handleChange}
        />
        <button onClick={addEducation}>Add</button>
      </div>
      <h2>Added Educations</h2>
      <ul>
        {data.map((education, index) => (
          <li key={index}>
            <h4>
              {education.degree} at {education.institution}
            </h4>
            <p>{education.achievement}</p>
            <p>
              with {education.grade} from
              {education.duration}
            </p>
            <button
              className="button"
              onClick={() => handleDeleteEducation(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </CollapseExpand>
  );
};

export default Education;
