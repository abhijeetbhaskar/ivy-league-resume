import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const CollapseExpand = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const icon = expanded ? faChevronUp : faChevronDown;

  return (
    <div className="component">
      <div className="header" onClick={toggleExpanded}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <FontAwesomeIcon icon={icon} />
      </div>
      {expanded && <div className="form-content">{children}</div>}
    </div>
  );
};

export default CollapseExpand;
