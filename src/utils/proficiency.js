export const proficiencyLevels = [
  { label: "Beginner", value: 1 },
  { label: "Conversational", value: 2 },
  { label: "Advanced", value: 3 },
  { label: "Fluent", value: 4 },
  { label: "Native", value: 5 },
];

const proficiencyMap = proficiencyLevels.reduce((map, level) => {
  map[level.label] = level.value;
  return map;
}, {});

export const renderProficiency = (proficiencyName) => {
  const level = proficiencyMap[proficiencyName] || 0; // Default to 0 if proficiencyName is not found
  const filledCircles = "●".repeat(level);
  const emptyCircles = "○".repeat(5 - level);
  return filledCircles + emptyCircles;
};
