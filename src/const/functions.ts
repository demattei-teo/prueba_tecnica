
/**
 * Truncates a given string to a maximum of 21 characters, adding an ellipsis
 * if the string is longer than 21 characters.
 *
 * @param {string} string The string to truncate
 * @returns {string} The truncated string
 */
function truncateString(string: string) {
  return string.length > 21 ? `${string.slice(0, 18)}...` : string
}

export { truncateString }
