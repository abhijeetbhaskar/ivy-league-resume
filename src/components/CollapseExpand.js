import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const CollapseExpand = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const icon = expanded ? faChevronUp : faChevronDown;

  const componentStyle = {
    border: "1px solid #ccc",
    marginBottom: "10px",
    borderRadius: "4px",
    overflow: "hidden",
    transition: "height 0.3s ease",
  };

  const headerStyle = {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    margin: "0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ccc",
  };

  const contentStyle = {
    padding: "10px",
  };

  return (
    <div style={componentStyle}>
      <div style={headerStyle} onClick={toggleExpanded}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <FontAwesomeIcon icon={icon} />
      </div>
      {expanded && <div style={contentStyle}>{children}</div>}
    </div>
  );
};

export default CollapseExpand;
