import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const PrintButton = ({ onClick }) => {
  return (
    <button className="addButton" onClick={onClick}>
      <FontAwesomeIcon icon={faFileArrowDown} /> Download Resume
    </button>
  );
};

export default PrintButton;
