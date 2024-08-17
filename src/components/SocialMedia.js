import React, { useState } from "react";

const Skills = ({ data, onChange }) => {
  const [group, setGroup] = useState("");
  const [skills, setSkills] = useState("");
  const [skillsList, setSkillsList] = useState(data.skills || []);

  const handleGroupChange = (e) => {
    setGroup(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleAddGroup = () => {
    if (group && skills) {
      const newSkillsList = [
        ...skillsList,
        {
          group,
          skills: skills
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill) => skill),
        },
      ];
      setSkillsList(newSkillsList);
      onChange(newSkillsList);
      setGroup("");
      setSkills("");
    }
  };

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <input
        type="text"
        name="group"
        placeholder="Skill Group Name"
        value={group}
        onChange={handleGroupChange}
      />
      <input
        type="text"
        name="skills"
        placeholder="Enter skills separated by commas"
        value={skills}
        onChange={handleSkillsChange}
      />
      <button type="button" className="add-button" onClick={handleAddGroup}>
        Add Skill Group
      </button>
      <div className="skills-list">
        {skillsList.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h3>{skillGroup.group}</h3>
            <ul>
              {skillGroup.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
