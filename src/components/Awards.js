import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import CollapseExpand from "./CollapseExpand";
import { useState } from "react";
const Awards = ({ data, onChange }) => {
  const [newAward, setNewAward] = useState({
    name: "",
    institution: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAward((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addAward = () => {
    // const id = Math.max(...data.map((education) => education.id), 0) + 1;
    // const newEducationWithId = { ...newAward, id };
    onChange([...data, newAward]);
    setNewAward({});
  };

  const handleDeleteAward = (index) => {
    const updatedAward = data.filter((_, i) => i !== index);
    onChange(updatedAward);
  };

  return (
    <CollapseExpand title="Awards">
      <div className="addMultipleInput">
        <h3>Add a new Award</h3>
        <label>Award Name</label>
        <input
          type="text"
          name="name"
          placeholder="e.g., Highest Acheiver of the Year"
          value={newAward.name || ""}
          onChange={handleChange}
        />
        <label>Company or Organization Name</label>
        <input
          type="text"
          name="institution"
          placeholder="e.g., Google LLC"
          value={newAward.institution || ""}
          onChange={handleChange}
        />
        <label>Received on (Year)</label>
        <input
          type="text"
          name="year"
          placeholder="e.g., 2024"
          value={newAward.year || ""}
          onChange={handleChange}
        />
        <button className="addButton" onClick={addAward}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>

      <div className="addedLists">
        {data[0] ? (
          <>
            <h2 className="addedListMainTitle">Added Awards</h2>
            <ul>
              {data.map((award, index) => (
                <li key={index}>
                  <h4>{award.name}</h4>
                  <div className="addedDetails">
                    <p>
                      at {award.institution} on {award.year}
                    </p>
                    <button
                      className="button"
                      onClick={() => handleDeleteAward(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="nothing-added">No Awards added.</div>
        )}
      </div>
    </CollapseExpand>
  );
};

export default Awards;
