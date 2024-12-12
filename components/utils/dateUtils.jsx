// src/utils/dateUtils.js
export const formatDate = (date) => {
  if (!date) return "";
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString("en-US", options);
};