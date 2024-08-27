import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import CollapseExpand from "./CollapseExpand";
import { useState } from "react";
import { proficiencyLevels, renderProficiency } from "../utils/proficiency";

const Language = ({ data, onChange }) => {
  const [newLanguage, setNewLanguage] = useState({
    language: "",
    proficiency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLanguage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addLanguages = () => {
    if (newLanguage.language && newLanguage.proficiency) {
      onChange([...data, newLanguage]);
      setNewLanguage({ language: "", proficiency: "" });
    } else {
      alert("Both language name and proficiency are required.");
    }
  };

  const handleDeleteLanguages = (index) => {
    const updatedLanguages = data.filter((_, i) => i !== index);
    onChange(updatedLanguages);
  };

  return (
    <CollapseExpand title="Language">
      <div className="addMultipleInput">
        <h3>Add a new Language</h3>
        <label>Language Name</label>
        <input
          type="text"
          name="language"
          placeholder="e.g., English"
          value={newLanguage.language || ""}
          onChange={handleChange}
        />
        <label>Proficiency</label>
        <select
          name="proficiency"
          value={newLanguage.proficiency || ""}
          onChange={handleChange}
        >
          <option value="">Select proficiency</option>
          {proficiencyLevels.map((level) => (
            <option key={level.value} value={level.label}>
              {level.label}
            </option>
          ))}
        </select>
        <button className="addButton" onClick={addLanguages}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>

      <div className="addedLists">
        {data[0] ? (
          <>
            <h2 className="addedListMainTitle">Added Languages</h2>
            <ul>
              {data.map((lang, index) => (
                <li key={index}>
                  <h4>{lang.language}</h4>
                  <div className="addedDetails">
                    <p>
                      {lang.proficiency}
                      <br />
                      {renderProficiency(lang.proficiency)}
                    </p>
                    <button
                      className="button"
                      onClick={() => handleDeleteLanguages(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="nothing-added">No Language added.</div>
        )}
      </div>
    </CollapseExpand>
  );
};

export default Language;
