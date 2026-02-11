/**
 * Capitalizes the first letter of a given string.
 * Useful for titles, labels, and UI text normalization.
 */
export function capitalize(value: string): string {
  if (!value) return ''
  return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * Formats a duration (in minutes) into a human-readable string.
 * Example: 45 -> "45 min", 90 -> "1h 30m"
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`
  }

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  return remainingMinutes === 0
    ? `${hours}h`
    : `${hours}h ${remainingMinutes}m`
}

/**
 * Truncates text safely for UI previews.
 */
export function truncateText(
  text: string,
  maxLength: number
): string {
  if (text.length <= maxLength) {
    return text
  }

  return `${text.slice(0, maxLength)}…`
}
