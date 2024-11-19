async function getCharacters() {
  const url = `${import.meta.env.VITE_API_URL}character`
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export { getCharacters }
