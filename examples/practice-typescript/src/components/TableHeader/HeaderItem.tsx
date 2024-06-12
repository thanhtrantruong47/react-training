interface HeaderItemProps {
  label: string;
}

/**
 * Formats a string by capitalizing the first letter of each word
 * and inserting a space before each capital letter (except the first letter).
 * @param {string} str - The string to format.
 * @returns {string} The formatted string.
 */
const formatLabel = (str: string) => {
  return str
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/([A-Z])/g, ' $1')
    .trim();
};

export const HeaderItem = ({ label }: HeaderItemProps) => {
  return <th className="table-head">{formatLabel(label)}</th>;
};
