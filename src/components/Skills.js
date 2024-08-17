import CollapseExpand from "./CollapseExpand";
import { useState } from "react";
const Skills = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState({
    groupName: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSkill((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addSkills = () => {
    // const id = Math.max(...data.map((education) => education.id), 0) + 1;
    // const newEducationWithId = { ...newSkill, id };
    onChange([...data, newSkill]);
  };

  const handleDeleteSkills = (index) => {
    const updatedSkills = data.filter((_, i) => i !== index);
    onChange(updatedSkills);
  };

  return (
    <CollapseExpand title="Skills">
      <div>
        <h3>Add a new Skill group</h3>
        <label>Skill Group Name</label>
        <input
          type="text"
          name="groupName"
          placeholder="e.g., Front-End"
          value={newSkill.groupName || ""}
          onChange={handleChange}
        />
        <label>Skills</label>
        <input
          type="text"
          name="skills"
          placeholder="e.g., HTML, CSS, JavaScript"
          value={newSkill.skills || ""}
          onChange={handleChange}
        />
        <button onClick={addSkills}>Add</button>
      </div>
      <h2>Added Skills</h2>
      <ul>
        {data.map((skillGroup, index) => (
          <li key={index}>
            <h4>{skillGroup.groupName}</h4>
            <p>{skillGroup.skills}</p>
            <button
              className="button"
              onClick={() => handleDeleteSkills(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </CollapseExpand>
  );
};

export default Skills;
