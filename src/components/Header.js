import React from "react";
import CollapseExpand from "./CollapseExpand";
const Header = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };
  return (
    <CollapseExpand title="Header Section">
      <label>Full Name </label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={data.name || ""}
        onChange={handleInputChange}
      />
      <label>Role </label>
      <input
        type="text"
        name="role"
        placeholder="Software Engineer"
        value={data.role || ""}
        onChange={handleInputChange}
      />
      <label>Phone </label>
      <input
        type="text"
        name="phone"
        placeholder="+91 9876543210"
        value={data.phone || ""}
        onChange={handleInputChange}
      />
      <label>Email </label>
      <input
        type="email"
        name="email"
        placeholder="youremail@gmail.com"
        value={data.email || ""}
        onChange={handleInputChange}
      />
      <label>LinkedIn </label>
      <input
        type="text"
        name="linkedin"
        placeholder="your-username"
        value={data.linkedin || ""}
        onChange={handleInputChange}
      />
      {!data.linkedin && (
        <>
          <label>Custom Field </label>
          <input
            type="text"
            name="customField"
            placeholder="website or alt contact num"
            value={data.customField || ""}
            onChange={handleInputChange}
          />
        </>
      )}
      {data.linkedin && (
        <p className="alert">
          <span>Note: </span>
          You can add either LinkedIn username or a custom field e.g., url. This
          is to maintain the style and simplicity of the resume. If you want to
          add both, then add custom field first then the linkedin id. To add
          custom field, delete your linkedin username first.
        </p>
      )}
      <label>Address </label>
      <input
        type="text"
        name="address"
        placeholder="City, State, Country"
        value={data.address || ""}
        onChange={handleInputChange}
      />
    </CollapseExpand>
  );
};

export default Header;
