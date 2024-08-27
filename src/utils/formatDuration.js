export const formatDuration = (duration) => {
  const { startDate, endDate, toPresent } = duration;

  if (!startDate) return "Unknown";

  // Convert to Date objects if necessary
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  if (isNaN(start.getTime())) return "Invalid Start Date";
  if (endDate && isNaN(end.getTime())) return "Invalid End Date";

  const startMonthYear = start.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  const endMonthYear = toPresent
    ? "Present"
    : end
    ? end.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : "Unknown";

  return `${startMonthYear} – ${endMonthYear}`;
};
