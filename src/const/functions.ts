function truncateString(string: string) {
  return string.length > 21 ? `${string.slice(0, 18)}...` : string
}

export { truncateString }
