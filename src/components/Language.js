import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import CollapseExpand from "./CollapseExpand";
import { useState } from "react";
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
    // const id = Math.max(...data.map((education) => education.id), 0) + 1;
    // const newEducationWithId = { ...newLanguage, id };
    onChange([...data, newLanguage]);
    setNewLanguage({});
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
        <input
          type="text"
          name="proficiency"
          placeholder="e.g., Native"
          value={newLanguage.proficiency || ""}
          onChange={handleChange}
        />
        <button className="addButton" onClick={addLanguages}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>

      <div className="addedLists">
      <h2 className="addedListMainTitle">Added Language</h2>
      <ul>
        {data.map((lang, index) => (
          <li key={index}>
            <h4>{lang.language}</h4>
            <div className="addedDetails">
            <p>{lang.proficiency}</p>
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
      </div>
    </CollapseExpand>
  );
};

export default Language;
