export const formatString = (str) =>
  str
    .split(",")
    .map((skill) => skill.trim())
    .join(" • ");
