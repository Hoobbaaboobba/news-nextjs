export function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);

  // Get date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");

  // Combine components into desired format (e.g., YYYY-MM-DD)
  return `${year}-${month}-${day}`;
}
