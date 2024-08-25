import CollapseExpand from "./CollapseExpand";
const ProfileSummary = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <CollapseExpand title="Profile Summary">
      <textarea
        rows={10}
        cols={50}
        name="profileSummary"
        placeholder="I am this that..."
        value={data || ""}
        onChange={handleInputChange}
      />
    </CollapseExpand>
  );
};

export default ProfileSummary;
