import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import CollapseExpand from "./CollapseExpand";
import { useState } from "react";
const Certifications = ({ data, onChange }) => {
  const [newCertification, setNewCertification] = useState({
    name: "",
    institution: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCertification((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addCertification = () => {
    // const id = Math.max(...data.map((education) => education.id), 0) + 1;
    // const newEducationWithId = { ...newCertification, id };
    onChange([...data, newCertification]);
    setNewCertification({});
  };

  const handleDeleteCertification = (index) => {
    const updatedCertification = data.filter((_, i) => i !== index);
    onChange(updatedCertification);
  };

  return (
    <CollapseExpand title="Certifications">
      <div className="addMultipleInput">
        <h3>Add a new Certificate</h3>
        <label>Certificate Name</label>
        <input
          type="text"
          name="name"
          placeholder="e.g., JavaScript Fundamentals"
          value={newCertification.name || ""}
          onChange={handleChange}
        />
        <label>Issuing Authority</label>
        <input
          type="text"
          name="institution"
          placeholder="e.g., Microsoft"
          value={newCertification.institution || ""}
          onChange={handleChange}
        />
        <label>Issued on (Year)</label>
        <input
          type="text"
          name="year"
          placeholder="e.g., 2024"
          value={newCertification.year || ""}
          onChange={handleChange}
        />
        <button className="addButton" onClick={addCertification}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>

      <div className="addedLists">
        {data[0] ? (
          <>
            <h2 className="addedListMainTitle">Added Certifications</h2>
            <ul>
              {data.map((cert, index) => (
                <li key={index}>
                  <h4>{cert.name}</h4>
                  <div className="addedDetails">
                    <p>
                      issued by {cert.institution} on {cert.year}
                    </p>
                    <button
                      className="button"
                      onClick={() => handleDeleteCertification(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="nothing-added">No Certifications added.</div>
        )}
      </div>
    </CollapseExpand>
  );
};

export default Certifications;
